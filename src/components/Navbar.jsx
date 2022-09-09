import React from "react";

 
            


const Navbar = () => {
    return (
        <><img src={"bullbear.png"} alt=""></img><div className="navbar">
            <div className="logo">
                The Livest Stock
            </div>
            <nav className="item">
                <li className="li">
                    <li>
                        <a href="Homepage">Home</a>
                    </li>
                    <li>
                        <a href="Signup">Signup</a>
                    </li>
                    <li>
                        <a href="Login">Login</a>
                    </li>
                    <li>
                        <a href="About">About</a>
                    </li>

                </li>
            </nav>

        </div></>
    )
}

export default Navbar;