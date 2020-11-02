import React, { ReactElement, useState, useContext } from 'react';
import DownIcon from '../components/icons/DownIcon';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { FilterContext } from '../contexts/FilterProvider'

const FilterMenu = withStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}))(Accordion);

const StyledAccordionDetails = withStyles({
  root: {
    display: 'block',
  },
})(AccordionDetails);

interface Props {}

export default function PriceFilter({}: Props): ReactElement {
  const { filters, filter, setFilter } = useContext(FilterContext)
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const filterHandlerGenerator = (index: number) => () => {
    setFilter(filters[index]);
    setShowFilter(false);
  };
  return (
    <FilterMenu expanded={showFilter} elevation={0}>
      <AccordionSummary
        expandIcon={<DownIcon color="secondary" fontSize="small" />}
        onClick={toggleFilter}
      >
        <Typography color="textPrimary">
          Pris {filter.label || `${filter.min} - ${filter.max} kr`}
        </Typography>
      </AccordionSummary>
      <StyledAccordionDetails>
        <List>
          {filters.map((filter, index) => (
            <ListItem
              key={index}
              button
              onClick={filterHandlerGenerator(index)}
            >
              <ListItemText>
                {filter.label || `${filter.min} - ${filter.max} kr`}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </StyledAccordionDetails>
    </FilterMenu>
  );
}
