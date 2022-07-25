import { Footer, Navbar} from "../../components";
import { useQuestion, useCategory, useTheme, useAuth} from "../../contexts";
import "./home.css";

export function Home(){
const { categories } = useCategory();
const { getSelectedCategoryQuestions } = useQuestion();
const { theme} = useTheme();
const { isLoggedin} = useAuth();

    return(
        <>
           <Navbar />

            <div className="main-home-body">
                <div className="title-main">Top Quiz Categories</div>
                <div className="categories-container">
                    { categories && categories.map(({_id, image, imageLight, name})=>{
                    return (
                        <div key={_id} className="category-card">
                            <img className="category-image" src={ theme==="light" ? imageLight : image} alt={name}/>
                            <button className="category-heading" onClick={()=>getSelectedCategoryQuestions(name,isLoggedin)}>{name}</button>
                        </div>)})
                    }
                </div>
            </div>

            <Footer />

        </>
    )
}