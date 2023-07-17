import React from 'react';

function Card({name = "User", created = 1689431985, amount = 200000, currency}) {
    const getDate = () => {
        try{
            const date = new Date(created)
            return date.toISOString().split("T")[0]
        }catch(e){
            console.log(e)
            return "-"
        }
    }
    return (
        <div className='flex justify-between text-white-100 w-2/3 md:w-1/2 m-auto border-b-[0.5px] border-white-500 p-2'>
            <div>
                <span className='font-bold text-white-100 py-2'>{name}</span> <br/>
                <span className='font-grey font-light'>{getDate(created)}</span>
            </div>
            <div>
                <span className='font-semibold'>{amount/100} {currency} </span>
            </div>
        </div>
    );
}

export default Card;