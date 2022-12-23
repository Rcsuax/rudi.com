import { Stripe, loadStripe } from "@stripe/stripe-js";

type StripeLineItem = {
  price: string
  quantity: number
}

type CheckoutArgs = {
  lineItems: Array<StripeLineItem>
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
    shippingAddressCollection: {
      allowedCountries: ['GB']
    },
    lineItems,
    successUrl: window.location.origin,
    cancelUrl: window.location.origin,
  })
}

export default Checkout