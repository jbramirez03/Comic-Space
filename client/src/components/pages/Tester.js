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
    const [id, setId] = useState(0);
    const params = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
    const characterUrl = `https://gateway.marvel.com/v1/public/characters?`;
    const comicUrl = `https://gateway.marvel.com/v1/public/comics?`;
    const [searchedUrl, setSearchedUrl] = useState('');




    const getCharacterId = () => {
        return axios.get(`${characterUrl}${params}&name=${character}`);
    }

    const getComics = input => {
        setSearchedUrl(`${comicUrl}${params}&characters=${input}`);
        return axios.get(`${comicUrl}${params}&characters=${input}`);
    }

    const next = async () => {
        console.log(searchedUrl);
        setOffset(offset += 20);
        const response = await axios.get(`${searchedUrl}&offset=${offset}`);
        setResponse(response);
        set(response);
    }

    const back = async () => {
        console.log(searchedUrl);
        const newOffset = offset - 20;
        setOffset(newOffset);
        const response = await axios.get(`${searchedUrl}&offset=${newOffset}`);
        setResponse(response);
        set(response);
    };

    const search = async () => {
        const characterInfo = await getCharacterId(character);
        const characterId = characterInfo.data.data.results[0].id;
        const rawComics = await getComics(characterId);
        return rawComics;
    }

    const set = (response) => {
        setTotal(response.data.data.total);
        setPages(Math.ceil(response.data.data.total / 20));
    }

    const setResponse = (response) => {
        setComics([...response.data.data.results]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await search();
        setResponse(response);
        set(response);
    }

    return (

        <div>
            <button onClick={() => console.log(total)}>SEE total</button>
            <button onClick={() => console.log(pages)}>SEE Pages</button>
            <button onClick={() => console.log(offset)}>Offset</button>
            <button onClick={() => next()}>Next</button>
            <button onClick={() => back()}>back</button>
            <form action="submit" onSubmit={onSubmit}>
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

        </div>
    )
}

export default Tester
