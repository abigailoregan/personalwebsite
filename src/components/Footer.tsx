import '../css/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
            <span onClick={() => window.open('https://www.instagram.com/gabi_oregan/', '_blank')} className="footer-btn">instagram</span>
            <span onClick={() => window.open('https://www.linkedin.com/in/abigail-oregan/', '_blank')} className="footer-btn">linkedin</span>
            </div>
            <p className="copyright">© 2026 Abigail O'Regan - All Rights Reserved</p>
        </footer>
    )
}

export default Footer




      