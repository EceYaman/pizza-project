export  function Header({ setIsOrderPage }) {
    return(
        
        <div className="header">
            <img className="logo" src="/images/iteration-1-images/logo.svg" alt="Logo" />
            <nav>
                <a href="#" onClick={() => setIsOrderPage(false)}>Anasayfa</a>
                <span>-</span>
                <a className="active" href="#" onClick={() => setIsOrderPage(true)}>Sipariş Oluştur</a>
            </nav>
        </div>
        
    )
}