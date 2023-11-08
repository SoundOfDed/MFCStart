import React from 'react';
import classes from './Footer.module.css'
import MyButton from '../UI/button/MyButton';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="container">
                <div className={classes.footer__wrapper}>
                    <div className="footer__contacts">
                        <ul>
                            <li>Отдел поддержки ИС: 417-133</li>
                            <li>Отдел ИБ: 417-133</li>
                            <li>Отдел сис. админ.: 417-122</li>
                            <li>Отдел сис. админ. АРМ: 417-123</li>
                        </ul>
                    </div>
                    <MyButton path={"/instructions"}>Инструкции</MyButton>
                </div>
            </div>
        </div>
    );
}

export default Footer;
