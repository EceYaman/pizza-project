import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, FormText, Row, FormFeedback } from 'reactstrap';
import { OrderCompletion } from '../OrderPage/OrderCompletion';


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
    const [cost, setCost] = useState(85.5)
    const [ingredientsCost, setIngredientsCost] = useState(0)

    useEffect(() => {
        const valid =
            name.length >= 3 && 
            selectedIngredients.length >= 4 && selectedIngredients.length <= 10 && 
            doughThickness && 
            size;
            setIsValid(valid); 
            setIngredientsCost(selectedIngredients.length * 5)
            setCost(85.5 + selectedIngredients.length * 5);
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

    const errors = {
        size: "Boyut Seçilmeli!",
        dough: "Hamur Seçilmeli!",
        ingredients:"En az 4 Adet Seçilmeli!",
        name: "En az 3 karakter girmelisiniz!"
    }

    const handleSubmitForm = () => {
        const orderData = {
            urun: "Position Absolute Acı Pizza",
            isim: name,
            boyut: size,
            malzemeler: selectedIngredients,
            ozel: specialNote,
            hamur: doughThickness,
            ekstra: ingredientsCost,
            fiyat: cost
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
                        value="Küçük"
                        onChange={handleSizeChange}
                        data-cy="small-input"
                        invalid={size === ''}
                        />
                        Küçük
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="size"
                        value="Orta"
                        onChange={handleSizeChange}
                        data-cy="medium-input"
                        invalid={size === ''}
                        />
                        Orta
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="size"
                        value="Büyük"
                        onChange={handleSizeChange}
                        data-cy="large-input"
                        invalid={size === ''}
                        />
                        Büyük
                    </Label>
                    {size === '' && <FormFeedback>{errors.size}</FormFeedback>}
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
                    data-cy="dough-input"
                    invalid={doughThickness === ''}
                >
                    <option value="" disabled hidden>Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Orta">Orta</option>
                    <option value="Kalın">Kalın</option>
                </Input>
                <FormFeedback>{errors.dough}</FormFeedback>
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
                         data-cy="ingredient-input"
                         invalid={selectedIngredients.length < 4}
                    />
                    {ingredient}
                    </Label>
                    <FormFeedback>{errors.ingredients}</FormFeedback>
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
                data-cy="name-input"
                invalid={name.length < 3}
            />
            <FormFeedback>{errors.name}</FormFeedback>
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
                data-cy="note-input"
            />
            </FormGroup>
        </Form>
        <hr className="divider" />
        <OrderCompletion handleSubmitForm={handleSubmitForm} isValid={isValid} cost={cost} ingredientsCost={ingredientsCost} />
        </div>
    );
}