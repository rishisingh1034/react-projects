import React, { useState } from 'react';


const Card = ({place,price,image,alt,more,less}) => {
    const [readmore,setReadmore] = useState(true);
    const [notintrested,setNointrested] = useState(false);

    const Expand = () => {
        setReadmore(!readmore);
    }

    const Notintrestedbutton = () => {
        setNointrested(true);
    }

    const Refresh = () => {
        setNointrested(false);
    }

    return (
        <>
        {!notintrested && <div className='bg-gray-200 h-fit w-fit mt-4 rounded-md ml-8 shadow-md shadow-slate-600'>
            <div className='p-2'>
            <img src={image} alt={alt} className='h-[400px] w-[380px] object-cover m-2' />
            <div>
                <h2 className='text-green-600 font-extrabold text-xl'>{price}</h2>
                <h3 className='text-2xl font-extrabold'>{place}</h3>
            </div>

            <p className='w-[380px]'>{readmore?more:less}
            <button className='text-green-500 hover:text-green-800' onClick={Expand}>{readmore?'Readmore':'Readless'}</button></p>

            <div className='bg-red-400 cursor-pointer text-[20px] text-center mx-16 my-4 p-2 border-[3px] border-solid border-red-600 rounded-md hover:bg-red-600' onClick={Notintrestedbutton}>Not Interested</div>

            </div>
        </div>}
        {notintrested && (
            <div className='mx-auto mt-[20rem] h-[30px] w-fit'>
                <p className='mb-3 text-2xl font-bold'>No Tours Left</p>
            <div className='bg-slate-500 p-2 text-center cursor-pointer hover:bg-slate-300' onClick={Refresh}>Refresh</div>
            </div>
        )}
        </>
    )
}

export default Card;