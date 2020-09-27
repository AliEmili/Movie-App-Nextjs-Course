import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";
// Containment
const sideMenu = (props)=> {
    const {categories} = props;
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies)=> {
            modal.closeModal()
        })
    }
    return(
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {categories.map((category)=>{
                    return(
                        <a key={category.id} href="#" className="list-group-item">{category.name}</a>
                    );
                })}
            </div>
        </div>
    )
}

export default sideMenu;