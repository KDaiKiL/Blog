import { useState, useEffect } from 'react';
import api from '../../services/api';
import './post-v.css';
import heart from '../../assets/heart.svg'
import { useParams } from 'react-router-dom'

function Postv(props) {
    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(async () => {
        api.get(`/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(err => console.error(err))
    }, [])

    const date = new Date(post.date).toLocaleDateString();

    return(
        <main>
            <div className="heart">
                    <img src={heart} alt="heart" />
            </div>
            
            <h3>{post.title}</h3>
            <span>{date}</span>

            <div className="desc">
                <p>{post.description}</p>
            </div>
        </main>
    )
}

export default Postv