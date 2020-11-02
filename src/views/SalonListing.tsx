import React, { ReactElement } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SalonList from '../components/SalonList';
import BackIcon from '../components/icons/BackIcon';
import FilterIcon from '../components/icons/FilterIcon';
import NavBar from '../components/NavBar';
import PriceFilter from '../components/PriceFilter'

function SalonListing(): ReactElement {
  return (
    <>
      <NavBar
        position="sticky"
        title="Hår"
        leftButton={
          <IconButton>
            <BackIcon color="secondary" fontSize="large" />
          </IconButton>
        }
        rightButton={
          <IconButton>
            <FilterIcon color="secondary" fontSize="large" />
          </IconButton>
        }
      />
      <PriceFilter />
      <SalonList/>
    </>
  );
}

export default SalonListing;
