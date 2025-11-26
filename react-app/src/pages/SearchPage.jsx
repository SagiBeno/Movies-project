import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Box, Grid, TextField, ToggleButtonGroup, ToggleButton, Button } from '@mui/material'
import { MyCard } from '../components/MyCard'
import { MySpinner } from '../components/MySpinner'
import { FaSearch } from "react-icons/fa";

import { getSearchData } from '../utils'

import { useState } from 'react'

export const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('movie')
  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData(await getSearchData({ queryKey: ['search', selectedType, query, page] }));
    setLoading(false);
  }

  const handleTypeChange = (event, newType) => {
    if (newType != null) {
      setSelectedType(newType);
    }
  }

  return (
    <PageLayout title="Search page" page={page} setPage={setPage} type={selectedType}
      selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} data={data}
      style={{width: '100vw'}}
    >
      <Box mb={2} display="flex" justifyContent="center">
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleInputChange}/>
        <Button variant="outlined" onClick={handleSearch}><FaSearch /></Button>
      </Box>
      <Box mb={2} display="flex" justifyContent="center">
        <ToggleButtonGroup
          color="primary"
          value={selectedType}
          exclusive
          onChange={handleTypeChange}
          aria-label="Type Selection"
        >
          <ToggleButton value="movie">Movie</ToggleButton>
          <ToggleButton value="tv">TV</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {isLoading && <MySpinner />}
      <Grid>
        {data && data.results?.map(obj =>
          <MyCard key={obj.id} {...obj} />
        )}
      </Grid>
    </PageLayout>
  )
}


