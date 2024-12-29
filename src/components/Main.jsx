import { OrderCompletion } from "./OrderCompletion";
import OrderForm from "./OrderForm";
export function Main({handleOrderComplete}) {
    return(
        <div className="main-content">
            <div className="pizza-info">
                <h4>Position Absolute Acı Pizza</h4>
                <div className="price-info">
                    <h3>85.50₺</h3>
                    <div className="info">
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <p className="description">
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>
            <OrderForm />
            <hr className="divider" />
            <OrderCompletion handleOrderComplete = {handleOrderComplete} />
        </div>
    )
}