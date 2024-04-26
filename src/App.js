
import { useState } from 'react';
import './App.css';

function App() {

  const [cost ,setCost] =useState(0);
  const [interest,setInterest] =useState(1);
  const [fees ,setFees] =useState(0);
  const [downpayment,setDownpayment] =useState(0);


  const updateemi =() =>{
    
  }

  return (
    <>
    <div>
      <h1 className='text-4xl font-bold ml-36 mt-24'>Emi Calculator</h1>
      <h1 className='text-left ml-36 font-bold text-2xl mt-24'>total cost of assets</h1>
      <input type="number"
      value={cost }
      onChange={(e) =>setCost(e.target.value)}
      placeholder='total cost of assets'
      className='w-1/2 ml-36 border border-gray-400'
      />

<h1 className='text-left ml-36 font-bold text-2xl mt-24'>Interest rate in (%)</h1>
      <input type="number"
      value={interest }
      onChange={(e) =>setInterest(e.target.value)}
      placeholder='Interest rate'
      className='w-1/2 ml-36 border border-gray-400'
      />

<h1 className='text-left ml-36 font-bold text-2xl mt-24'> Processing fees</h1>
      <input type="number"
      value={fees }
      onChange={(e) =>setFees(e.target.value)}
      placeholder='Processing fees'
      className='w-1/2 ml-36 border border-gray-400'
      />

</div>
  <div>
<h1 className='text-left ml-36 font-bold text-2xl mt-8'>Down Payment</h1>
      <input type="range"
      min={0}
      max={cost}
      value={downpayment}
      onChange={updateemi}
      className='w-1/2 ml-36 mt-8 '
      />
      <div  className='w-1/2 ml-36 font-bold text-xl' >
      <label className='mr-72' >0%</label>
      <label className='mr-96' > {downpayment}  </label>
      <label  > 100% </label>
      </div>
  
  
  
     <h1 className='text-left ml-36 font-bold text-2xl mt-8'>Loan per month</h1>
      <input type="range"
      min={0}
      max={cost}
      className='w-1/2 ml-36 mt-8 '
      />
      <div className='w-1/2 ml-36 font-bold text-xl'>
      <label className='mr-72' >0%</label>
      <label className='mr-96'> {downpayment}  </label>
      <label > 100% </label>
      </div>
     

    
    </div>
    </>
  );
}

export default App;
