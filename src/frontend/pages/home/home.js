import { useNavigate } from "react-router-dom";
import { Footer, Navbar} from "../../components/index";
import { useQuestion, useCategory} from "../../contexts/index";
import "./home.css";

export function Home(){
const { categories } = useCategory();
const {getSelectedCategoryQuestions} = useQuestion();

    return(
        <>
           <Navbar />

            <div className="main-body">
                <div className="title-main">Top Quiz Categories</div>
                <div className="categories-container">
                    { categories && categories.map(category=>{const  {_id, image, name} = category; 
                    return (
                        <div key={_id} className="category-card">
                            <img className="category-image" src={ image} alt={name}/>
                            <button className="category-heading" onClick={()=>getSelectedCategoryQuestions(name)}>{name}</button>
                        </div>)})
                    }
                </div>
            </div>

            <Footer />

        </>
    )
}