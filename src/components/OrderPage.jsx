import {Header} from "./Header";
import {Main} from "./Main";

export default function OrderPage({ setIsOrderPage }) {
    return(
        <div>
        <Header setIsOrderPage={setIsOrderPage} />
        <Main />
        </div>
    )
}