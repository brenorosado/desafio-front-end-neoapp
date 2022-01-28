import { apiPublicKey, apiPrivateKey, apiBaseUrl } from "../../lib/marvelcomics";
import CryptoJS from 'crypto-js';

const generateTimeStamp = () => Math.floor(new Date() / 1000);

export default async (req, res) => {
    let timeStamp = generateTimeStamp();
    const md5hash = CryptoJS.MD5(`${timeStamp}${apiPrivateKey}${apiPublicKey}`);

    const result = await fetch(`${apiBaseUrl}:443/v1/public/comics?dateDescriptor=thisMonth&orderBy=onsaleDate&limit=100&ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5hash}`)
        .catch(console.error);
    const json = await result.json();


    res.status(200).json({
        comics: json.data.results
    });
};