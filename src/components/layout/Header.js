import classes from './Header.module.css';
import mealsImage from '../../assets/img/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return(
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage}/>
            </div>
        </>
    );
}

export default Header;