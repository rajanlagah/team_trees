'use client';
import InputForm from "./component/InputForm";
import axios from "axios";
import Card from "./component/card";
import { useEffect, useState } from "react";

export default function Home() {

  const [transactions, setTransactions] = useState()

  const onSelectTreeCount = async (price) => {
    const { data } = await axios(`/api/payment?payament_amount=${price}`)
    window.location.assign(data)
  }

  const fetchAllTransactions = async (price) => {
    // fetch(`/api/payment?price=${[price]}`)
    const { data } = await axios(`/api/transactions`)
    setTransactions(data)
    console.log("data ==>", data)
  }

  useEffect(()=>{
    fetchAllTransactions()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-gradient-to-b from-indigo-300 to-purple-400 w-full">
        <div className="bg-hero-pattern bg-cover bg-bottom bg-no-repeat 
                        w-full h-screen
                        flex
                        justify-center
                        items-end
        ">
          <InputForm onSelectTreeCount={onSelectTreeCount}/>          
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="font-bold text-2xl m-auto w-full text-center">Recent Transactions</h1>
        <br/>
        <br/>
        <br/>
        { Array.isArray(transactions) && transactions.map( trx => <Card {...trx} />)}
        <Card/>
      </section>
      <br/>
      <br/>
      <br/>
    </main>
  );
}
