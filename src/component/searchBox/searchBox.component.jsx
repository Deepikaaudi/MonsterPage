import React from 'react';
import './seacrhBox.style.css';

export const SearchBox = (props) =>{
    console.log(props);
    const { placeholder, onChangeInput} = props;
    return <input type= 'search' className = 'search' placeholder = {placeholder} onChange={onChangeInput}></input>;
};