import {AccordionItem} from "./AccordionItem";
import React from "react";
import {IItems} from "./App";

export const Accordion: React.FC<{ data: IItems[] }> = ({data}) =>
  (<div className="accordion">
    {data.map(({title, descr, children}) =>
      <AccordionItem title={title} descr={descr} children={children}/>)}
  </div>)
