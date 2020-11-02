import React, { ReactNode } from 'react'
import Box from '@material-ui/core/Box'

function TabPanel({ children, value, index, ...other }:{children:ReactNode, value:number, index:number }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabPanel