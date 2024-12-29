import { useState } from 'react';
import './App.css'
import { HomePage } from './components/HomePage'
import "./components/Layout.css"
import OrderPage from './components/OrderPage'

function App() {
  const [isOrderPage, setIsOrderPage] = useState(false);
  return (
    <>
      {isOrderPage ? (
        <OrderPage setIsOrderPage={setIsOrderPage} />
      ) : (
        <HomePage setIsOrderPage={setIsOrderPage} />
      )}
    </>
  )
}

export default App
