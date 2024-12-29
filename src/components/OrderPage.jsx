import {Header} from "./Header";
import {Main} from "./Main";

export default function OrderPage({ setIsOrderPage, setIsOrderSuccess }) {
    const handleOrderComplete = () => {
        setIsOrderSuccess(true);  
    }
    return(
        <div>
        <Header setIsOrderPage={setIsOrderPage} />
        <Main handleOrderComplete ={handleOrderComplete}/>
        </div>
    )
}