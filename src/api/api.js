import axios from "axios"

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do"

export const fetchTopAlbums = async()=>{
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        //console.log(res)
        return res.data
    }catch(err){
        console.error(err);
    }
}

export const fetchNewAlbums = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const fetchAllSongs = async()=>{
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return res.data
    }catch(err){
        console.error(err);
    }
}