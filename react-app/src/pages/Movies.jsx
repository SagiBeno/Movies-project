import React, { useEffect, useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { Grid } from '@mui/material'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'
import { MySpinner } from '../components/MySpinner'


export const Movies = props => {
  const [page, setPage] = useState(1);
  const [selectedGenres,setSelectedGenres]=useState([])
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  console.log(page);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setData(await getData({queryKey:['movies','movie',page,selectedGenres]}))
      const test = await getData({queryKey:['movies','movie',page,selectedGenres]})
      console.log(test)
      setLoading(false)
    }

    fetchData()
  }, [page, selectedGenres]);

  return (
   <PageLayout title="Movies" page={page} setPage={setPage} type='movie'
    selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}
   > 
    {isLoading && <MySpinner/>}
    <Grid container spacing={2} justifyContent='center'>
      {data && data.results?.map(obj=>
       <MyCard key={obj.id} {...obj}/>
      )}
    </Grid>
   </PageLayout>
  )
}

