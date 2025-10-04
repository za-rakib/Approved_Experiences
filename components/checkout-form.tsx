"use client";
declare const ire: any;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateMemberFromPaymentMutation,
  useCreateOrderMutation,
  useGetMemberProfileQuery,
} from "@/redux/services/api";
import { RootState } from "@/redux/store";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { CheckCircle, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import sha1 from "sha1";
import PaymentSuccess from "./payment-complete-modal";

type CheckoutFormProps = {
  plan: {
    id: string;
    name: string;
    discountedPrice: number;
    tierId: number;
  };
};

export default function CheckoutForm({ plan }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [createAccount, setCreateAccount] = useState(true);
  const [modalData, setModalData] = useState<{
    open: boolean;
    paymentType?: string;
    email?: string;
    transactionId?: string;
    amount?: number;
  }>({ open: false });
  const [stateValue, setStateValue] = useState("california");
  const [cityValue, setCityValue] = useState("san-diego");
  const [cardFields, setCardFields] = useState({
    cardNumber: { isFocused: false, isComplete: false, isEmpty: true },
    cardExpiry: { isFocused: false, isComplete: false, isEmpty: true },
    cardCvc: { isFocused: false, isComplete: false, isEmpty: true },
  });

  const token = useSelector((state: RootState) => state.auth.token);
  const tokenRef = useRef(token);
  tokenRef.current = token; // keep latest token
  const stripe = useStripe();
  const elements = useElements();

  const [createOrder] = useCreateOrderMutation();
  const [createMemberFromPayment] = useCreateMemberFromPaymentMutation();

  const { data: profile, refetch } = useGetMemberProfileQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (!tokenRef.current) return;

    let isMounted = true;

    refetch().then((res) => {
      if (!isMounted) return;
      const profile = res?.data;

      if (typeof ire !== "undefined" && profile?.user?.email) {
        const customerEmailSHA1 = sha1(profile.user.email);
        ire("identify", {
          customerId: tokenRef.current || profile.user.id,
          customerEmail: customerEmailSHA1,
          customProfileId: tokenRef.current,
        });
      }
    });

    return () => {
      isMounted = false; // cancel if unmounted
    };
  }, [refetch]);


  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    // Get form values
    const firstName = (
      document.getElementById("firstName") as HTMLInputElement
    )?.value.trim();
    const lastName = (
      document.getElementById("lastName") as HTMLInputElement
    )?.value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    )?.value.trim();
    const address = (
      document.getElementById("address") as HTMLInputElement
    )?.value.trim();
    const state = stateValue;
    const city = cityValue;
    const zip = (
      document.getElementById("zip") as HTMLInputElement
    )?.value.trim();
    const phone = (
      document.getElementById("phone") as HTMLInputElement
    )?.value.trim();

    // Validate mandatory fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !state ||
      !city ||
      !zip ||
      !phone
    ) {
      alert("Please fill all required fields.");
      return;
    }
    const res = await fetch(
      "https://selene-trickish-bennett.ngrok-free.app/api/payments/create-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.id }),
      }
    );
    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement)!,
      },
    });

    if (result.error) {
      console.error("❌ Payment failed:", result.error.message);
      alert(result.error.message);
      return;
    }

    if (result.paymentIntent?.status === "succeeded") {
      const total = plan.discountedPrice + 149.99;
      const customerEmailSHA1 = sha1(email);

      // --- IRE Tracking ---
      if (typeof ire !== "undefined") {
        // Track conversion
        ire(
          "trackConversion",
          61026,
          {
            orderId: result.paymentIntent.id,
            customProfileId: token || email,
            customerId: token || email,
            customerEmail: customerEmailSHA1,
            customerStatus: token ? "Returning" : "New",
            currencyCode: "USD",
            orderPromoCode: "",
            orderDiscount: 0,
            items: [
              {
                subTotal: 149.99,
                category: "Enrollment",
                sku: "ENROLL-001",
                quantity: 1,
                name: "One Time Enrollment Fee",
              },
              {
                subTotal: plan.discountedPrice,
                category: "Membership",
                sku: `PLAN-${plan.id}`,
                quantity: 1,
                name: plan.name,
              },
            ],
          },
          { verifySiteDefinitionMatch: true }
        );
      }
      if (createAccount) {
        const memberPayload = {
          userData: {
            email:
              profile?.data?.email ??
              (document.getElementById("email") as HTMLInputElement)?.value,
            password: "TempPassword123!",
            firstName:
              profile?.data?.firstName ??
              (document.getElementById("firstName") as HTMLInputElement)?.value,
            lastName:
              profile?.data?.lastName ??
              (document.getElementById("lastName") as HTMLInputElement)?.value,
          },
          membershipTierId: plan.id,
          paymentData: {
            stripeCustomerId: result.paymentIntent.id as string,
            promoCode: "",
            discount: 0,
            totalAmount: total,
            items: [
              {
                name: "One Time Enrollment Fee",
                category: "Enrollment",
                sku: "ENROLL-001",
                quantity: 1,
                unitPrice: 149.99,
                subTotal: 149.99,
              },
              {
                name: plan.name,
                category: "Membership",
                sku: `PLAN-${plan.id}`,
                quantity: 1,
                unitPrice: plan.discountedPrice,
                subTotal: plan.discountedPrice,
              },
            ],
          },
        };

        try {
          await createMemberFromPayment(memberPayload).unwrap();
          setModalData({
            open: true,
            paymentType: "Credit Card",
            email: memberPayload?.userData?.email,
            transactionId: result.paymentIntent.id,
            amount: total,
          });
        } catch (err) {
          console.error("Error creating member from payment:", err);
          alert("Payment succeeded but account creation failed.");
        }
      } else {
        const orderPayload = {
          ...(token && profile?.data?.id ? { userId: profile.data.id } : {}),
          customerEmail:
            profile?.data?.email ??
            (document.getElementById("email") as HTMLInputElement)?.value,
          customerFirstName:
            profile?.data?.firstName ??
            (document.getElementById("firstName") as HTMLInputElement)?.value,
          customerLastName:
            profile?.data?.lastName ??
            (document.getElementById("lastName") as HTMLInputElement)?.value,
          customerStatus: token ? "Returning" : "New",
          currencyCode: "USD",
          orderPromoCode: "",
          orderDiscount: 0,
          totalAmount: total,
          items: [
            {
              name: "One Time Enrollment Fee",
              category: "Enrollment",
              sku: "ENROLL-001",
              quantity: 1,
              unitPrice: 149.99,
              subTotal: 149.99,
            },
            {
              name: plan.name,
              category: "Membership",
              sku: `PLAN-${plan.id}`,
              quantity: 1,
              unitPrice: plan.discountedPrice,
              subTotal: plan.discountedPrice,
            },
          ],
        };

        try {
          await createOrder(orderPayload).unwrap();
          setModalData({
            open: true,
            paymentType: "Credit Card",
            email: orderPayload.customerEmail,
            transactionId: result?.paymentIntent?.id,
            amount: total,
          });
        } catch (err) {
          console.error("Error creating order:", err);
          alert("Payment succeeded but order creation failed.");
        }
      }
    }
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {modalData.open && <PaymentSuccess {...modalData} />}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left column */}
        <div className="lg:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight">
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue={profile?.data?.firstName ?? ""}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue={profile?.data?.lastName ?? ""}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={profile?.data?.email ?? ""}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" className="mt-1" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Select
                    defaultValue="california"
                    onValueChange={setStateValue}
                  >
                    <SelectTrigger id="state" className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="california">California</SelectItem>
                      <SelectItem value="texas">Texas</SelectItem>
                      <SelectItem value="florida">Florida</SelectItem>
                      <SelectItem value="new-york">New York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Select defaultValue="san-diego" onValueChange={setCityValue}>
                    <SelectTrigger id="city" className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="san-diego">San Diego</SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="san-francisco">
                        San Francisco
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="zip">Zip/Postal Code</Label>
                  <Input id="zip" defaultValue="" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="" className="mt-1" />
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Checkbox
                  id="create-account"
                  checked={!tokenRef.current ? createAccount : false}
                  onCheckedChange={(val) => setCreateAccount(!!val)}
                  disabled={!!tokenRef.current}
                />
                <Label htmlFor="create-account" className="text-sm font-normal">
                  Create an account for later use
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight">
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <Label htmlFor="paypal" className="ml-3 font-medium">
                    PayPal
                  </Label>
                  <img
                    src="/paypal-logo.png"
                    alt="PayPal"
                    className="h-6 ml-auto"
                  />
                </div>
                {paymentMethod === "paypal" && (
                  <p className="text-sm text-gray-500 mt-2 pl-7">
                    You will be redirected to the PayPal website after
                    submitting your order.
                  </p>
                )}
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment"
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={() => setPaymentMethod("credit-card")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <Label htmlFor="credit-card" className="ml-3 font-medium">
                    Pay with Credit Card
                  </Label>
                  <div className="ml-auto flex items-center space-x-2">
                    <img src="/visa.jpg" alt="Visa" className="h-6" />
                    <img src="/discover.png" alt="Discover" className="h-6" />
                    <img src="/maestro.png" alt="Maestro" className="h-6" />
                    <img
                      src="/mastercard.png"
                      alt="Mastercard"
                      className="h-6"
                    />
                     <img
                      src="/american-express.png"
                      alt="American Express"
                      className="h-6"
                    />
                  </div>
                </div>
                {paymentMethod === "credit-card" && (
                  <div className="space-y-4 mt-4 pl-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <StripeInputWrapper
                        label="Card number"
                        // isFocused={cardFields.cardNumber.isFocused}
                        // isEmpty={cardFields.cardNumber.isEmpty}
                        isComplete={cardFields.cardNumber.isComplete}
                      >
                        <CardNumberElement
                          options={{
                            style: {
                              base: {
                                color: "#333",
                                "::placeholder": { color: "transparent" },
                              },
                            },
                          }}
                          onFocus={() =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardNumber: {
                                ...prev.cardNumber,
                                isFocused: true,
                              },
                            }))
                          }
                          onBlur={() =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardNumber: {
                                ...prev.cardNumber,
                                isFocused: false,
                              },
                            }))
                          }
                          onChange={(e) =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardNumber: {
                                ...prev.cardNumber,
                                isComplete: e.complete,
                                isEmpty: e.empty,
                              },
                            }))
                          }
                        />
                      </StripeInputWrapper>
                      <StripeInputWrapper
                        label="Expiration Date"
                        isComplete={cardFields.cardExpiry.isComplete}
                      >
                        <CardExpiryElement
                          options={{
                            style: {
                              base: {
                                color: "#333",
                                "::placeholder": { color: "transparent" },
                              },
                            },
                          }}
                          onFocus={() =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardExpiry: {
                                ...prev.cardExpiry,
                                isFocused: true,
                              },
                            }))
                          }
                          onBlur={() =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardExpiry: {
                                ...prev.cardExpiry,
                                isFocused: false,
                              },
                            }))
                          }
                          onChange={(e) =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardExpiry: {
                                ...prev.cardExpiry,
                                isComplete: e.complete,
                                isEmpty: e.empty,
                              },
                            }))
                          }
                        />
                      </StripeInputWrapper>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                      <StripeInputWrapper
                        label="Card Security Code"
                        isComplete={cardFields.cardCvc.isComplete}
                      >
                        <CardCvcElement
                          options={{
                            style: {
                              base: {
                                color: "#333",
                                "::placeholder": { color: "transparent" },
                              },
                            },
                          }}
                          onFocus={() =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardCvc: { ...prev.cardCvc, isFocused: true },
                            }))
                          }
                          onBlur={() =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardCvc: { ...prev.cardCvc, isFocused: false },
                            }))
                          }
                          onChange={(e) =>
                            setCardFields((prev) => ({
                              ...prev,
                              cardCvc: {
                                ...prev.cardCvc,
                                isComplete: e.complete,
                                isEmpty: e.empty,
                              },
                            }))
                          }
                        />
                      </StripeInputWrapper>
                      <div className="text-right">
                        <Button
                          variant="link"
                          className="text-blue-600 p-0 h-auto"
                        >
                          What is this?
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-gray-400" />
                <span>
                  We protect your payment information using encryption to
                  provide bank-level security.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight">
                Billing Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* <div className="flex justify-between">
                  <span>One Time Enrollment Fee</span>
                  <span className="font-semibold">US$149.99</span>
                </div> */}
                <div className="flex justify-between">
                  <span>{plan.name}</span>
                  <span className="font-semibold">
                    US${plan.discountedPrice}
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total due today</span>
                <span>US${plan.discountedPrice + 149.99}</span>
              </div>
              <Button
                onClick={handleSubmit}
                className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                disabled={!stripe || !elements}
              >
                Pay US${plan.discountedPrice + 149.99}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const StripeInputWrapper = ({
  label,
  isComplete,
  children,
}: {
  label: string;
  isComplete: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <label
        className={`absolute left-3 transition-all duration-200 -top-2.5 text-xs text-gray-500 bg-white px-1`}
      >
        {label}
      </label>
      <div className={`flex items-center border rounded-md px-3 h-12 bg-white`}>
        <div className="w-full">{children}</div>
        {isComplete && <CheckCircle className="w-5 h-5 text-green-500" />}
      </div>
    </div>
  );
};
