import { Footer } from "../Footer/Footer"
import { Header } from "../Header"
import "./SuccessPage.css"
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
export function SuccessPage({data}) {
    return(
        <div className="success-page">
        <div className="success-content">
            <Header />
            <h5>lezzetin yolda</h5>
            <h1>SİPARİŞ ALINDI</h1>
            <hr className="succes-divider" />
            <h6>{data.urun}</h6>
            <ul className="order-details">
                <li>Boyut: <strong>{data.boyut}</strong></li>
                <li>Hamur: <strong>{data.hamur}</strong></li>
                <li>Ek Malzemeler: <strong>{data.malzemeler}</strong></li>
            </ul>
            <Card className="order-card">
                <CardTitle className="orderCard-title">Sipariş Toplamı</CardTitle>
                <CardBody className="orderCard-body">
                    <Row className="orderCard-selection">
                        <Col>Seçimler</Col>
                        <Col>{data.ekstra}₺</Col>
                    </Row>
                    <Row className="orderCard-total">
                        <Col>Toplam</Col>
                        <Col>{data.fiyat}₺</Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
        <Footer />
        </div>
    )
}