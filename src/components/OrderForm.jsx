import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, FormText, Row } from 'reactstrap';
import { OrderCompletion } from './OrderCompletion';


const ingredients = [
    'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan',
    'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Salam',
    'Ananas', 'Kabak'
];

export default function OrderForm({handleSubmit}) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [doughThickness, setDoughThickness] = useState('');
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [specialNote, setSpecialNote] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const valid =
            name.length >= 3 && 
            selectedIngredients.length >= 4 && selectedIngredients.length <= 10 && 
            doughThickness && 
            size;
        setIsValid(valid); 
    }, [name, selectedIngredients, doughThickness, size]);

    const handleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
        setSelectedIngredients((prevSelected) => {
            if (prevSelected.length < 10) {
            return [...prevSelected, value];
            } else {
            return prevSelected;
            }
        });
        } else {
        setSelectedIngredients((prevSelected) =>
            prevSelected.filter((item) => item !== value)
        );
        }
    };

    const handleDoughChange = (event) => setDoughThickness(event.target.value);
    const handleSizeChange = (event) => setSize(event.target.value);
    const handleSpecialNoteChange = (event) => setSpecialNote(event.target.value);


    const handleSubmitForm = () => {
        const orderData = {
          isim: name,
          boyut: size,
          malzemeler: selectedIngredients,
          ozel: specialNote,
          hamur: doughThickness
        };
        handleSubmit(orderData); 
      };
    
    
    return (
        <div className="order-form">
        <Form >
            <Row >
            <Col>
                <FormGroup>
                <Label className='form-title'>Boyut Seç <span className="required">*</span> </Label>
                <div className="radio-group">
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="size"
                        value="small"
                        onChange={handleSizeChange}
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
                        onChange={handleSizeChange}
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
                        onChange={handleSizeChange}
                        />
                        Büyük
                    </Label>
                    </FormGroup>
                </div>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label className='form-title'>Hamur Seç <span className="required">*</span> </Label>
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
            <Label className='form-title' htmlFor="extraIngredients">Ek Malzemeler</Label>
            <FormText className="form-text">
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
            <Label className='form-title' htmlFor="name">Ad-Soyad</Label>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="Adınız - Soyadınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </FormGroup>

            <FormGroup>
            <Label className='form-title' htmlFor="orderNote">Sipariş Notu</Label>
            <Input
                id="orderNote"
                name="orderNote"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={specialNote}
                onChange={handleSpecialNoteChange}
            />
            </FormGroup>
        </Form>
        <hr className="divider" />
        <OrderCompletion handleSubmitForm={handleSubmitForm} isValid={isValid} />
        </div>
    );
}