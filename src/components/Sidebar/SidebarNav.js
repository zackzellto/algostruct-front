import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "../Sidebar/SidebarNav.css";
import { Row } from "react-bootstrap";

let CollapsedHeader = () => {
  return (
    <div>
      <b className="left-bracket">[</b>Algo
      <b className="right-bracket">]</b>
    </div>
  );
};

let ExpandedHeader = () => {
  return (
    <div>
      <b className="left-bracket">[</b>AlgoStruct
      <b className="right-bracket">]</b>
    </div>
  );
};

const SidebarNav = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* Icon change using menucollapse state */}
              <p className="sidebar-header">
                {menuCollapse ? <CollapsedHeader /> : <ExpandedHeader />}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu className="menu-icons" iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>About</MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                Learning
                <br />
                Resources
              </MenuItem>
              <MenuItem icon={<BiCog />}>Sandbox</MenuItem>
              <MenuItem icon={<BiCog />}>Contact</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
            <Row>
              <MenuItem
                className="social-icons"
                icon={<FaIcons.FaGithub />}
              ></MenuItem>
              <MenuItem
                className="social-icons"
                icon={<FaIcons.FaLinkedin />}
              ></MenuItem>
              <MenuItem
                className="social-icons"
                icon={<FaIcons.FaInstagram />}
              ></MenuItem>
              <MenuItem
                className="social-icons"
                icon={<FaIcons.FaTwitter />}
              ></MenuItem>
              <MenuItem
                className="social-icons"
                icon={<FaIcons.FaFacebook />}
              ></MenuItem>
            </Row>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default SidebarNav;
