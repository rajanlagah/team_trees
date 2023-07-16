import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request){
    const stripe = new Stripe(process.env.STRIPE_API_KEY)
    const params = {
        limit: 10
      };
      const paymentIntents = await stripe.paymentIntents.list(params);
      const successfulPayments = paymentIntents.data.filter(
        (pi) => pi.status === 'succeeded'
      );

    return NextResponse.json(successfulPayments)
}