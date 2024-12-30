import { Button } from 'reactstrap'
import "./HomePage.css"
export function HomePage({ setIsOrderPage }) {
    return(
        <div className="home-page">
            <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="home-logo" />
            <h1 className="home-title">KOD ACIKTIRIR PİZZA, DOYURUR</h1>
            <Button className="home-button" onClick={() => setIsOrderPage(true)}>
                ACIKTIM
            </Button>
        </div>
    )
}