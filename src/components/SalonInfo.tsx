import React, { ReactElement } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PinIcon from '../components/icons/PinIcon';
import ClockIcon from '../components/icons/ClockIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import GlobeIcon from '../components/icons/GlobeIcon';
import Divider from '@material-ui/core/Divider';
import type { SalonProps } from '../contexts/SalonProvider';
import { withStyles } from '@material-ui/core/styles';

const StyledList = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}))(List);

const SalonListIcon = withStyles((theme) => ({
  root: {
    minWidth: 'auto',
    paddingRight: theme.spacing(2),
  },
}))(ListItemIcon);

export default function SalonInfo({
  address,
  postal,
  openUntil,
  phone,
  website,
  description,
}: SalonProps): ReactElement {
  const info = {
    address: {
      icon: <PinIcon/>,
      text: `${address}, ${postal}`
    },
    hour: {
      icon: <ClockIcon/>,
      text: `Öppet till ${openUntil} idag`,
    },
    phone: {
      icon: <PhoneIcon/>,
      text: phone,
    },
    website: {
      icon: <GlobeIcon/>,
      text: website,
    },
    description: {
      icon: null,
      text: description
    }
  }
  
    return (
    <StyledList>
      {Object.entries(info).map(([key, { icon, text }], index, entries) => (
        <>
        <ListItem key={key}>
          {icon && <SalonListIcon>{icon}</SalonListIcon>}
          <ListItemText
            primary={text}
            primaryTypographyProps={{
              variant: 'body2',
            }}
          />
        </ListItem>
        {index < entries.length - 1 && <Divider/>}
        </>
      ))}
    </StyledList>
  );
}
