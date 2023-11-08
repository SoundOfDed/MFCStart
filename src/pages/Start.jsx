import { Fragment } from 'react';
import MyButton from '../components/UI/button/MyButton';
import Header from './../components/Header/Header'
import Footer from '../components/Footer/Footer';

const Start = () => {

    return (
        <Fragment>
            <div className="wrapper">
                <div className='container'>
                    <Header />
                    <div className="start__title">
                        <span className='mainText'>Выберите роль</span>
                    </div>
                    <div className="main">
                        <div className="start__roles">
                            <MyButton path={"https://regal-cupcake-9c3ff4.netlify.app/home-operator/home-operator"}>
                                Оператор
                            </MyButton>
                            <MyButton path={"https://regal-cupcake-9c3ff4.netlify.app/home-operator/home-obr"}>
                                Обработчик
                            </MyButton>
                            <MyButton path={"https://regal-cupcake-9c3ff4.netlify.app/home-operator/home-admin"}>
                                Администратор
                            </MyButton>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>

        </Fragment>

    );
}

export default Start;
