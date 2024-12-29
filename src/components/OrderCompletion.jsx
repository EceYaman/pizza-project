import { useState } from "react"
import { Button, ButtonGroup, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'

export  function OrderCompletion({isValid, handleSubmitForm}) {
    const [count, setCount] = useState(1)
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
    return (
        <div className="order-completion">
            <ButtonGroup className="count-button">
                <Button onClick={handleDecrease}>-</Button>
                <Button disabled >{count}</Button>
                <Button onClick={handleIncrease}>+</Button>
            </ButtonGroup>

            <Card className="card">
                <CardTitle className="card-title">Sipariş Toplamı</CardTitle>
                <CardBody className="card-body">
                    <Row className="order-selection">
                        <Col>Seçimler</Col>
                        <Col>0 ₺</Col>
                    </Row>

                    <Row className="order-total">
                        <Col>Toplam</Col>
                        <Col>0 ₺</Col>
                    </Row>
                </CardBody>
            </Card>
            <Button className="order-button" onClick={handleSubmitForm} disabled={!isValid}>
                SİPARİŞ VER
            </Button>
        </div>
    );
}