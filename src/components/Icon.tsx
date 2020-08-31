import React from 'react';

import dairy from '../assets/dairy_icon.svg';
import fruit from '../assets/fruit_icon.svg';
import home from '../assets/home_icon.svg';
import meat from '../assets/meat_icon.svg';
import pantry from '../assets/bottles_icon.svg';
import bakery from '../assets/bread_icon.svg';
import remove from '../assets/delete_icon.svg';
import add from '../assets/add_icon.svg';
import tick from '../assets/tick_icon.svg';
import moon from '../assets/moon_icon.svg';
import sun from '../assets/sun_icon.svg';

interface Icons {
  dairy: string;
  fruit: string;
  home: string;
  meat: string;
  pantry: string;
  bakery: string;
  remove: string;
  add: string;
  tick: string;
  moon: string;
  sun: string;
}
interface Props {
  type: keyof Icons;
}

const icons: Icons = {
  dairy,
  fruit,
  home,
  meat,
  pantry,
  bakery,
  remove,
  add,
  tick,
  moon,
  sun,
};

const Icon: React.FC<Props> = ({ type }) => {
  return <img src={icons[type]} alt={icons[type]} />;
};

export default Icon;
