import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/nav";
import { categories as data } from "../../../backend/db/categories";
import "./home.css";

export function Home(){
    return(
        <>
           <Navbar />

            <div className="main-body">
                <div className="title-main">Top Quiz Categories</div>
                <div className="categories-container">
                    { data.map(category=>(
                        <div className="category-card">
                            <img className="category-image" src={ category.image} alt={category.name}/>
                            <Link  className="category-heading" to="/question">{category.name}</Link>
                        </div>))
                    }
                </div>
            </div>

            <Footer />

        </>
    )
}