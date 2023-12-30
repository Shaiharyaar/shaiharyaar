const TICK_ICON = (
  <svg
    width='10'
    height='8'
    viewBox='0 0 10 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.80664 8C3.50242 8 3.21429 7.88399 3.02967 7.68397L0.530908 4.986C0.453654 4.90268 0.397253 4.80774 0.364931 4.70659C0.332608 4.60545 0.324997 4.50009 0.342534 4.39654C0.36007 4.29299 0.40241 4.19329 0.467132 4.10312C0.531854 4.01295 0.61769 3.93409 0.719731 3.87104C0.821737 3.80774 0.938028 3.7615 1.06194 3.73499C1.18585 3.70848 1.31495 3.70221 1.44183 3.71654C1.56871 3.73088 1.69089 3.76553 1.80135 3.81852C1.91181 3.87151 2.00839 3.9418 2.08555 4.02534L3.72971 5.79922L7.86354 0.374717C8.00063 0.195615 8.21906 0.0682581 8.47091 0.0205834C8.72277 -0.0270913 8.98748 0.00880839 9.20698 0.120408C9.66365 0.352429 9.80422 0.843904 9.51889 1.21765L4.63466 7.62397C4.55129 7.73382 4.43636 7.82538 4.29987 7.89071C4.16337 7.95604 4.00943 7.99316 3.8514 7.99886C3.83601 8 3.82202 8 3.80664 8Z'
      fill='#181059'
    />
  </svg>
);

const CROSS_ICON = (
  <svg
    width='10'
    height='10'
    viewBox='0 0 10 10'
    fill='#181059'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.06062 5.00008L9.02937 2.03133C9.17027 1.89068 9.24952 1.69982 9.2497 1.50074C9.24987 1.30166 9.17096 1.11066 9.03031 0.969768C8.88966 0.828872 8.6988 0.749618 8.49972 0.749442C8.30064 0.749267 8.10964 0.828183 7.96875 0.96883L5 3.93758L2.03125 0.96883C1.89035 0.827934 1.69925 0.748779 1.5 0.748779C1.30074 0.748779 1.10964 0.827934 0.968746 0.96883C0.82785 1.10973 0.748695 1.30082 0.748695 1.50008C0.748695 1.69934 0.82785 1.89043 0.968746 2.03133L3.9375 5.00008L0.968746 7.96883C0.82785 8.10973 0.748695 8.30082 0.748695 8.50008C0.748695 8.69934 0.82785 8.89043 0.968746 9.03133C1.10964 9.17223 1.30074 9.25138 1.5 9.25138C1.69925 9.25138 1.89035 9.17223 2.03125 9.03133L5 6.06258L7.96875 9.03133C8.10964 9.17223 8.30074 9.25138 8.5 9.25138C8.69925 9.25138 8.89035 9.17223 9.03125 9.03133C9.17214 8.89043 9.2513 8.69934 9.2513 8.50008C9.2513 8.30082 9.17214 8.10973 9.03125 7.96883L6.06062 5.00008Z'
      fill='white'
    />
  </svg>
);

// menu items

const SEARCH_ICON = (
  <svg width={20} height={19} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#a)' fill='#BFBFBF'>
      <path d='M11.17 16.664a8.164 8.164 0 1 1 0-16.327 8.164 8.164 0 0 1 0 16.327Zm0-13.995a5.831 5.831 0 1 0 0 11.663 5.831 5.831 0 0 0 0-11.663Z' />
      <path d='M1.84 18.997a1.166 1.166 0 0 1-.835-1.988l.007-.007 4.385-4.385a1.192 1.192 0 1 1 1.656 1.715l-4.385 4.326c-.22.219-.518.34-.828.339Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path
          fill='#fff'
          transform='translate(.667 .333)'
          d='M0 0h18.667v18.667H0z'
        />
      </clipPath>
    </defs>
  </svg>
);

const LISTING_ICON = (
  <svg width={24} height={19} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.25 2H24.5M8.25 9.5H24.5M8.25 17H24.5M2 2h.013M2 9.5h.013M2 17h.013'
      stroke='#BFBFBF'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const CALCULATOR_ICON = (
  <svg width={18} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1.357 2.312c0-.6.487-1.088 1.088-1.088h13.066c.602 0 1.089.487 1.089 1.088v19.6c0 .6-.487 1.088-1.089 1.088H2.445a1.089 1.089 0 0 1-1.088-1.089V2.312Z'
      stroke='#BFBFBF'
      strokeWidth={2}
    />
    <path
      d='M5.167 5.579h7.622'
      stroke='#BFBFBF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.167 11.567a1.089 1.089 0 1 0 0-2.177 1.089 1.089 0 0 0 0 2.177ZM5.167 14.834a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178ZM5.167 18.1a1.089 1.089 0 1 0 0-2.177 1.089 1.089 0 0 0 0 2.177ZM8.978 11.567a1.089 1.089 0 1 0 0-2.177 1.089 1.089 0 0 0 0 2.177ZM8.978 14.834a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178ZM8.978 18.1a1.089 1.089 0 1 0 0-2.177 1.089 1.089 0 0 0 0 2.177ZM12.79 11.567a1.089 1.089 0 1 0 0-2.177 1.089 1.089 0 0 0 0 2.177ZM12.79 14.834a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178ZM12.79 18.1a1.089 1.089 0 1 0 0-2.177 1.089 1.089 0 0 0 0 2.177Z'
      fill='#BFBFBF'
    />
  </svg>
);

const CALENDER_ICON = (
  <svg width={22} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM15 2v4M7 2v4M2 10h18'
      stroke='#BFBFBF'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);


const COMPARISON_ICON = (
  <svg
    width={28}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.333 22v-7.778M5.333 9.778V2M14.222 22V12M14.222 7.556V2M23.111 22v-5.556M23.111 12V2M2 14.222h6.667M10.889 7.556h6.666M19.778 16.444h6.666"
      stroke="#BFBFBF"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


const HISTORY_ICON  = (
  <svg
  width={24}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    stroke="#BFBFBF"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M12 6v6l4 2"
    stroke="#BFBFBF"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)

const HELP_ICON = (
  <svg
  width={24}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    stroke="#BFBFBF"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
    stroke="#BFBFBF"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)

const SEARCH_ICON_BAR = (  <svg
  width={24}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)" fill="#fff">
    <path d="M13.504 20.997c-5.797 0-10.496-4.7-10.496-10.496C3.008 4.704 7.707.004 13.504.004 19.3.004 24 4.704 24 10.501c0 5.796-4.7 10.496-10.496 10.496Zm0-17.994a7.497 7.497 0 1 0 0 14.995 7.497 7.497 0 0 0 0-14.995Z" />
    <path d="M1.508 23.996A1.5 1.5 0 0 1 .435 21.44l.009-.009 5.637-5.637a1.532 1.532 0 1 1 2.13 2.204L2.573 23.56a1.5 1.5 0 0 1-1.065.435Z" />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h24v24H0z" />
    </clipPath>
  </defs>
</svg>)


export {
  TICK_ICON,
  CROSS_ICON,
  SEARCH_ICON,
  LISTING_ICON,
  CALCULATOR_ICON,
  CALENDER_ICON,
  COMPARISON_ICON,
  HISTORY_ICON,
  HELP_ICON,
  SEARCH_ICON_BAR
};
