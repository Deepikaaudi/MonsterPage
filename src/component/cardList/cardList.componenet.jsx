import React from 'react';
import './cardList.Styling.css';
import {card as Card} from '../card/card.component';
export const cardList = (props)=>{
    return (<div className = 'card-list' >
            {props.monstersList.map(monster=> <Card key={monster.id} monster={monster}/>)}
            </div>)};