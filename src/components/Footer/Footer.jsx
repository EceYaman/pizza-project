import './Footer.css'
export function Footer() {
    return(
        <div className="footer">
            <div className='footer-content'>
                <div className="contact-info">
                    <img className="footer-logo" src="/images/iteration-2-images/footer/logo-footer.svg" alt="Logo" />
                    <p>
                        <img className="location" src="/images/iteration-2-images/footer/icons/icon-1.png" alt="location"/> 341 Londonderry Road, Istanbul Türkiye
                    </p>
                    <p>
                        <img className="mail" src="/images/iteration-2-images/footer/icons/icon-2.png" alt="mail"/> aciktim@teknolojikyemekler.com
                    </p>
                    <p>
                        <img className="phone" src="/images/iteration-2-images/footer/icons/icon-3.png" alt="phone"/> +90 216 123 45 67
                    </p>
                </div>
                
                <div className="footer-menu">
                    <h6 className='menu-title'>Sıcacık Menüler</h6>
                    <nav className="footer-nav">
                        <a href="/order" >Terminal Pizza</a>
                        <a href="/order" >5 Kişilik Hackathlon Pizza</a>
                        <a href="/order" >useEffect Pizza</a>
                        <a href="/order" >Beyaz Console Frosty</a>
                        <a href="/order" >Testler Geçti Mutlu Burger</a>
                        <a href="/order" >Position Absolute Acı Burger</a>
                    </nav>
                </div>
                <div className='footer-social'>
                    <h6 className='social-title'>Instagram</h6>
                    <div className='insta-photo'>
                        <img className="photo" src="/images/iteration-2-images/footer/insta/li-0.png" alt="insta-photo"/>
                        <img className="photo" src="/images/iteration-2-images/footer/insta/li-1.png" alt="insta-photo"/>
                        <img className="photo" src="/images/iteration-2-images/footer/insta/li-2.png" alt="insta-photo"/>
                        <img className="photo" src="/images/iteration-2-images/footer/insta/li-3.png" alt="insta-photo"/>
                        <img className="photo" src="/images/iteration-2-images/footer/insta/li-4.png" alt="insta-photo"/>
                        <img className="photo" src="/images/iteration-2-images/footer/insta/li-5.png" alt="insta-photo"/>
                    </div>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className='footer-bottom'>
                <p>&copy; 2023Teknolojik Yemekler.</p>
                <i className="fab fa-twitter"></i>
            </div>
        </div>
    )
}