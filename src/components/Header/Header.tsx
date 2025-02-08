
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Quotes Central</h1>
            <nav>
                <Link to="/">All Quotes</Link>
                <Link to="/submit">Submit New Quote</Link>
            </nav>
        </header>
    );
};

export default Header;