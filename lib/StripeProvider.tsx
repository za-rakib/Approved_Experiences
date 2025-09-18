"use client"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { ReactNode } from "react"

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!)

// Please see below for the publishable key:

// pk_live_51OS0xwKIlFfXsCZe7vRqoMUnQCMFPg7xnQAjupDZss0ZCnFUl7eNFDpumiEosui0TZiVOx4fl6F3n3wlEephjqqW00rQzvDGmf

// Please see below for the secret key:

// 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
const stripePromise = loadStripe("pk_test_51OS0xwKIlFfXsCZeHa9JW0Mq4cuRNFlycfBlqljqhgjqsla3AKTHwrBuLBElsXqbRz60NtixW91LNALL1Hjz5gSy00HKqUnQdS")

export default function StripeProvider({ children }: { children: ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>
}
