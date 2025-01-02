import { Card } from "reactstrap";
import "./FoodCards.css"
export default function FoodCards() {
    const foods = [
        {   img:"/images/iteration-2-images/pictures/food-1.png",
            name:"Terminal Pizza",
            rating:"4.9",
            count:"200",
            price:"60₺"
        },
        {   img:"/images/iteration-2-images/pictures/food-2.png",
            name:"Position Absolute Acı Pizza",
            rating:"4.9",
            count:"928",
            price:"85₺"
        },
        {   img:"/images/iteration-2-images/pictures/food-3.png",
            name:"useEffect Tavuklu Burger",
            rating:"4.9",
            count:"462",
            price:"75₺"
        },
    ]
    return(
        <div className="food-cards">
            {foods.map((food, index) => (
                <Card className="food-card" key={index}>
                    <img className="food-card-img" src={food.img} />
                    <h5 className="food-name">{food.name}</h5>
                    <div className="card-text">
                        <p>{food.rating}</p>
                        <p>{food.count}</p>
                        <p className="bold-text">{food.price}</p>
                    </div>
                </Card>
            ))}
        </div>
    )
}