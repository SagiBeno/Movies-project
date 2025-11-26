const base_url="https://api.themoviedb.org/3/discover/" // help: https://developer.themoviedb.org/reference/ 
const urlGenres=`https://api.themoviedb.org/3/genre/` /*${type}/list?api_key=${import.meta.env.VITE_API_KEY}*/
const urlSearch=`https://api.themoviedb.org/3/search/` // ${type}?api_key=${import.meta.env.VITE_API_KEY}&query={query}&page={page}

const getTmdbMetadata = async function () {
    const resp = await fetch('/.netlify/functions/tmdb-metadata');
    const data = await resp.json();
    console.log('getTmdbMetadata data', data);
    return data;
}

export const getData=async ({queryKey})=>{
    console.log('getData queryKey', queryKey);//ez egy tömb 
    const gotTmdbMetadata = await getTmdbMetadata()

    let url=base_url+queryKey[1]+"?api_key="+gotTmdbMetadata.apiKey+'&page='+queryKey[2]
    if(queryKey[3].length!=0)//itt szűrünk
        url+='&with_genres='+queryKey[3].join(',')
    console.log('getData url', url);  

    const resp = await fetch(`${url}&api_key=${gotTmdbMetadata.apiKey}`)
    return await resp.json()
}

export const getGenres=async ({queryKey})=>{
    console.log('getGenres queryKey', queryKey);//ez egy tömb 2 darab elemmel
    const gotTmdbMetadata = await getTmdbMetadata()
    console.log('gotTmdbMetadata', gotTmdbMetadata)
    
    const url=urlGenres+queryKey[1]+"/list"
    console.log('getGenres url', url);  

    const resp = await fetch(`${url}?api_key=${gotTmdbMetadata.apiKey}`)
    return await resp.json()
}

export const getSearchData=async ({queryKey})=>{
    console.log('getSearchData queryKey', queryKey);
    const gotTmdbMetadata = await getTmdbMetadata()

    let url=`${urlSearch}${queryKey[1]}?api_key=${gotTmdbMetadata.apiKey}&query=${queryKey[2]}&page=${queryKey[3]}`
    console.log('getSearchData url', url);

    const resp = await fetch(url)
    return await resp.json()
}

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500';
