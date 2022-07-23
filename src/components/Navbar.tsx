const Navbar = () => {
    return (
        <header className="flex items-center justify-between min-h-[3.8rem] border-b border-gray-700">
            <nav className="flex items-center justify-start flex-grow space-x-8">
                <span className="mr-8 font-extrabold text-blue-100">
                    Movies Dashboard
                </span>
                <span className="link">Movies</span>
                <span className="link">Customers</span>
                <span className="link">Rentals</span>
            </nav>
            <div className="flex items-center justify-center space-x-5">
                <span className="btn-login">Login</span>
                <span className="btn-blue">Register</span>
            </div>
        </header>
    );
};

export default Navbar;
