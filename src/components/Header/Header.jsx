import { Link } from 'react-router-dom';
import MFCLogo from '../../assets/logo.png'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className='container'>
            <div className={classes.header__wrapper}>
                    <Link to={'/'} className={classes.img__block}>
                        <img className={classes.img} src={MFCLogo} alt="" />
                    </Link>
                    {
                        window.location.href.includes('home') ? <span className='mainText mainTextOp'>Добро пожаловать на главную страницу! Выберите программу</span> : ''
                    }
            </div>
        </div>
    );
}

export default Header;
