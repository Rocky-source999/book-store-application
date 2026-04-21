import {Link} from "react-router"
import "./header.css"
import { FaCartShopping } from "react-icons/fa6"
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"
import { VscAccount } from "react-icons/vsc"
import { useState } from "react"

const Header=()=>{
    const [liked,setLiked]=useState(false)
    return(
        <header className="header">
            <nav>
                <div className="logo-container">
                    <img src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!sw800" alt="app logo"/>
                    <p>Bookle</p>
                </div>
                <div>
                    <ul className="nav-links">
                       <li><Link to="/" className="nav-link">Home</Link></li>
                       <li><Link to="/books" className="nav-link">Shop</Link></li>
                       <li><Link to="/cart" className="nav-link">Cart</Link></li>
                    </ul>
                </div>
                <div className="icons-container">
                    <div className="icons-bg">
                        <FaCartShopping className="icon"/>
                    </div>
                    <div className="icons-bg" onClick={() => setLiked(!liked)}>
                        {liked ? (<MdFavorite className="icon red" />) : (<MdOutlineFavoriteBorder className="icon" />)}
                    </div>
                    <div className="icons-bg">
                        <VscAccount className="icon"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header