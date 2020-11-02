import React, { useState, useContext, ReactElement } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import BackIcon from '../components/icons/BackIcon';
import HeartIcon from '../components/icons/HeartIcon';
import { Link, useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SalonHeader from '../components/SalonHeader';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../components/TabPanel';
import { SalonContext } from '../contexts/SalonProvider';

import SalonInfo from '../components/SalonInfo';

import NavBar from '../components/NavBar';

const StyledTabs = withStyles({
  root: {
    borderBottom: '0.5px solid #eeeeee',
  },
})(Tabs);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    background: theme.palette.common.white,
    fontWeight: 'normal',
  },
}))(Tab);

function SalonDetail(): ReactElement | null {
  const { id }: { id: string } = useParams();
  const salons = useContext(SalonContext);
  const salon = salons.find((salon) => String(salon.id) === id);
  const [tab, setTab] = useState(0);
  const changeTab = (event: any, newValue: number) => {
    setTab(newValue);
  };
  if (!salon) return null;
  return (
    <>
      <NavBar
        position="fixed"
        color="transparent"
        title=""
        leftButton={
          <Link to="/">
            <IconButton>
              <BackIcon color="primary" fontSize="large" />
            </IconButton>
          </Link>
        }
        rightButton={
          <IconButton>
            <HeartIcon color="primary" fontSize="large" />
          </IconButton>
        }
      />
      <SalonHeader {...salon} />
      <StyledTabs value={tab} onChange={changeTab} variant="fullWidth">
        <StyledTab label="Info"></StyledTab>
        <StyledTab label="Schema"></StyledTab>
      </StyledTabs>
      <TabPanel value={tab} index={0}>
        <SalonInfo {...salon} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Box p={2}>
          <Typography variant="body2">Schema</Typography>
        </Box>
      </TabPanel>
    </>
  );
}

export default SalonDetail;
