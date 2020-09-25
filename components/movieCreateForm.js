import {useState} from 'react';

const MovieCreateForm = () => {
    const [form, setForm] = useState({
        name: 'some movie',
        description: 'some description'
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;


        setForm({
            ...form,
            [name]: target.value,
        })
    }
    
    const handleGenreChange = (event) => {
        const {options} = event.target;
        const optionsLength = options.length;
        let value = [];

        for (let i=0 ; i<optionsLength ; i++){
            if(options[i].selected){
                value.push(options[i].value);
            }
        }

        setForm({
            ...form,
            genre: value.toString()
        })
    }

    return (
        <form>
            {JSON.stringify(form)}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input 
                    value={form.description}
                    onChange={handleChange}
                    name="description"
                    type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input 
                    value={form.rating}
                    onChange={handleChange}
                    type="number" 
                    name="rating" 
                    max="5" 
                    min="0" 
                    className="form-control" 
                    id="rating" 
                    placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input 
                    value={form.image}
                    onChange={handleChange}
                    type="text" 
                    className="form-control" 
                    id="image"
                    name="image" 
                    placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input 
                    value={form.cover}
                    onChange={handleChange}
                    type="text" 
                    className="form-control" 
                    id="cover" 
                    name="cover" 
                    placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea 
                    value={form.longDesc}
                    onChange={handleChange}
                    className="form-control" 
                    id="longDesc" 
                    name="longDesc" 
                    rows="3">
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select 
                    multiple 
                    onChange={handleGenreChange}
                    className="form-control" 
                    id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
        </form>
    )
}

export default MovieCreateForm;