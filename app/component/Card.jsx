import React from 'react';

function Card({name = "rajn", created = 1689431985, amount = 200000}) {
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
        <div className='flex justify-between w-2/3 md:w-1/2 m-auto shadow-sm p-2'>
            <div>
                <span className='font-bold py-2'>{name}</span> <br/>
                <span className='font-grey font-light'>{getDate(created)}</span>
            </div>
            <div>
                <span className='font-semibold'>{amount/100}</span>
            </div>
        </div>
    );
}

export default Card;