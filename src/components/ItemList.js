import { useState } from "react";

const ItemList = ({ setData, defaultItems }) => {
  const [active, setActive] = useState(0);
  const categories = [
    {
      active: true,
      category: defaultItems,
      icon: "/static/media/injection.180f69bf.svg",
      key: 0,
      name: "All",
    },
    ...defaultItems,
    {
      active: false,
      category: defaultItems,
      icon: "/static/media/injection.180f69bf.svg",
      key: defaultItems.length + 1,
      name: "Vouchers",
    },
  ];
  const handleOnClick = (category, index) => {
    setData(category);
    setActive(index);
  };

  return (
    <div className="item-list">
      {categories.map((el, index) => (
        <div
          key={index}
          onClick={() => handleOnClick(el.category, index)}
          className={active === index ? "active" : "inner"}
        >
          <div>
            <img src={el.icon} alt="img" />
          </div>
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
