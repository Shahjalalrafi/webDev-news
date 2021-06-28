import Nav from './Nav';
import Header from './Header';
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <div className={styles.main}>
                    <Header />
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;