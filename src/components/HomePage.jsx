import { Button } from 'reactstrap'
export function HomePage() {
    return(
        <div className="home-page">
            <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="home-logo" />
            <h1 className="home-title">KOD ACIKTIRIR PİZZA, DOYURUR</h1>
            <Button className="home-button">ACIKTIM</Button>
        </div>
    )
}