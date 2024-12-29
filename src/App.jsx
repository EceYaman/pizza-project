import { useState } from 'react';
import './App.css'
import { HomePage } from './components/HomePage'
import "./components/Layout.css"
import OrderPage from './components/OrderPage'
import { SuccessPage } from './components/SuccessPage';

function App() {
  const [isOrderPage, setIsOrderPage] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false); 
  return (
    <>
      {isOrderSuccess ? (
        <SuccessPage />  
      ) : isOrderPage ? (
        <OrderPage setIsOrderPage={setIsOrderPage} setIsOrderSuccess={setIsOrderSuccess} />  
      ) : (
        <HomePage setIsOrderPage={setIsOrderPage} /> 
      )}
    </>
  )
}

export default App
