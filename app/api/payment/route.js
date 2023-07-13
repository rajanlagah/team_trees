import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_API_KEY)
    let data = request.nextUrl.searchParams
    let payament_amount = data.get("payament_amount")
    const price = await stripe.prices.create({
        currency: 'inr',
        nickname: 'custom_price',
        unit_amount: payament_amount*100,
        product_data: {
            name: 'custom_price',
          }
    });
    const session = await stripe.checkout.sessions.create({
        cancel_url: 'http://localhost:3000',
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000',
      });
    console.log(session.url)
    return NextResponse.json(session.url,{status:200})
}