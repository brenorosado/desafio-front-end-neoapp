import { apiPublicKey, apiPrivateKey, apiBaseUrl } from "../../lib/marvelcomics";
import CryptoJS from 'crypto-js';

const generateTimeStamp = () => Math.floor(new Date() / 1000);

export default async (req, res) => {
    let timeStamp = generateTimeStamp();
    const md5hash = CryptoJS.MD5(`${timeStamp}${apiPrivateKey}${apiPublicKey}`);
    const result = await fetch(`${apiBaseUrl}:443/v1/public/comics?ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5hash}`);
    const json = await result.json();

    res.status(200).json({
        list: json
    });
};