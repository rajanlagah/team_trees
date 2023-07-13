"use client"
import React, { useState } from "react";

const InputForm = ({onSelectTreeCount}) => {
  
  const TREES_COUNT = [5, 20, 50, 100]
  const SINGLE_TREE_PRICE = 100
  const [price, setPrice] = useState()

  const button_class = "bg-transparent hover:bg-secondary text-primary font-semibold hover:text-tertiary py-2 px-12 border border-secondary hover:border-transparent rounded"
  const active_button_class = "bg-secondary hover:bg-transparent text-tertiary font-semibold py-2 px-12 border border-secondary rounded"

  const handleTreesSelectClick = (e,price) => {
    e.preventDefault()
    setPrice(price)
  }

  const handlePayClick = (e) => {
    e.preventDefault()
    onSelectTreeCount(price)
  }

  return (
    <div className="bg-white shadow-md bg-tertiary rounded p-8 max-w-md flex items-center flex-col">
    <span className="text-2xl font-extrabold">JOIN #TEAMTREES!</span>
    <span className="font-bold">$1 plants a tree</span>
    <form >
      <div className="mb-2 mt-2 grid grid-cols-2 gap-2">
        {TREES_COUNT.map( item => 
          <button
            key={item}
            onClick={(e)=> handleTreesSelectClick(e,item*SINGLE_TREE_PRICE)}
            className={price == item*SINGLE_TREE_PRICE ? active_button_class : button_class}>
            {item} Tree
          </button>
          )}
      </div>
      <label className="relative block">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-secondary rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Other amount"
          type="text"
          onChange={(e)=>setPrice(e.target.value)}
          name="search"
          />
      </label>
      <button 
            onClick={handlePayClick}
            className="bg-secondary w-full mt-12 hover:bg-tertiary text-tertiary font-semibold hover:text-secondary py-2 px-12 border border-secondary hover:border-transparent rounded">
            Make Payment
          </button>
    </form>
    </div>
  );
};

export default InputForm;
