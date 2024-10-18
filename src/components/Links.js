import { Image, Menu } from "antd";
import logo from "../imgs/logo.png";
import "../css/links.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Links() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  return (
    <div
      style={{
        padding: "0 25px",
        backgroundColor: "#191919",
        height: 70,
        boxShadow: "0 3px 11px 0 #000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        position: "fixed",
        zIndex: 25550,
        left: 0,
        top: 0,
      }}
    >
      <div className="logo">
        <Image src={logo} preview={false} />
      </div>
      <div className="links">
        <Menu
          onClick={(item) => {
            navigate(item.key);
          }}
          mode="horizontal"
          style={{
            width: "160%",
            flex: 1,
            backgroundColor: "transparent",
            color: "#fff",
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              key: "/",
              label: "Home",
            },
            {
              key: "/about",
              label: "About",
            },
            {
              key: "/contact",
              label: "Contact",
            },
          ]}
        ></Menu>
      </div>
    </div>
  );
}
