import Modal from "./modal";

const sideMenu = (props)=> {
    const {categories} = props;
    return(
        <div>
            <Modal />
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