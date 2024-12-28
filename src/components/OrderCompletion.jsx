import { useState } from "react"
import { Button, ButtonGroup, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
export default function OrderCompletion() {
    const [count, setCount] = useState(1)
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
    return (
        <>
            <ButtonGroup>
                <Button onClick={handleDecrease}>-</Button>
                <Button disabled>{count}</Button>
                <Button onClick={handleIncrease}>+</Button>
            </ButtonGroup>

            <Card>
                <CardTitle className="text-center">Sipariş Toplamı</CardTitle>
                <CardBody>
                    <Row className="mb-3">
                        <Col xs="8" className="text-left">Seçimler</Col>
                        <Col xs="4" className="text-right">0 TL</Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs="8" className="text-left">Toplam</Col>
                        <Col xs="4" className="text-right">0 TL</Col>
                    </Row>

                    <Button color="primary" block>
                        Sipariş Ver
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}