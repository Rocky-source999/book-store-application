import Header from "../Header/header.jsx";
import "./home.css"
import { useNavigate } from "react-router";

const Home=()=>{
    const navigate=useNavigate()
    const onClickNavigate=()=>{
        navigate("/books")
    }

    return(
        <div className="home-bg">
            <div className="banner">
                <div className="banner-text">
                    <h1>Expand<br/>Your Mind.<br/>Read a Book..!</h1>
                    <p>Reading books is a highly valuable habit that contributes significantly 
                        to personal and intellectual growth. It enhances knowledge, improves vocabulary, 
                        and strengthens critical thinking skills. Through reading, individuals are exposed 
                        to different perspectives, ideas, and cultures, which broadens their understanding 
                        of the world. It also helps in improving concentration and reduces stress by 
                        providing a productive form of relaxation. Developing a regular reading habit not only supports 
                        academic and professional success but also builds creativity and communication skills, making 
                        it an essential practice for lifelong learning.</p>
                    <button onClick={onClickNavigate}>Explore Books</button>
                </div>
                <div className="side-img">
                    <img src="https://png.pngtree.com/png-clipart/20250105/original/pngtree-boy-and-girl-reading-books-cartoon-art-png-image_18742768.png" alt="none"/>
                </div>
            </div>
        </div>
    )
}

export default Home