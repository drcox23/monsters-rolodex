import React from 'react';
import './cardList.styles.css';

import { Card } from '../card/Card.component';

export const CardList = props => (
  // console.log("cardList props", props)

  <div className='cardList'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
