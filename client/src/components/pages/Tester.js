import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_COMIC } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries'

import React from 'react'

const Tester = () => {
    const PRIV_KEY = "b62c40680e3ea3090a2462bc3021628651c2d45f";
    const PUBLIC_KEY = "ab9297e9d4bda4ab94cb17eb9e3fe843";
    const [character, setCharacter] = useState('');
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    const [comics, setComics] = useState([]);
    const params = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
    const characterUrl = `https://gateway.marvel.com/v1/public/characters?`;
    const comicUrl = `https://gateway.marvel.com/v1/public/comics?`;
    const [searchedUrl, setSearchedUrl] = useState('');
    let buttons = [];
    const [test, setTest] = useState([]);
    const [saveComic] = useMutation(SAVE_COMIC);
    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || [];


    const handleComicSave = async (comicId) => {

        const comicToSave = comics.find((comic) => comic.comicId === comicId);

        console.log(comicToSave)

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        // Add the input for the mutation save_book in a variable object set to bookToSave
        try {
            await saveComic({
                variables: { input: comicToSave },
            });

        } catch (err) {
            console.error(err);
        }

    }



    const getCharacterId = () => {
        return axios.get(`${characterUrl}${params}&name=${character}`);
    }

    const getComics = input => {
        setSearchedUrl(`${comicUrl}${params}&characters=${input}`);
        return axios.get(`${comicUrl}${params}&characters=${input}`);
    }

    const next = async (input) => {
        const response = await axios.get(`${searchedUrl}&offset=${input}`);
        setResponse(response);
    }


    const search = async () => {
        const characterInfo = await getCharacterId(character);
        const characterId = characterInfo.data.data.results[0].id;
        const rawComics = await getComics(characterId);
        return rawComics;
    }


    const setResponse = (response) => {
        const rawComics = [...response.data.data.results];
        const comicData = rawComics.map((comic) => ({
            comicId: comic.id,
            title: comic.title || 'No title available',
            description: comic.description || 'No description available',
            image: `${comic.thumbnail.path}.${comic.thumbnail.extension}` || '',
        }));
        setComics(comicData);
    }

    const createButtons = (p) => {
        let currentPage = 0;
        for (let i = 0; i < p; i++) {
            buttons = [...buttons, { i: i, page: currentPage, pageNumber: i + 1 }]
            currentPage += 20
        }
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await search();
        const p = Math.ceil(response.data.data.total / 20);
        createButtons(p);
        setTest([...buttons])
        setResponse(response);
        buttons = [];
    }

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <div>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text" value={character} onChange={e => setCharacter(e.target.value)} />
                <button>Search</button>
            </form>
            <button onClick={() => console.log(userData)}>CHeck data</button>
            <button onClick={() => console.log(userData.comics)}>See saved comics</button>
            {userData.comics.length ? <div>Viewing your collection</div> : 'you have no saved comics'}
            {userData.comics.length ? userData.comics.map(comic => {
                return (
                    <div key={comic.comicId}>
                        <h3>{comic.title}</h3>
                        <p>{comic.description}</p>
                        <img width="75px" src={comic.image} alt="comic" />
                    </div>
                )
            }) : 'No comics to view from user'}
            {comics.length >= 1 ? comics.map(
                (comic) => {
                    return (
                        <div key={comic.comicId}>
                            <h3>{comic.title}</h3>
                            <p>{comic.description}</p>
                            <img width="75px" src={comic.image} alt="comic" />
                            {Auth.loggedIn ? <button onClick={() => handleComicSave(comic.comicId)}>Save</button> : 'You need to login'}
                        </div>
                    );
                }) : <div>There is no comics to diplay at this time</div>}
            {test.length ? test.map(button => <button key={button.i} onClick={() => next(button.page)}>{button.pageNumber}</button>) : 'No page buttons yet'}
        </div>
    )
}

export default Tester
