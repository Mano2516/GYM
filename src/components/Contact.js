import { useEffect, useState } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Image,
  Typography,
  Progress,
  Space,
  Form,
  Input,
  Button,
} from "antd";
import "../css/contact.css";
import TextArea from "antd/es/input/TextArea";
export default function Contact() {
  return (
    <>
      <Heading />
      <Content />
    </>
  );
}

function Heading() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  return (
    <div className="heading">
      <Typography.Title>About Coach</Typography.Title>
      <Typography.Paragraph>
        <Breadcrumb
          items={[
            {
              title: "Home Page",
              // href: "http://localhost:3000",
              className: "home-page",
              onClick: () => {
                navigate("/");
              },
            },
            {
              title: "Contact",
            },
          ]}
        />
      </Typography.Paragraph>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <div className="container">
        <Text />
        <FormApp />
      </div>
    </div>
  );
}
function Text() {
  return (
    <div className="text">
      <h1 className="head">How to Find us</h1>
      <Typography.Paragraph className="parag">
        We are located in the city center and it's easy to reach us with any
        kind of public transport. Use our map to find the nearest gym.
      </Typography.Paragraph>
      <div className="place">
        <div className="pName">Cambridge</div>
        <div className="pInfo">
          9863 - 9867 MILL ROAD, CAMBRIDGE, MG09 99HT.
        </div>
        <div className="pInfo">
          Phone: <span className="hover">+44 (123) 456 7890</span>
        </div>
        <div className="pInfo">
          Email: <span className="hover">info@intensegym.com</span>
        </div>
      </div>
      <div className="place">
        <div className="pName">Glasgow</div>
        <div className="pInfo">9870 ST VINCENT PLACE, GLASGOW, DC 45 FR 45</div>
        <div className="pInfo">
          Phone: <span className="hover">+44 (123) 456 7890</span>
        </div>
        <div className="pInfo">
          Email: <span className="hover">info@intensegym.com</span>
        </div>
      </div>
    </div>
  );
}
function FormApp() {
  return (
    <div className="form">
      <h1 className="head">Get in touch</h1>
      <Form>
        <div className="NM">
          <span>
            <div className="lable">Name:</div>
            <div className="in">
              <Form.Item
                name={"Name"}
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input style={{ height: 40 }} className="input" />
              </Form.Item>
            </div>
          </span>
          <span>
            <div className="lable">Email :</div>
            <div className="in">
              <Form.Item
                name={"Email"}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input style={{ height: 40 }} className="input" />
              </Form.Item>
            </div>
          </span>
        </div>
        <div className="txtArea">
          <span>
            <div className="lable">Message:</div>
            <div className="in">
              <Form.Item
                name={"Message"}
                rules={[
                  {
                    required: true,
                    message: "Please input your Message!",
                  },
                ]}
              >
                <TextArea className="input" style={{ height: 100 }} />
              </Form.Item>
            </div>
          </span>
        </div>
        <div className="btn">
          <button type="submit" className="but send">
            SEND
          </button>
          <button type="reset" className="but reset">
            RESET
          </button>
        </div>
      </Form>
    </div>
  );
}
