import axios from 'axios';

import React from 'react'

const Tester = () => {
    const PRIV_KEY = "b62c40680e3ea3090a2462bc3021628651c2d45f";
    const PUBLIC_KEY = "ab9297e9d4bda4ab94cb17eb9e3fe843";


    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    let [offset, setOffset] = useState(0);

    const queryParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&offset=${offset}`;
    const url = `https://gateway.marvel.com/v1/public/characters?${queryParams}`;

    const charactersId = 1009148;
    const newParams = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&characters=${charactersId}`;

    const comicUrl = `https://gateway.marvel.com/v1/public/comics?${newParams}&offset=${offset}`;

    const next = () => {
        setOffset(offset += 20);
        console.log(offset);
    }

    const search = async () => {
        const results = await axios.get(comicUrl);
        console.log(results.data.data);

    }
    return (
        <div>

        </div>
    )
}

export default Tester