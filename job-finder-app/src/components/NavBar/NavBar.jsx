function NavBar() {
    return (
        <div className="nav-bar flex justify-between items-center p-[48px]">
            {/* Logo */}
            <div className="logo">
                <h1 className="logo text-[25px] text-blueColor">
                    <a href="">
                        <strong>Job</strong>Search
                    </a>
                </h1>
            </div>
            {/* Menulist */}
            <nav>
                <ul className="flex items-center text-[#6f6f6f] gap-8">
                    <li>Jobs</li>
                    <li>Jobs</li>
                    <li>Jobs</li>
                    <li>Jobs</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
