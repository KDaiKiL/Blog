import { useState } from "react";
import './search.css';
import search from '../../assets/searchImg.svg';

function Search() {
    const [test, setTest] = useState('')

    function tst(event) {
        setTest(event.target.value);
    }

    return(
        <form action="">
            <input type="text" onChange={tst} placeholder="Pesquisar no blog" />
            <div id='searchImg'>
                <img src={search} alt="" />
            </div>
            <h1>{test}</h1>
        </form>
    )
}

export default Search