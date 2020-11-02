import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating, { RatingProps } from '@material-ui/lab/Rating';

const SalonStars = withStyles((theme) => ({
  root: {
    fontSize: '1rem',
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(1),
  },
  sizeSmall: {
    fontSize: '0.8rem',
  },
  iconEmpty: {
    stroke: theme.palette.secondary.main,
    color: 'transparent',
  },
}))(Rating);

interface SalonRatingProps extends RatingProps {
  label: string | number;
  color?:
    | 'inherit'
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | undefined;
}

export default function SalonRating({
  label,
  color,
  ...other
}: SalonRatingProps) {
  return (
    <Box display="flex" alignItems="center" marginY={0.5}>
      <SalonStars readOnly {...other} />
      <Typography variant="subtitle1" component="div" color={color}>
        ({label})
      </Typography>
    </Box>
  );
}
