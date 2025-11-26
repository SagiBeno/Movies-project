import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Grid, TextField } from '@mui/material'
import { MyCard } from '../components/MyCard'
import { MySpinner } from '../components/MySpinner'

import { useState } from 'react'

export const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  return (
    <PageLayout title="Search page" page={page} setPage={se} type='movie'
      selectedGenres={[]} setSelectedGenres={() => { }} data={data}
    >
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      {isLoading && <MySpinner />}
      <Grid>
        {data && data.results?.map(obj =>
          <MyCard key={obj.id} {...obj} />
        )}
      </Grid>
    </PageLayout>
  )
}


