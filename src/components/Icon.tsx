import React from 'react';

import diaryIcon from '../assets/diary_icon.svg';
import fruitIcon from '../assets/fruit_icon.svg';
import homeIcon from '../assets/home_icon.svg';
import meatIcon from '../assets/meat_icon.svg';
import pantryIcon from '../assets/bottles_icon.svg';
import breadIcon from '../assets/bread_icon.svg';

const icons = {
  bread: breadIcon,
  fruit: fruitIcon,
  diary: diaryIcon,
  meat: meatIcon,
  home: homeIcon,
  pantry: pantryIcon,
};

const Icon: React.FC = () => {
  return <img src={icons.bread} alt={icons.bread} />;
};

export default Icon;
