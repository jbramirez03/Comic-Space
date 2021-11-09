import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_COMIC, REMOVE_COMIC, WISH_COMIC, POST_COMIC } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// export default function PaginationRounded() {
//     return (
//         <Stack spacing={2}>
//             <Pagination count={10} shape="rounded" />
//             <Pagination count={10} variant="outlined" shape="rounded" />
//         </Stack>
//     );
// }

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
    // const [saveComic] = useMutation(POST_COMIC);
    // const { loading, data } = useQuery(QUERY_ME);
    // const userData = data?.me || [];
    // const [removeComic] = useMutation(REMOVE_COMIC);


    // const handleDeleteComic = async (comicId) => {

    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }

    //     try {
    //         // pass in the id for the desired book to be removed
    //         await removeComic({
    //             variables: { comicId }
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };


    // const handleComicSave = async (comic) => {

    //     // const comicToSave = comics.find((comic) => comic.comicId === comicId);
    //     // console.log(comicToSave)
    //     const comicToPost = { comicId: comic.comicId, title: comic.title, description: comic.description, image: comic.image };
    //     console.log(comicToPost)
    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }
    //     // Add the input for the mutation save_book in a variable object set to bookToSave
    //     try {
    //         await saveComic({
    //             variables: { input: comicToPost },
    //         });

    //     } catch (err) {
    //         console.error(err);
    //     }

    // }



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

    const findPage = (page) => {
        const set = test.find((button) => button.pageNumber === page)
        next(set.page);
        console.log(set.page);
    }

    const search = async () => {
        const characterInfo = await getCharacterId(character);
        const characterId = characterInfo.data.data.results[0].id;
        const rawComics = await getComics(characterId);
        console.log(rawComics)
        return rawComics;
    }


    const setResponse = (response) => {
        const rawComics = [...response.data.data.results];
        const comicData = rawComics.map((comic) => ({
            comicId: comic.id,
            title: comic.title || 'No title available',
            description: comic.description || 'No description available',
            image: `${comic.thumbnail.path}.${comic.thumbnail.extension}` || '',
            // series: comic.series.name || 'This comic does not belong to a series'
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

    // if (loading) {
    //     return <h2>LOADING...</h2>;
    // }

    return (
        <div>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text" value={character} onChange={e => setCharacter(e.target.value)} />
                <button>Search</button>
            </form>
            {/* <button onClick={() => console.log(userData)}>CHeck data</button>
            <button onClick={() => console.log(userData.comics)}>See saved comics</button> */}
            {/* {userData.comics.length ? <div>Viewing your collection</div> : 'you have no saved comics'}
            {userData.comics.length ? userData.comics.map(comic => {
                return (
                    <div key={comic.comicId}>
                        <h3>{comic.title}</h3>
                        <p>{comic.description}</p>
                        <img width="75px" src={comic.image} alt="comic" />
                        <button onClick={() => handleComicSave(comic)}>Delete comic</button>
                    </div>
                )
            }) : 'No comics to view from user'} */}
            {comics.length >= 1 ? comics.map(
                (comic) => {
                    return (
                        <div key={comic.comicId}>
                            <h3>{comic.title}</h3>
                            <p>{comic.description}</p>
                            <img width="75px" src={comic.image} alt="comic" />
                            <p>Series: {comic.series}</p>
                            <button onClick={() => console.log(comic.comicId)}>Save</button>
                        </div>
                    );
                }) : <div>There is no comics to diplay at this time</div>}
            {test.length ? test.map(button => <button key={button.i} onClick={() => next(button.page)}>{button.pageNumber}</button>) : 'No page buttons yet'}
            {test.length && <Stack spacing={2}>
                <Pagination count={test.length} variant="outlined" defaultPage={1} shape="rounded" onChange={(event, page) => { console.log("Go to Page: ", page); findPage(page) }} />
            </Stack>}
        </div>
    )
}

export default Tester
