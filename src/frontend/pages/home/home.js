import { Footer, Navbar} from "../../components/index";
import { useQuestion, useCategory, useTheme} from "../../contexts/index";
import "./home.css";

export function Home(){
const { categories } = useCategory();
const { getSelectedCategoryQuestions } = useQuestion();
const { theme} = useTheme();

    return(
        <>
           <Navbar />

            <div className="main-home-body">
                <div className="title-main">Top Quiz Categories</div>
                <div className="categories-container">
                    { categories && categories.map(category=>{const  {_id, image, imageLight, name} = category; 
                    return (
                        <div key={_id} className="category-card">
                            <img className="category-image" src={ theme==="light" ? imageLight : image} alt={name}/>
                            <button className="category-heading" onClick={()=>getSelectedCategoryQuestions(name)}>{name}</button>
                        </div>)})
                    }
                </div>
            </div>

            <Footer />

        </>
    )
}