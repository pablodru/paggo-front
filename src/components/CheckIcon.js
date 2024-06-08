import React from 'react';

const CheckIcon = ({ size = '50px' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#f39c12"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-2 17.09L5.91 12l1.41-1.41L10 14.18l6.09-6.09L17.5 9.5 10 17.09z" />
  </svg>
);

export default CheckIcon;