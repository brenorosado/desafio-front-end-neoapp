import { apiPublicKey, apiPrivateKey, apiBaseUrl } from "../../lib/marvelcomics";
import { generateTimeStamp, md5hash } from "../../src/helpers/md5generator";

export default async (req, res) => {
    let timeStamp = generateTimeStamp();
    let mdFiveHash = md5hash(timeStamp, apiPrivateKey, apiPublicKey);
    
    const result = await fetch(`${apiBaseUrl}:443/v1/public/comics?dateDescriptor=thisMonth&orderBy=onsaleDate&limit=100&ts=${timeStamp}&apikey=${apiPublicKey}&hash=${mdFiveHash}`)
        .catch(console.error);
    const json = await result.json();

    res.status(200).json({
        comics: json.data.results
    });
};