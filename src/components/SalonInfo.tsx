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
import DownIcon from './icons/DownIcon';
import Typography from '@material-ui/core/Typography';

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

const StyledDownIcon = withStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
}))(DownIcon);

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
      icon: <PinIcon />,
      text: `${address}, ${postal}`,
      expandable: false,
    },
    hour: {
      icon: <ClockIcon />,
      text: `Öppet till ${openUntil} idag`,
      expandable: true,
    },
    phone: {
      icon: <PhoneIcon />,
      text: phone,
      expandable: false,
    },
    website: {
      icon: <GlobeIcon />,
      text: website,
      expandable: false,
    },
    description: {
      icon: null,
      text: description,
      expandable: false,
    },
  };

  return (
    <StyledList>
      {Object.entries(info).map(
        ([key, { icon, text, expandable }], index, entries) => (
          <>
            <ListItem key={key}>
              {icon && <SalonListIcon>{icon}</SalonListIcon>}
              <ListItemText disableTypography>
                <Typography variant="body2" display="inline">
                  {text}
                </Typography>
                {expandable && (
                  <StyledDownIcon color="secondary" fontSize="small" />
                )}
              </ListItemText>
            </ListItem>
            {index < entries.length - 1 && <Divider />}
          </>
        ),
      )}
    </StyledList>
  );
}
