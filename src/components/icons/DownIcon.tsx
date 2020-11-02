import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function DownIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon width="12" height="7" viewBox="0 0 12 7" {...props}>
      <path fill="none" fillRule="evenodd" stroke="currentcolor" d="M11.295 1.062L6.062 6.295.384.616"/>
    </SvgIcon>
  );
}
