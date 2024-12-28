import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, FormText, Row } from 'reactstrap';

const ingredients = [
    'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan',
    'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Salam',
    'Ananas', 'Kabak'
];

export default function OrderForm() {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [doughThickness, setDoughThickness] = useState('');

    const handleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
        setSelectedIngredients((prevSelected) => {
            if (prevSelected.length < 10) {
            return [...prevSelected, value];
            } else {
            alert('En fazla 10 malzeme seçebilirsiniz.');
            return prevSelected;
            }
        });
        } else {
        setSelectedIngredients((prevSelected) =>
            prevSelected.filter((item) => item !== value)
        );
        }
    };

    const handleDoughChange = (event) => {
        setDoughThickness(event.target.value);
    };

    return (
        <div className="order-form">
        <Form>
            <Row form className="form-row">
            <Col md={6}>
                <FormGroup>
                <Label>Boyut Seç</Label>
                <div className="radio-group">
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="size"
                        value="small"
                        />
                        Küçük
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="size"
                        value="medium"
                        />
                        Orta
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="size"
                        value="large"
                        />
                        Büyük
                    </Label>
                    </FormGroup>
                </div>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                <Label>Hamur Seç</Label>
                <Input
                    type="select"
                    value={doughThickness}
                    onChange={handleDoughChange}
                >
                    <option value="" disabled hidden>Hamur Kalınlığı</option>
                    <option value="thin">İnce</option>
                    <option value="medium">Orta</option>
                    <option value="thick">Kalın</option>
                </Input>
                </FormGroup>
            </Col>
            </Row>

            <FormGroup>
            <Label htmlFor="extraIngredients">Ek Malzemeler</Label>
            <FormText color="muted" className="form-text">
                En fazla 10 malzeme seçebilirsiniz. 5₺
            </FormText>
            <div className="ingredients-grid">
                {ingredients.map((ingredient, index) => (
                <FormGroup check key={index}>
                    <Label check>
                    <Input
                        type="checkbox"
                        value={ingredient}
                        onChange={handleChange}
                        checked={selectedIngredients.includes(ingredient)}
                    />
                    {ingredient}
                    </Label>
                </FormGroup>
                ))}
            </div>
            </FormGroup>

            <FormGroup>
            <Label htmlFor="orderNote">Sipariş Notu</Label>
            <Input
                id="orderNote"
                name="orderNote"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
            </FormGroup>
            
        </Form>
        </div>
    );
}