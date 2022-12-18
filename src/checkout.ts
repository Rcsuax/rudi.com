import { Stripe, loadStripe } from "@stripe/stripe-js";

type CheckoutArgs = {
  lineItems: Array<StripeLineItem>
}

type StripeLineItem = {
  price: string
  quantity: number
}

const Checkout = async ({ lineItems }: CheckoutArgs) => {
  let stripePromise: Promise<Stripe | null>

  const getStripe = () => {
    if(!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)
    }
    return stripePromise
  }

  const stripe = await getStripe()

  await stripe?.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: window.location.origin,
    cancelUrl: window.location.origin,
  })
}

export default Checkout