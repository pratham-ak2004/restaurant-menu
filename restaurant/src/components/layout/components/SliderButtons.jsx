import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const SlideButtonBar = ({ filterItems, categories }) => {
   const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);

   const handleButtonClick = (index) => {
     setActiveButtonIndex(index);
   };

   const callBoth = (value , category) => {
        handleButtonClick(value);
        filterItems(category);
   }

  return (
    <div style={{"display" : "flex" , "justifyContent" : "space-evenly" , "height" : "4rem"}}>
    <ButtonGroup
      aria-label="Slide button bar"
      className="slide-button-bar "
    >
      {categories.map((category, index) => (
        <Button
          className="lg"
          key={index}
          variant="primary"
          onClick={() => callBoth(index,category)}
          active={index === activeButtonIndex}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
    </div>
  );
};

export default SlideButtonBar;
