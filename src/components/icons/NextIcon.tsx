import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

export default function NextIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon width="8" height="11" viewBox="0 0 8 11" {...props}>
      <path fill="none" fillRule="evenodd" stroke="currentcolor" d="M1.446 0l5.233 5.233L1 10.912"/>
    </SvgIcon>
  );
}
