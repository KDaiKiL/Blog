import { useState, useEffect, Fragment } from 'react'
import api from '../../services/api'
import heart from '../../assets/heart.svg'
import "./post.css"
import { Routes, Route, Link } from 'react-router-dom'


function Post(props) {
    const [post, setPost] = useState(null)

    const date = new Date(props.date).toLocaleDateString();

    function readMore() {
        api.get(`/posts/${props.id}`)
            .then(response => setPost(response.data))
            .catch(err => console.error(err))
    }
    function readLess() {
        setPost(null)
    }

    function viewMore() {

    }

    return(
        <>
            {
                post ?
            (<article>
                <div className="date">
                    <span>{date}</span>
                    <img src={heart} alt="heart" />
                </div>
            
                <h3>{props.title}</h3>
            
                <div className="desc">
                    <p>{props.description}</p>
                    <p>{props.description}</p>
                </div>

                <div className="view">
                    <span onClick={readLess}>Ler menos</span>
                    <Link to={'/posts/' + props.id}>
                        <span>Ver mais</span>
                    </Link>
                </div>
            </article>)
                :
            (<article>
                <div className="date">
                    <span>{date}</span>
                    <img src={heart} alt="heart" />
                </div>
            
                <h3>{props.title}</h3>

                <div className="desc">
                    <p>{props.description}</p>
                </div>
            
                <span onClick={readMore}>Ler mais</span>
            </article>)
            }
        </>
    )
}

export default Post