import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const ARTWORK_CATEGORIES = [
    { name: 'Abstract', path: 'abstract' },
    { name: 'Figures', path: 'figures' },
    { name: 'Landscapes', path: 'landscapes' },
    { name: 'Love', path: 'love' },
    { name: 'Murals', path: 'murals' },
    { name: 'Portraits', path: 'portraits' },
    { name: 'Still Lifes', path: 'stills' },
]

const EXHIBITIONS = [
    { name: 'SRISA SUMMER B Art Exhibition', path: 'srisasummerb' },
    { name: 'SRISA SUMMER A Art Exhibition', path: 'srisasummera' },
    { name: 'PAPR Salon Show 2025', path: 'paprsalonshow2025' },
    { name: 'AFO CONTENT 2024', path: 'afocontent2024' },
    { name: 'Spukhaus 2023', path: 'spukhaus2023' },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setMobileSubmenu(null)
    }

    const toggleSubmenu = (name: string) => {
        setMobileSubmenu(mobileSubmenu === name ? null : name)
    }

    return (
        <div className='navbar'>
            <Link to='/' onClick={() => setIsMenuOpen(false)}>
                <span id='nav_name'>Abigail O'Regan</span>
            </Link>

            {/* Hamburger for Mobile Only */}
            <div id='mobile_menu_icon' className={isMenuOpen ? 'open' : ''} onClick={toggleMenu}>
                <span></span><span></span><span></span>
            </div>
            
            <div id='nav_buttton_container' className={isMenuOpen ? 'active' : ''}>
                
                {/* Artwork Section */}
                <div className={`nav_dropdown ${mobileSubmenu === 'artwork' ? 'mobile_open' : ''}`}>
                    <div className='nav_header_wrapper'>
                        <Link to='/artwork' className='nav_button' onClick={toggleMenu}>Artwork</Link>
                        <span className='mobile_arrow' onClick={() => toggleSubmenu('artwork')}></span>
                    </div>
                    <div className='nav_drop_content'>
                        {ARTWORK_CATEGORIES.map((cat) => (
                            <Link key={cat.path} to={`/artwork/${cat.path}`} onClick={toggleMenu}>{cat.name}</Link>
                        ))}
                    </div>
                </div>

                {/* Exhibitions Section */}
                <div className={`nav_dropdown ${mobileSubmenu === 'exhibitions' ? 'mobile_open' : ''}`}>
                    <div className='nav_header_wrapper'>
                        <Link to='/exhibitions' className='nav_button' onClick={toggleMenu}>Exhibitions</Link>
                        <span className='mobile_arrow' onClick={() => toggleSubmenu('exhibitions')}></span>
                    </div>
                    <div className='nav_drop_content exhibitions_width'>
                        {EXHIBITIONS.map((ex) => (
                            <Link key={ex.path} to={`/exhibitions/${ex.path}`} onClick={toggleMenu}>{ex.name}</Link>
                        ))}
                    </div>
                </div>

                <Link to='/about' onClick={toggleMenu}><span className='nav_button'>About</span></Link>
                <Link to='/contact' onClick={toggleMenu}><span className='nav_button'>Contact</span></Link>
                <Link to='/cv' onClick={toggleMenu}><span className='nav_button'>CV</span></Link>
            </div>
        </div>
    )
}

export default Navbar