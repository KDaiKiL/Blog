import { useState, useEffect } from "react";
import api from "../../services/api"
import Post from "../Post";
import "./home.css";

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get('/posts')
            .then(response => setPosts(response.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <main>
            <div className="containerM">
                {
                    posts.map(element  => <Post 
                            title={element.title} 
                            description={element.description} 
                            key={element.id} 
                            date={element.createdAt} 
                            id={element.id}
                        />)
                }
            </div>
        </main>
    )
}

export default Home