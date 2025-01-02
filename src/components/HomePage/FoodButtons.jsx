import { Button } from "reactstrap";
import "./FoodButtons.css"
export default function FoodButtons() {
    return(
        <div className="food-buttons">
             <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/1.svg" /> Ramen
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/2.svg" /> Pizza
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/3.svg" /> Burger
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/4.svg" /> French fries
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/5.svg" /> Fast food
            </Button>
            <Button className="food-btn">
                <img className="button-img" src="/images/iteration-2-images/icons/6.svg" /> Soft drinks
            </Button>
        </div>
    )
}