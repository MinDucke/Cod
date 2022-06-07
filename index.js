import { useEffect, useState } from "react";

import "./Header.css";
import images from "../../../../assets/images";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";

const MENU_ITEMS = [
  {
    icon: <i class="fa-solid fa-language"></i>,
    title: "English",
    chidren: {
      title: "language",
      data: [
        { code: "en", title: "English", type: 'language' },
        { code: "vi", title: "Tiếng Việt", type: 'language' },
      ],
    },
  },
  {
    icon: <i class="fa-solid fa-circle-question"></i>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <i class="fa-solid fa-keyboard"></i>,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 5000);
  }, []);

  return (
    <header className="wrapper-header">
      <div className="inner">
        <div className="logo">
          <img src={images.logo} alt="tiktok-logo" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className="search-title"> Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className="search">
            <div className="box">
              <div className="container-1">
                <span className="icon">
                  <i className="fa fa-search"></i>
                </span>
                <input type="search" id="search" placeholder="Search..." />
              </div>
            </div>
          </div>
        </Tippy>
        <div className="action">
          <Button text>Upload</Button>
          <Button primary>Log in </Button>

          <Menu items={MENU_ITEMS}>
            <button className="more-btn">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
