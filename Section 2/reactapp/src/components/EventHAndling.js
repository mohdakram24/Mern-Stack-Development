import React, { useState } from 'react'

const EventHAndling = () => {

  const [count, setCount] = useState(0);
  const updateState=()=>{
    setCount(count+5);
  }



  let cartitem =10;

  const addToCart = () => {
    cartitem++;
    console.log(cartitem);
    // alert(cartitem);
  }


    const handleClick=()=>{
        console.log('clicked');
        let n=121;
        let num=n;
        let rev=0;
        while(n>0){
          let rem=n%10;
          rev=rev*10+rem;
          n=parseInt(n/10);
        }
        if(num===rev){
          alert('palindrome number');
        }
        else{
          alert('not palindrome');
        }
    }


  return (
    <div className='container mt-5'>
        <h1 className='text-center display-1'>Event Handling</h1>
        <hr />
        <h4>Click Event</h4>
        <button className='btn btn-danger' onClick={()=>{
            alert('Hello welcome back')
        }}>Click to see</button>
        <br /><br />
        <button className='btn btn-primary' onClick={handleClick}>Another event click</button>
        <h4>State Management</h4>
        <button className='btn btn-success' onClick={addToCart}>Add item to cart.</button>
        <h1>{cartitem}</h1>
        <button className='btn btn-warning' onClick={updateState}>Update State</button>
        <h1>{count}</h1>
    </div>
  )
}

export default EventHAndling;