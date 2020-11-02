import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function BackIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon width="11" height="19" viewBox="0 0 11 19" {...props}>
      <path
        fill="none"
        fillRule="evenodd"
        stroke="currentcolor"
        d="M10.143 18.385L1 9.143 10.143 0"
      />
    </SvgIcon>
  );
}
