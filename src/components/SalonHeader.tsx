import React, { ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SalonRating from '../components/SalonRating';
import type { SalonProps } from '../contexts/SalonProvider';
import { withStyles } from '@material-ui/core/styles';

const Root = withStyles({
  root: {
    position: 'relative',
  },
})(Card);

const SalonHeaderContent = withStyles({
  root: {
    paddingTop: 50,
    paddingBottom: '15px !important',
    background: 'linear-gradient(0deg, black, transparent)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
})(CardContent);

export default function SalonHeader({
  name,
  image,
  noOfReviews,
  rating,
}: SalonProps): ReactElement {
  const baseUrl = import.meta.env.MODE === 'production' ? '/sample-salon' : ''
  return (
    <Root elevation={0} square>
      <CardMedia component="img" src={baseUrl + image} />
      <SalonHeaderContent>
        <Typography variant="h1" color="primary">
          {name}
        </Typography>
        <SalonRating
          label={noOfReviews}
          readOnly
          value={rating}
          color="primary"
        />
      </SalonHeaderContent>
    </Root>
  );
}
