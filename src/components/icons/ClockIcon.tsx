import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function ClockIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon width="14" height="14" viewBox="0 0 14 14" {...props}>
      <defs>
        <path
          id="a"
          d="M.268 7.232a6.435 6.435 0 0 0 6.428 6.429 6.435 6.435 0 0 0 6.429-6.429A6.434 6.434 0 0 0 6.696.804 6.434 6.434 0 0 0 .268 7.232z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 -.464)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            stroke="currentcolor"
            strokeWidth=".5"
            d="M-15.804 304.018h401.786v-714.643H-15.804z"
            mask="url(#b)"
          />
        </g>
        <g stroke="currentcolor" strokeWidth=".5">
          <path d="M6.696.34A6.434 6.434 0 0 0 .268 6.767a6.435 6.435 0 0 0 6.428 6.428 6.435 6.435 0 0 0 6.429-6.428A6.434 6.434 0 0 0 6.696.339" />
          <path
            strokeLinecap="round"
            d="M6.696 6.768V2.679M9.273 9.344L6.696 6.768"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
