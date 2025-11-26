import React from 'react'
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

export const MyCard = ({backdrop_path,title, overview, release_date, vote_average}) => {
  return (
    <Card sx={{ maxWidth: 345, margin:2 }}>
      <CardHeader>
        <Typography variant='h6'>{title}</Typography>
      </CardHeader>
      <CardMedia
        component="img"
        height="194"
        image={img_300+backdrop_path}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {vote_average}
        </Typography>
      </CardContent>
    </Card>
  )
}

