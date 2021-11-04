import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useState } from 'react';

import React from 'react'

const Tester = () => {
    const PRIV_KEY = "b62c40680e3ea3090a2462bc3021628651c2d45f";
    const PUBLIC_KEY = "ab9297e9d4bda4ab94cb17eb9e3fe843";
    const [character, setCharacter] = useState('');
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    const [comics, setComics] = useState([]);

    let [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(0);
    // const next = () => {
    //     setOffset(offset += 20);
    //     console.log(offset);
    // }

    const search = async (e,) => {
        e.preventDefault();
        const characterName = character;
        const queryParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&name=${characterName}`;
        const url = `https://gateway.marvel.com/v1/public/characters?${queryParams}`;
        const results = await axios.get(url);
        const id = results.data.data.results[0].id;
        // console.log(results);
        // console.log(id);
        const newParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&characters=${id}`;
        const characterUrl = `https://gateway.marvel.com/v1/public/comics?${newParams}&offset=${offset}`;
        const comicResults = await axios.get(characterUrl);
        console.log(comicResults);
        const searchedComics = comicResults.data.data.results;
        console.log(searchedComics);
        setComics([...searchedComics]);
        setTotal(comicResults.data.data.total);
        // console.log(total);
        const showPages = Math.ceil(comicResults.data.data.total / 20);
        setPages(showPages);
        // console.log(pages);
    }
    return (

        <div>
            <form action="submit" onSubmit={search}>
                <input type="text" value={character} onChange={e => setCharacter(e.target.value)} />
                <button>Search</button>
            </form>
            {comics.length >= 1 ? comics.map(
                (comic) => {
                    return (
                        <div key={comic.id}>
                            <h3>{comic.title}</h3>
                            <p>{comic.description}</p>
                            <img width="75px" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="comic" />
                        </div>
                    );
                }) : 'not cool'}
            <button onClick={() => console.log(total)}>SEE total</button>
            <button onClick={() => console.log(pages)}>SEE total</button>
            {/* <button onClick={() => { search() }}>SEARCH</button>
            <button onClick={() => { next() }}>NEXT</button> */}
        </div>
    )
}

export default Tester
