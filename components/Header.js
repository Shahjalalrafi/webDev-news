import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>WebDev <span>News</span></h1>
            <p className={headerStyles.description}>
                Keep up to date with the latest web dev news
            </p>
        </div>
    );
}

export default Header;