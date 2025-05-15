import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchPage() {
    const [seravhResults, setSeravhResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = query.get('q');
    
    useEffect(()=> {
        if(searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    }, [searchTerm]);
    
    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(`/search/multi?inclue_adult=false&query=${searchTerm}`);
            console.log(request);
            
        } catch (error) {
            console.log("error : ", error);
            
        }
    }

  return (
    <div>
      
    </div>
  )
}
