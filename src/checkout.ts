import { Stripe, loadStripe } from "@stripe/stripe-js";

const Checkout = async ({ lineItems }: any) => {
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