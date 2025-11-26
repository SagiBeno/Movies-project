import React, { useEffect } from 'react'
import { img_300 } from '../utils'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import MyModal from './MyModal';
import Modal from "@mui/material/Modal";
import { Rating } from '@mui/material';

export const MyCard = ({title, overview, release_date, vote_average, poster_path, name, first_air_date}) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <Card onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer', width: 345, height: 420, display: 'flex', flexDirection: 'column', boxShadow: '1px 2px 8px gray', '&:hover': {boxShadow: '0px 4px 16px whitesmoke'}, borderRadius: '6px'}}>
        <CardMedia
          component='img'
          sx={{ height: 200 }}
          image={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || name}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {release_date ||first_air_date}
          </Typography>
        </CardContent>
        <CardActions sx={{marginTop: 'auto'}}>
          <Button onClick={() => setOpenModal(true)}>Show more</Button>
          {
            vote_average != 0 ? <Rating style={{marginLeft: 'auto'}} name="half-rating-read" defaultValue={vote_average / 2} precision={0.05} readOnly /> : null
          }
        </CardActions>
      </Card>
      {
        openModal && <MyModal open={openModal} setOpenModal={setOpenModal} poster_path={poster_path} overview={overview} title={title} name={name}/>
      }
    </>
  )
}

