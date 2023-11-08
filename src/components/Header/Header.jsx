import MFCLogo from '../../assets/logo.png'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className='container'>
            <div className={classes.header__wrapper}>
                    <div className={classes.img__block}>
                        <img className={classes.img} src={MFCLogo} alt="" />
                    </div>
                    {
                        window.location.href.includes('home') ? <span className='mainText mainTextOp'>Добро пожаловать на главную страницу! Выберите программу</span> : ''
                    }
            </div>
        </div>
    );
}

export default Header;
