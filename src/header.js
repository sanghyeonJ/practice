
import {Link} from 'react-router-dom';
function Header() {

    return (
        <header>
            <div className='inner'>
                <Link to={'/'} className='logo'>Logo</Link>
            </div>
        </header>
    )
}

export default Header;