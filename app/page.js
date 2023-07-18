'use client';
import InputForm from "./component/InputForm";
import axios from "axios";
import Card from "./component/Card";
import { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// import '/images/background.png'

export default function Home() {

  const [transactions, setTransactions] = useState()

  const onSelectTreeCount = async (price) => {
    const { data } = await axios(`/api/payment?payament_amount=${price}`)
    window.location.assign(data)
  }

  const fetchAllTransactions = async (price) => {
    // fetch(`/api/payment?price=${[price]}`)
    const { data } = await axios(`/api/transactions`,{
      headers:{
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
    setTransactions(data)
  }

  useEffect(()=>{
    fetchAllTransactions()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-gradient-to-b from-indigo-300 to-purple-400 w-full">
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="flex w-full h-screen justify-center items-end">
          <InputForm onSelectTreeCount={onSelectTreeCount}/>          
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
        <div className="w-full text-white-100 h-screen pt-20 bg-[#210002]">
          <h1 className="text-4xl uppercase m-auto w-full text-center tracking-wider">Recent Transactions</h1>
          <br/>
          <br/>
          <br/>
          { Array.isArray(transactions) && transactions.map( trx => <Card key={trx.id} {...trx} />)}
        </div>
        </ParallaxLayer>
      </Parallax>
        <br/>
        <br/>
        <br/>
        <br/>
        
      </section>
      <br/>
      <br/>
      <br/>
    </main>
  );
}
