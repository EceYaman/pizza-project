import { useState } from 'react';
import './App.css'
import { HomePage } from './components/HomePage/HomePage'
import OrderPage from './components/OrderPage/OrderPage'
import { SuccessPage } from './components/SuccessPage/SuccessPage';
import axios from 'axios';

function App() {
  const [isOrderPage, setIsOrderPage] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false); 
  const [data, setData] = useState({})

  const handleSubmit = async (orderData) => {
    try {
        const response = await axios.post('https://reqres.in/api/pizza', orderData);
        console.log(response.data); 
        setIsOrderSuccess(true); 
        setData(response.data);
    } catch (error) {
        console.error(error); 
    }
  };

  return (
    <>
      {isOrderSuccess ? (
        <SuccessPage data={data}/>  
      ) : isOrderPage ? (
        <OrderPage setIsOrderPage={setIsOrderPage} handleSubmit={handleSubmit} />  
      ) : (
        <HomePage setIsOrderPage={setIsOrderPage} /> 
      )}
    </>
  )
}

export default App
