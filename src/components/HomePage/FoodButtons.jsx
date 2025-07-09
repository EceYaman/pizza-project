import { Button } from "reactstrap";
import "./FoodButtons.css"
export default function FoodButtons() {
    return(
        <div className="food-buttons">
             <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/1.png" /> Ramen
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/2.png" /> Pizza
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/3.png" /> Burger
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/4.png" /> French fries
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/5.png" /> Fast food
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/6.png" /> Soft drinks
            </Button>
        </div>
    )
}