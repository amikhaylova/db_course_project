import React from "react";
import {VscChromeClose} from "react-icons/vsc";

export const Research = (props) => {
    let chosenResearch = props.chosenResearch;
    return chosenResearch.map((research, index) => (
        <div key={index}>
            <div key={research.id}>
                {research.name}
            </div>
            <div className="icons">
                <VscChromeClose className='delete-icon'
                                onClick={() => props.removeResearch(research.id)}/>
            </div>
        </div>
    ));
};