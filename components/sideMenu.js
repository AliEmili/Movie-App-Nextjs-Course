import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";
import {useRouter} from "next/router";
// Containment
const sideMenu = (props)=> {
    const {categories} = props;
    const router = useRouter();
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies)=> {
            modal.closeModal();
            router.push('/');
        })
    }
    return(
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm
                    handleFormSubmit={handleCreateMovie} 
                    submitButton="Create"
                />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {categories.map((category)=>{
                    return(
                        <a
                            onClick={() => props.changeCategory(category.name)} 
                            key={category.id} 
                            href="#" 
                            className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>
                                {category.name}
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default sideMenu;