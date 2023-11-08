import { Fragment } from 'react';
import classes from './MyButton.module.css'
import { Link } from 'react-router-dom';

const MyButton = ({ children, path, svg, target = '_blank' }) => {

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     window.open(props.path, "_blank");
    // }

    return (
        <div className="button">
            <Link to={path} target={target}>

                <button
                    className={classes.myBtn}
                // onClick={event => handleClick(event)}
                >
                    <span className={classes.icon}>{svg}</span>
                    {children}
                </button>
            </Link>
        </div>

    );
}

export default MyButton;
