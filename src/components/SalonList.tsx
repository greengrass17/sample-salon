import React, { ReactElement, useContext, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import NextIcon from './icons/NextIcon';
import { Link } from 'react-router-dom';
import { SalonContext } from '../contexts/SalonProvider';
import { List, ListItem } from '@material-ui/core';
import SalonRating from './SalonRating';
import { FilterContext } from '../contexts/FilterProvider'

function SalonList(): ReactElement {
  const salons = useContext(SalonContext);
  const { filter: { min, max } } = useContext(FilterContext)
  return (
    <List>
      {salons
        .filter(({ price }) => min <= price && (max ? price <= max : true))
        .map(
          ({
            id,
            time,
            name,
            price,
            rating,
            noOfReviews,
            distance,
            address,
          }) => (
            <Fragment key={id}>
              <ListItem component={Link} to={`/${id}`} alignItems="flex-start">
                <Box paddingY={1}>
                  <Typography>{time}</Typography>
                </Box>
                <Box flexGrow="1" paddingX={2} paddingY={1}>
                  <Typography variant="h2">{name}</Typography>
                  <SalonRating label={noOfReviews} size="small" readOnly value={rating} color="textSecondary" />
                  <Typography variant="body2" color="textSecondary">
                    {address}
                  </Typography>
                </Box>
                <Box paddingY={1} paddingX={3}>
                  <Typography>{price} kr</Typography>
                  <Typography variant="subtitle1" component="span" color="textSecondary">
                    {distance}
                  </Typography>
                </Box>
                <Box alignSelf="center">
                  <NextIcon color="secondary" fontSize="small" />
                </Box>
              </ListItem>
              <Divider />
            </Fragment>
          ),
        )}
    </List>
  );
}

export default SalonList;
