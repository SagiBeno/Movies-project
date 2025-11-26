import * as React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ContentPagination=({page,setPage, count})=> {

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} style={{marginTop: '10px'}}>
       <Pagination count={count > 500 ? 500 : count} page={page} onChange={handleChange} />
    </Stack>
  );
}
