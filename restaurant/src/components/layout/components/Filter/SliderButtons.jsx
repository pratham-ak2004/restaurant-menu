import React from "react";
import { Dropdown } from "react-bootstrap";

const ResponsiveDropdownFilter = ({ filterItems, categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  const handleDropdownSelect = (category) => {
    setSelectedCategory(category);
    filterItems(category);
  };

  return (
    <div className="jutify-content-center">
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedCategory}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.map((category, index) => (
          <Dropdown.Item
            key={index}
            active={category === selectedCategory}
            onClick={() => handleDropdownSelect(category)}
          >
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default ResponsiveDropdownFilter;
