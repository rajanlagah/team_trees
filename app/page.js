'use client';
import InputForm from "./component/InputForm";
import axios from "axios";

export default function Home() {
  const onSelectTreeCount = async (price) => {
    // fetch(`/api/payment?price=${[price]}`)
    const { data } = await axios(`/api/payment?payament_amount=${price}`)
    window.location.assign(data)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-gradient-to-b from-indigo-300 to-purple-400 w-full">
        <div className="bg-hero-pattern bg-cover bg-bottom bg-no-repeat 
                        w-full h-screen
                        flex
                        justify-center
                        items-center
        ">
          <InputForm onSelectTreeCount={onSelectTreeCount}/>          
        </div>
        <button onClick={onSelectTreeCount}>Some</button>
      </section>
    </main>
  );
}
