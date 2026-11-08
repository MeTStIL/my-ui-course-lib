import type { ReactElement, SVGProps } from 'react';

export const CalendarIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="2"
      y="3.5"
      width="12"
      height="11"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect x="2" y="6.5" width="12" height="1.5" fill="currentColor" />
    <rect x="4.75" y="1.5" width="1.5" height="3.5" rx="0.75" fill="currentColor" />
    <rect x="9.75" y="1.5" width="1.5" height="3.5" rx="0.75" fill="currentColor" />
  </svg>
);

CalendarIcon.displayName = 'CalendarIcon';

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M6.5 1.5L2 6L6.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M1.5 1.5L6 6L1.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ChevronRightIcon.displayName = 'ChevronRightIcon';
