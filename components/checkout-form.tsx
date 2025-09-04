"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield } from "lucide-react"

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Shipping Information */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <Input id="firstName" defaultValue="Johannes Mark" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input id="lastName" defaultValue="Parker" className="mt-1" />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input id="email" type="email" defaultValue="username@gmail.com" className="mt-1" />
              </div>

              {/* Street Address */}
              <div>
                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                  Street Address
                </Label>
                <Input id="address" className="mt-1" />
              </div>

              {/* State and City */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                    State/Province
                  </Label>
                  <Select defaultValue="california">
                    <SelectTrigger className="mt-1">
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
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                    City
                  </Label>
                  <Select defaultValue="san-diego">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="san-diego">San Diego</SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="san-francisco">San Francisco</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Zip and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zip" className="text-sm font-medium text-gray-700">
                    Zip/Postal Code
                  </Label>
                  <Input id="zip" defaultValue="22434" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </Label>
                  <Input id="phone" defaultValue="+1 23 456 789 111" className="mt-1" />
                </div>
              </div>

              {/* Create Account Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox id="create-account" defaultChecked />
                <Label htmlFor="create-account" className="text-sm text-gray-700">
                  Create an account for later use
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* PayPal Option */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                    onChange={() => setPaymentMethod("paypal")}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="paypal" className="font-medium">
                    PayPal
                  </Label>
                  <div className="ml-auto">
                    <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 ml-7">
                  You will be redirected to the PayPal website after submitting your order
                </p>
              </div>

              {/* Credit Card Option */}
              <div className="border-2 border-blue-500 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment"
                    value="credit-card"
                    defaultChecked
                    onChange={() => setPaymentMethod("credit-card")}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="credit-card" className="font-medium">
                    Pay with Credit Card
                  </Label>
                  <div className="ml-auto flex space-x-2">
                    <img src="/visa-logo-generic.png" alt="Visa" className="h-6" />
                    <img src="/abstract-discover-logo.png" alt="Discover" className="h-6" />
                    <img src="/maestro-logo.png" alt="Maestro" className="h-6" />
                    <img src="/mastercard-logo.png" alt="Mastercard" className="h-6" />
                  </div>
                </div>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-4 ml-7">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="card-number" className="text-sm font-medium text-gray-700">
                          Card number
                        </Label>
                        <Input id="card-number" defaultValue="1234 5678 9101 3456" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="expiry" className="text-sm font-medium text-gray-700">
                          Expiration Date
                        </Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cvc" className="text-sm font-medium text-gray-700">
                          Card Security Code
                        </Label>
                        <Input id="cvc" placeholder="***" className="mt-1" />
                      </div>
                      <div className="flex items-end">
                        <Button variant="link" className="text-blue-600 p-0 h-auto">
                          What is this?
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>We protect your payment information using encryption to provide bank-level security.</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Billing Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Billing Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Items */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">One Time Enrollment Fee</span>
                  <span className="font-semibold">US$149.99</span>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Approved Experiences Traveler</span>
                    <span className="font-semibold">US$299.99</span>
                  </div>
                  <div className="text-sm text-gray-500">Quarterly Membership</div>
                  <div className="text-sm text-blue-600">All Traveler Benefits Included</div>
                  <div className="text-sm text-blue-600">Billed every 3 months</div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal</span>
                  <span>US$449.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tax</span>
                  <span>US$0.00</span>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total due today</span>
                <span>US$449.98</span>
              </div>

              {/* Pay Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">Pay US$449.98</Button>

              {/* Norton Security */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Norton</span>
                <span className="text-xs">SECURED</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
