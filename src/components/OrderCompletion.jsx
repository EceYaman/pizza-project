import { useState } from "react"
import { Button, ButtonGroup, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
export  function OrderCompletion() {
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
                <Button disabled>{count}</Button>
                <Button onClick={handleIncrease}>+</Button>
            </ButtonGroup>

            <Card className="card">
                <CardTitle className="card-title">Sipariş Toplamı</CardTitle>
                <CardBody className="card-body">
                    <Row className="order-summary-row">
                        <Col className="price-description">Seçimler</Col>
                        <Col className="order-price">0 TL</Col>
                    </Row>

                    <Row className="order-summary-row">
                        <Col className="price-description">Toplam</Col>
                        <Col className="order-price">0 TL</Col>
                    </Row>
                </CardBody>
            </Card>
            <Button className="order-button" >
                Sipariş Ver
            </Button>
        </div>
    );
}