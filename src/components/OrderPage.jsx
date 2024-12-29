import {Header} from "./Header";
import {Main} from "./Main";

export default function OrderPage({ setIsOrderPage, handleSubmit}) {
    
    return(
        <div>
        <Header setIsOrderPage={setIsOrderPage} />
        <Main handleSubmit ={handleSubmit}/>
        </div>
    )
}