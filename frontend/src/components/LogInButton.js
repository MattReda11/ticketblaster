import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css"

export default function LogInButton(props) {

    return (
        <NavLink to={props.to}>
            <button className="Button"><p>LOG IN</p></button>
        </NavLink>
    )
}