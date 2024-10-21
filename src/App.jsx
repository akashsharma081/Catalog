import { useState } from 'react';
import Header from './components/Header'
import { Outlet } from "react-router-dom";
function App() {
  const [amount, setAmount] = useState(63179.71); 
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };
  
  return (
    <>
     <Header amount={amount} onAmountChange={handleAmountChange} />
     <Outlet context={{ amount }} /> 
    </>
  )
}

export default App
