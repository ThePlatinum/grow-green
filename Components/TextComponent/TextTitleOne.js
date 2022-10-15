import React from "react";
// import './TextTitleOne.css';

export const TextTitleOne = ({spanText, notSpanText}) => {
    return(
        <h3 className="titleTextOne"><span>{spanText}</span> {notSpanText}</h3>
    )
}