import { Footer } from "../Footer/Footer";
import {Header} from "../Header";
import {Main} from "./Main";
import "./OrderPage.css"
export default function OrderPage({ handleSubmit}) {
    
    return(
        <div className="order-page">
            <Header />
            <Main handleSubmit ={handleSubmit} />
            <Footer />
        </div>
    )
}