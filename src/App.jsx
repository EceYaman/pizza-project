import { useState } from 'react';
import './App.css'
import { HomePage } from './components/HomePage'
import "./components/Layout.css"
import OrderPage from './components/OrderPage'
import { SuccessPage } from './components/SuccessPage';
import axios from 'axios';

function App() {
  const [isOrderPage, setIsOrderPage] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false); 

  const handleSubmit = async (orderData) => {
    try {
        const response = await axios.post('https://reqres.in/api/pizza', orderData);
        console.log(response.data); 
        setIsOrderSuccess(true);  
    } catch (error) {
        console.error(error); 
    }
  };

  return (
    <>
      {isOrderSuccess ? (
        <SuccessPage />  
      ) : isOrderPage ? (
        <OrderPage setIsOrderPage={setIsOrderPage} handleSubmit={handleSubmit} />  
      ) : (
        <HomePage setIsOrderPage={setIsOrderPage} /> 
      )}
    </>
  )
}

export default App
