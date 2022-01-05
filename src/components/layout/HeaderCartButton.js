import classes from './HeaderCartButton.module.css';
import CartIcon from '../cart/CartIcon';

const HeaderCartButton = props => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your cart</span>
            <span className={classes['badge']}>3</span>    
        </button>
    )
}

export default HeaderCartButton;