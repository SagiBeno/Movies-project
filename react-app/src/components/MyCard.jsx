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

export const MyCard = ({backdrop_path,title, overview, release_date, vote_average, poster_path}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        sx={{ height: 200 }}
        image={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {overview}
        </Typography>
      </CardContent>
    </Card>
  )
}

