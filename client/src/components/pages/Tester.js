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
    const [currentCharacter, setCurrentCharacter] = useState('');

    let [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(0);
    const next = async () => {
        setOffset(offset += 20);
        const queryParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&name=${character}`;
        const url = `https://gateway.marvel.com/v1/public/characters?${queryParams}`;
        const results = await axios.get(url);
        const id = results.data.data.results[0].id;
        const newParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&characters=${id}`;
        const characterUrl = `https://gateway.marvel.com/v1/public/comics?${newParams}&offset=${offset}`;
        const comicResults = await axios.get(characterUrl);
        const searchedComics = comicResults.data.data.results;
        setComics([...searchedComics]);
        setTotal(comicResults.data.data.total);
        setPages(Math.ceil(comicResults.data.data.total / 20));
    }

    const search = async (e) => {
        e.preventDefault();
        const queryParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&name=${character}`;
        const url = `https://gateway.marvel.com/v1/public/characters?${queryParams}`;
        const results = await axios.get(url);
        const id = results.data.data.results[0].id;
        const newParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&characters=${id}`;
        const characterUrl = `https://gateway.marvel.com/v1/public/comics?${newParams}&offset=${offset}`;
        const comicResults = await axios.get(characterUrl);
        const searchedComics = comicResults.data.data.results;
        setComics([...searchedComics]);
        setTotal(comicResults.data.data.total);
        setPages(Math.ceil(comicResults.data.data.total / 20));
    }
    return (

        <div>
            <button onClick={() => console.log(total)}>SEE total</button>
            <button onClick={() => console.log(pages)}>SEE Pages</button>
            <button onClick={() => next()}>Next</button>
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
            {/* <button onClick={() => { search() }}>SEARCH</button>
            <button onClick={() => { next() }}>NEXT</button> */}
        </div>
    )
}

export default Tester
