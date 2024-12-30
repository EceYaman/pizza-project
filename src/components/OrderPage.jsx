import {Header} from "./Header";
import {Main} from "./Main";
import "./OrderPage.css"
export default function OrderPage({ setIsOrderPage, handleSubmit}) {
    
    return(
        <div>
        <Header setIsOrderPage={setIsOrderPage} />
        <Main handleSubmit ={handleSubmit}/>
        </div>
    )
}