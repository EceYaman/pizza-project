import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'

export  function OrderCompletion({isValid, handleSubmitForm, cost, ingredientsCost}) {
    const history = useHistory(); 
    const [count, setCount] = useState(1)
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };

    const handleSubmitAndNavigate = () => {
        handleSubmitForm();  
        history.push('/success');  
    };

    return (
        <div className="order-completion">
            <ButtonGroup className="count-group">
                <Button className="count-button" onClick={handleDecrease}>-</Button>
                <Button className="count">{count}</Button>
                <Button className="count-button" onClick={handleIncrease}>+</Button>
            </ButtonGroup>

            <Card className="card">
                <CardTitle className="card-title">Sipariş Toplamı</CardTitle>
                <CardBody className="card-body">
                    <Row className="order-selection">
                        <Col>Seçimler</Col>
                        <Col>{ingredientsCost}₺</Col>
                    </Row>

                    <Row className="order-total">
                        <Col>Toplam</Col>
                        <Col>{cost}₺</Col>
                    </Row>
                </CardBody>
            </Card>
            <Button className="order-button" onClick={handleSubmitAndNavigate} disabled={!isValid} data-cy="submit-button">
                SİPARİŞ VER
            </Button>
        </div>
    );
}