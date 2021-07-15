import React, {useState} from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL:'narmal',
}

const Link = ({page,children}) => {
  const[status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
    console.log(STATUS.HOVERED);
  }

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
    console.log(STATUS.NORMAL);
  }

  return(
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>

  );

};

export default Link;
