import React from "react";
import { Link } from "react-router-dom";





export const BackButton = ({label,href}) => {
  return (
    <button>
        <Link to={href}>
        {label}</Link>
    </button>
  )
}
