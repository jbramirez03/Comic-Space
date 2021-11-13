import { useState } from 'react'
import Axios from 'axios';
import { Image } from 'cloudinary-react';

const Images = () => {
    const [image, setImage] = useState();
    const [url, setUrl] = useState('');
    // const formData = { file: image, upload_preset: "bx4wrv2o" };
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'bx4wrv2o');

    const uploadImage = async () => {
        const response = await Axios.post('https://api.cloudinary.com/v1_1/dfqlw4w2v/image/upload', formData)
        setUrl(response.data.url);
        console.log(response);
    };
    return (
        <div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={uploadImage}>Upload image</button>
            {url !== '' ? <Image cloudName={'dfqlw4w2v'} publicId={url} /> : ''}
        </div>
    )
}

export default Images
