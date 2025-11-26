import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Grid } from '@mui/material'
import { MyCard } from '../components/MyCard'
import { MySpinner } from '../components/MySpinner'
import { useEffect, useState } from 'react'
import { getData } from '../utils'

export const TVSeries = props => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  console.log(page);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setData(await getData({ queryKey: ['tvdata', 'tv', page, selectedGenres] }))
      setLoading(false)
    }

    fetchData()
  }, [page, selectedGenres]);

  return (
    <PageLayout title='TV Series' type='tv' page={page} setPage={setPage}
      selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}
      data={data}
    >
      {isLoading && <MySpinner />}
      <Grid container spacing={2} justifyContent='center'>
        {data && data.results?.map(obj =>
          <MyCard key={obj.id} {...obj} />
        )}
      </Grid>
    </PageLayout>
  )
}


