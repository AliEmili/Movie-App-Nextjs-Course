class movieList extends React.Component{
    
    // state = {
    //     count: 0
    // }

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        // const count = this.state.count;
        const {count} = this.state;
        this.setState({count: count+1});
    }
    

    decrement = ()=> {
        const {count} = this.state;
        this.setState({count: count-1});
    }
    render(){
        return(
            <>
                <div>
                    <button onClick={this.increment} className="btn btn-primary">Increment Number</button>
                    <button onClick={this.decrement} className="btn btn-primary">Decrement Number</button>

                    <h1>{this.state.count}</h1>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">Item One</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">Item Two</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">Item Three</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">Item Four</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">Item Five</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">Item Six</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default movieList;