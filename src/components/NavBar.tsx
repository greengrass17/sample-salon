import React, { ReactElement, ElementType, ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { styled, withStyles } from '@material-ui/core/styles';

interface Props {
  position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
  color?: 'inherit' | 'transparent' | 'default' | 'primary' | 'secondary';
  title: string,
  leftButton: ReactNode,
  rightButton: ReactNode
}

const Container = styled('div')({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '50px 1fr 50px',
});

const StyledAppBar = withStyles((theme) => ({
  colorPrimary: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}))(AppBar);

export default function NavBar({
  position,
  color,
  title,
  leftButton,
  rightButton,
}: Props): ReactElement {
  return (
    <StyledAppBar position={position} color={color} elevation={0}>
      <Container>
        {leftButton}
        <Box alignItems="center" justifyContent="center" display="flex">
          <Typography variant="h1">{title}</Typography>
        </Box>
        {rightButton}
      </Container>
    </StyledAppBar>
  );
}
