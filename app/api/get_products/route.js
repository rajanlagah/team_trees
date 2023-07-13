import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_API_KEY)
    const price = await stripe.prices.list({
        limit: 4
    })

    return NextResponse.json(price.data)
}