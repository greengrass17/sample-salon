import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

export default function PinIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon width="10" height="15" viewBox="0 0 10 15" {...props}>
      <g fill="none" fillRule="evenodd" stroke="currentcolor" strokeWidth=".5">
        <path d="M4.767 2.869c-1.025 0-1.856.817-1.856 1.825 0 1.007.831 1.824 1.856 1.824 1.024 0 1.855-.817 1.855-1.824 0-1.008-.83-1.825-1.855-1.825z"/>
        <path d="M9.158 4.693c0-2.385-1.966-4.318-4.39-4.318C2.341.375.374 2.308.374 4.693s4.392 9.67 4.392 9.67 4.391-7.285 4.391-9.67z"/>
    </g>
    </SvgIcon>
  );
}
