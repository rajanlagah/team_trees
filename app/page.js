import Image from "next/image";
import InputForm from "./component/InputForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-gradient-to-b from-indigo-300 to-purple-400 w-full">
        <div className="bg-hero-pattern bg-cover bg-bottom bg-no-repeat 
                        w-full h-screen
                        flex
                        justify-center
                        items-center
        ">
          <InputForm/>          
        </div>
      </section>
    </main>
  );
}
