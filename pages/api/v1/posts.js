import axios from 'axios';

export default async(req, res) => {

    if (req.method === 'POST') {
        const postData = req.body;

        return res.json({
            status: 'saving post to db!',
            ...postData
        })
    } else {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        return res.json(posts.slice(0, 20));
    }

}