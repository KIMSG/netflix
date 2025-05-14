import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "2496d0fe405b836e7d951d384d6f48f0",
        language: "ko-KR",
    },
});

export default instance;