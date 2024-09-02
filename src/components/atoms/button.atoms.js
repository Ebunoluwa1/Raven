import React from 'react'

const ButtonComponent = ({
    style,
    margin,
    padding,
    background,
    color,
    onClick,
    alt,
    children
}) => {

  return (
    <button style={{
        margin: `${margin}`,
        padding: `${padding}`,
        background: `${background}`,
        color: `${color}`
    }}
    onClick={onClick}
    className={`py-2 px-2 drop-shadow-lg ${ alt 
        ? "bg-[#6D6D6D] px-3 py-3 text-center  font-normal text-white hover:drop-shadow-xl rounded-[50px]"
        :  "bg-[blue] text-center font-normal text-[white] rounded hover:drop-shadow-xl"
    }  ${style}
    `}
    >
{children}
    </button>
  );
}

export default ButtonComponent;