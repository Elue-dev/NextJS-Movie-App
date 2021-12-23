import Link from 'next/link'
import navStyles from '../styles/NavStyles/Nav.module.css'

function Nav() {
    return (
        <div className={navStyles.nav}>
            <div className={navStyles.wrapper}>
                <Link href='/'><div className={navStyles.logo}>Next<span>JS</span></div></Link>
                <nav className={navStyles.nav_items}>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
