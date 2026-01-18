const Header = () => {
    return (
        <header className="glass-header">
            <div className="container">
                <div className="logo">
                    <img src="neuraltax_logo.png" alt="NeuralTax AI" style={{ height: '35px' }} />
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="dashboard.html" className="btn btn-login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const headerRoot = ReactDOM.createRoot(document.getElementById('header-root'));
headerRoot.render(<Header />);
