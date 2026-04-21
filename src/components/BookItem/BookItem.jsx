import { FaStarHalfAlt } from "react-icons/fa"
import { FaCartShopping, FaStar } from "react-icons/fa6"
import { IoMdShuffle } from "react-icons/io"
import { MdFavoriteBorder, MdOutlineRemoveRedEye } from "react-icons/md"
import {Link} from 'react-router-dom'
import "./BookItem.css"

const BookItem = ({books,searchData}) => {
  return (
    <article>
        {searchData?.map(book=>(
        <div className="card" key={book?.id}>
            <div>
                <img src={book?.img} alt={book?.name}/>
            </div>
            <div className="card-text">
                <h1>{book?.name}</h1>
                <h3>{book?.price}</h3>
                <div className="stars-cont">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                </div>
                <p>Gone with the Wind (1936) by Margaret Mitchell is a sweeping historical epic set 
                    in Georgia during the Civil War and Reconstruction, focusing on Scarlett O'Hara, 
                    a spoiled yet resilient daughter of a plantation owner.</p>
                <div className="button-icon">
                    <button><FaCartShopping/>Add To Cart</button>
                    <span className="icons-cont">
                        <div className="icon-bg">
                            <MdFavoriteBorder className="iconic"/>
                        </div>
                        <div className="icon-bg">
                            <IoMdShuffle className="iconic"/>
                        </div>
                        <div className="icon-bg">
                            <MdOutlineRemoveRedEye className="iconic"/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        ))}
    </article>
  )
}

export default BookItem
