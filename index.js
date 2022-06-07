import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import "./Menu.css";
import { useState } from "react";

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
  console.log(isParent)
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            // console.log(item.children)
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
              console.log(item.children)
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      visible
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu-list" tabIndex="-1" {...attrs}>
          <PopperWrapper className="menu-popper">
            <Header title={'Language'}/>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
