import { Breadcrumb, Image, Typography, Progress, Space } from "antd";
import { useEffect, useState } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/about.css";
import about from "../imgs/user-emily-perkins-437x437.jpg";
import Cat from "./Cat";
import {
  FacebookFilled,
  GooglePlusOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";
export default function About() {
  return (
    <>
      <Heading />
      <AboutCoach />
      <Cat />
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
              title: "About Coach",
            },
          ]}
        />
      </Typography.Paragraph>
    </div>
  );
}
function AboutCoach() {
  return (
    <div className="about">
      <div className="container">
        <div className="img-container">
          <div className="image">
            <Image
              src={about}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              preview={false}
              alt="About Coach"
            />
          </div>
          <div className="txt">
            <button className="getBtn">GET IN TOUCH</button>
            <div className="links">
              <span className="face link">
                <FacebookFilled />
              </span>
              <span className="google link">
                <GooglePlusOutlined />
              </span>
              <span className="twitter link">
                <TwitterOutlined />
              </span>
            </div>
            <div className="con">
              <span className="ico">
                {" "}
                <PhoneOutlined />
              </span>
              <span>
                <a href="tel:+201016808882" className="lin">
                  +201016808882
                </a>
              </span>
            </div>
            <div className="con">
              <span className="ico">
                {" "}
                <MailOutlined />
              </span>
              <span>
                <a className="lin mail" href="mailto:mahmoudfalous@gmail.com">
                  mahmoudfalous@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="skills">
          <Alldata />
          <Prog />
        </div>
      </div>
    </div>
  );
}
function Prog() {
  return (
    <div className="progressContainer">
      <div className="prog">
        <div className="data">
          <div className="title">Fitness</div>
          <div className="value" style={{ color: "#abcc37" }}>
            70%
          </div>
        </div>
        <Progress
          percent={70}
          showInfo={false}
          strokeColor={"#abcc37"}
          strokeWidth={13}
          percentPosition={{
            align: "end",
            type: "outer",
          }}
        ></Progress>
      </div>
      <div className="prog">
        <div className="data">
          <div className="title">CrossFIT</div>
          <div className="value" style={{ color: "#79ccf2" }}>
            54%
          </div>
        </div>
        <Progress
          percent={54}
          showInfo={false}
          strokeColor={"#79ccf2"}
          strokeWidth={13}
          percentPosition={{
            align: "end",
            type: "outer",
          }}
        ></Progress>
      </div>
      <div className="prog">
        <div className="data">
          <div className="title">yoga</div>
          <div className="value" style={{ color: "#f5bf2f" }}>
            87%
          </div>
        </div>
        <Progress
          percent={87}
          showInfo={false}
          strokeColor={"#f5bf2f"}
          strokeWidth={13}
          percentPosition={{
            align: "end",
            type: "outer",
          }}
        ></Progress>
      </div>
      <div className="prog">
        <div className="data">
          <div className="title">Bodybuilding</div>
          <div className="value" style={{ color: "#d01919" }}>
            65%
          </div>
        </div>
        <Progress
          percent={65}
          showInfo={false}
          strokeColor={"#d01919"}
          strokeWidth={13}
          percentPosition={{
            align: "end",
            type: "outer",
          }}
        ></Progress>
      </div>
    </div>
  );
}
function Alldata() {
  return (
    <>
      <div className="heading">
        <Typography.Title className="name">Emily Perkins</Typography.Title>
        <Typography.Paragraph className="title">
          Fitness Coach
        </Typography.Paragraph>
      </div>
      <div className="info">
        <Typography.Paragraph className="p1">
          Emily Perkins is the leading fitness and athletics trainer at Intense
          Gym. She received a Bachelor’s in Physical Health and Education, and a
          Master’s in Exercise Science in Los Angeles University.
        </Typography.Paragraph>
        <Typography.Paragraph className="p2" italic={true}>
          " I'm glad to help all clients of Intense Gym acquire the proper body
          shape through fitness."
        </Typography.Paragraph>
        <Typography.Paragraph className="p3">
          Ms. Perkins joined our team in 2010, after winning the local athletics
          competition. She started her career in sports in 2005, and in a few
          years she became a well-known trainer in the world of fitness. Her
          professionalism allows her to find a personalized approach to every
          client of Intense Gym.
        </Typography.Paragraph>
      </div>
    </>
  );
}
