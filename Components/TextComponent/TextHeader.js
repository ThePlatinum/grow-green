import React from 'react';
import { TextTitleOne } from './TextTitleOne';
import { TitleDescription } from './TitleDescription';
// import './TextHeader.css';

export const TextHeader = ({textHeaderSpan, textHeadenotSpan, textHeaderDescr}) => {

    return (
        
            <div className="title white" id="sch-title">
                <TextTitleOne spanText = {textHeaderSpan} notSpanText={textHeadenotSpan}/>
                <TitleDescription titleDescription={textHeaderDescr}/>
            </div>
        
    )
}