import { Button } from 'reactstrap'
import "./HomePage.css"
import { Header } from '../Header'
import { Footer } from '../Footer/Footer'
import FoodButtons from './FoodButtons'
import FoodCards from './Cards/FoodCards'
import OrderCards from './Cards/OrderCards'
import { useHistory } from 'react-router-dom'
export function HomePage() {
    const history = useHistory();
    return(
        <div className="home-page">
            <div className='hero-content'>
                <Header />
                <h5 className='title-h5'>fırsatı kaçırma</h5>
                <h1 className="home-title">KOD ACIKTIRIR PİZZA, DOYURUR</h1>
                <Button className="home-button" onClick={() => history.push("/order")}>
                    ACIKTIM
                </Button>
            </div>
            <FoodButtons />
            <div className='main-div'>
            <OrderCards/>
            <h6 className='title-h6'>en çok paketlenen menüler</h6>
            <h4 className='title-h4'>Acıktıran Kodlara Doyuran Lezzetler</h4>
            <FoodButtons />
            <FoodCards/>
            </div>
            <Footer/>
            
        </div>
    )
}