
import { generateTimeStamp, md5hash } from "../../src/helpers/md5generator";

export default async (req, res) => {
    let timeStamp = generateTimeStamp();
    let mdFiveHash = md5hash(timeStamp, process.env.API_PRIVATE_KEY, process.env.API_PUBLIC_KEY);
    
    const result = await fetch(`${process.env.API_BASE_KEY}:443/v1/public/comics?dateDescriptor=thisMonth&orderBy=onsaleDate&limit=100&ts=${timeStamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${mdFiveHash}`)
        .catch(console.error);
    const json = await result.json();

    res.status(200).json({
        comics: json.data.results,
        count: json.data.count
    });
};