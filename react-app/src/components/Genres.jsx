import React, { useEffect, useState } from 'react'
import { getGenres } from '../utils'
import { Stack } from '@mui/material'
import { SingleChip } from './SingleChip'

export const Genres = ({type,selectedGenres,setSelectedGenres}) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchGenres() {
      const data = await getGenres({queryKey:["genres",type]})
      setData(data)
    }
    fetchGenres()
  }, [type])
  
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' style={{marginBottom: '10px'}}>  
        {data && data.genres.map(obj=>
            <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
        )}
    </Stack>
  )
}

