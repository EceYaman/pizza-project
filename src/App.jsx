import { useState } from 'react';
import './App.css'
import { HomePage } from './components/HomePage/HomePage'
import OrderPage from './components/OrderPage/OrderPage'
import { SuccessPage } from './components/SuccessPage/SuccessPage';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [data, setData] = useState({})

  const handleSubmit = async (orderData) => {
    try {
        const response = await axios.post('https://reqres.in/api/pizza', orderData);
        console.log(response.data); 
        setData(response.data);
    } catch (error) {
        console.error(error); 
    }
  };

  return (
    <>
      <Switch>
        <Route path="/" exact><HomePage /></Route> 
        <Route path="/order"><OrderPage  handleSubmit={handleSubmit} />  </Route> 
        <Route path="/success"><SuccessPage data={data}/></Route> 
      </Switch>
    </>
  )
}

export default App
