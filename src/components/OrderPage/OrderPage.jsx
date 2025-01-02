import { Footer } from "../Footer/Footer";
import {Header} from "../Header";
import {Main} from "./Main";
import "./OrderPage.css"
export default function OrderPage({ setIsOrderPage, handleSubmit}) {
    
    return(
        <div className="order-page">
            <Header setIsOrderPage={setIsOrderPage} />
            <Main handleSubmit ={handleSubmit} setIsOrderPage={setIsOrderPage}/>
            <Footer />
        </div>
    )
}