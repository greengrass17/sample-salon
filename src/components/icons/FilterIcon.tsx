import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

export default function FilterIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon width="19" height="18" viewBox="0 0 19 18" {...props}>
      <g fill="none" fillRule="evenodd" stroke="currentcolor">
        <path d="M16.5 8.251V.001M16.5 18v-6.5M9.5 3.031V.001M9.5 17.887V6.324M3 11.543V0M3 17.887v-3.052M11.292 4.646a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0zM4.542 13.19a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0zM18.292 9.646a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0z" />
      </g>
    </SvgIcon>
  );
}
