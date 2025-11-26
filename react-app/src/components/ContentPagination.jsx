import * as React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ContentPagination=({page,setPage})=> {

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  return (
    <Stack spacing={2} style={{marginTop: '10px'}}>
       <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
