import React, { useEffect, useState } from 'react'
import { getGenres } from '../utils'
import { Stack } from '@mui/material'
import { SingleChip } from './SingleChip'

export const Genres = ({type,selectedGenres,setSelectedGenres}) => {
    const [data, setData] = useState(null)

    async function getGenresF() {
      const data = await getGenres({queryKey:["genres",type]})
      console.log(data)

    }

    getGenresF()

    data && console.log(data.genres);
    
    //console.log(selectedGenres);
    
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center'>  
        {data && data.genres.map(obj=>
            <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
        )}
    </Stack>
  )
}

