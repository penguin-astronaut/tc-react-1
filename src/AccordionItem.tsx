import React, {useState} from 'react';
import {IItems} from "./App";

export const AccordionItem: React.FC<IItems> = ({title, descr, children}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={'accordion-item' + (isShow ? ' accordion-item--show' : '')}>
      <div className="accordion-item__title" onClick={() => setIsShow(!isShow)}>
        {title} <span>{isShow ? '-' : '+'}</span>
      </div>
      <div className='accordion-item__body'>
        <div className="accordion-item__descr">{descr}</div>
        {children?.map(({title, descr, children}) =>
          <AccordionItem title={title} descr={descr} children={children}/>)}
      </div>
    </div>)
}
