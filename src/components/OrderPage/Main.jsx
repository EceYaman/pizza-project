import OrderForm from "./OrderForm";
export function Main({handleSubmit, setIsOrderPage}) {
    return(
        <div className="main">
            <div className="main-content">
                <img className="form-banner" src="./images/iteration-2-images/pictures/form-banner.png"/>
                <nav className="order-page-menu">
                    <a href="#" onClick={() => setIsOrderPage(false)}>Anasayfa</a>
                    <span>-</span>
                    <a className="active" href="#" onClick={() => setIsOrderPage(true)}>Sipariş Oluştur</a>
                </nav>
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
            </div>
            <OrderForm handleSubmit = {handleSubmit}/>
        </div>
    )
}