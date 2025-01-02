import { Button, Card, CardTitle } from "reactstrap";
import "./OrderCards.css"
export default function OrderCards(){
    return(
        <div className="order-cards">
            <Card className="card-1">
                <h3 className="card-1-title">Özel Lezzetus</h3>
                <h6 className="card-1-title-2">Position:Absolute Acı Burger</h6>
                <Button className="card-btn">SİPARİŞ VER</Button>
            </Card>
            <div className="cards-right">
                <Card className="card-2">
                    <h4 className="card-2-title">Hackathlon Burger Menü</h4>
                    <Button className="card-btn">SİPARİŞ VER</Button>
                </Card>
                <Card className="card-3">
                    <h4 className="card-3-title"><span className="title-highlight">Çoooook</span> Hızlı npm gibi kurye</h4>
                    <Button className="card-btn">SİPARİŞ VER</Button>
                </Card>
            </div>
        </div>
    )
}