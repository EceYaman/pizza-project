import OrderForm from "./OrderForm";
export function Main() {
    return(
        <>
            <div>
                <h2>Position Absolute Acı Pizza</h2>
                <h2>85.50</h2>
                <p>4.9</p>
                <p>(200)</p>
                <p>
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
            <OrderForm />
        </>
    )
}