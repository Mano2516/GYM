import { Avatar, Carousel, Image, Space, Typography } from "antd";
import Cat from "./Cat";
import "../css/header.css";
import bg1 from "../imgs/background-01-1920x750.jpg";
import bg2 from "../imgs/background-02-1920x750.jpg";
import bg3 from "../imgs/background-03-1920x750.jpg";

import coach01 from "../imgs/user-ryan-jackson-270x270.jpg";
import coach02 from "../imgs/user-emily-perkins-270x270.jpg";
import coach03 from "../imgs/user-samantha-ruiz-270x270.jpg";
import coach04 from "../imgs/user-austin-ortiz-270x270.jpg";
import user01 from "../imgs/user-alisa-milano-80x80.jpg";
import user02 from "../imgs/user-july-mao-80x80.jpg";
import {
  LikeOutlined,
  ThunderboltOutlined,
  UserOutlined,
  GooglePlusOutlined,
  PushpinOutlined,
  TwitterOutlined,
  FacebookFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Landing />
      <Welcome />
      <Cat />
      <Coaches />
      <Testimonials />
    </>
  );
}
function Landing() {
  return (
    <div className="header" style={{ maxWidth: "100%" }}>
      <div className="container" style={{ maxWidth: "100%" }}>
        <Carousel
          autoplay
          autoplaySpeed={3000}
          arrows
          draggable
          // pauseOnHover
          dots
          dotPosition="bottom"
        >
          <div className="textContainer" style={{ maxWidth: "100%" }}>
            <Image maxWidth="100%" src={bg1} preview={false} />
            <p className="text">
              <Typography.Title
                italic
                style={{
                  fontSize: 62,
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                No Pain No Gain
              </Typography.Title>
              <Typography.Paragraph
                style={{ color: "#fff", fontSize: 22, height: 70 }}
              >
                Having a perfect body requires a lot of training. Nice-looking
                body and powerful organism are interconnected – and we can help
                you with both.
              </Typography.Paragraph>
              <button className="getBtn">Get Started</button>
            </p>
          </div>
          <div className="textContainer">
            <Image maxWidth="100%" src={bg2} preview={false} />
            <p className="text">
              <Typography.Title
                italic
                style={{
                  fontSize: 62,
                  color: "#fff",

                  textTransform: "uppercase",
                }}
              >
                never give up
              </Typography.Title>
              <Typography.Paragraph
                style={{ color: "#fff", fontSize: 22, height: 70 }}
              >
                Every bodybuilder requires a lot of dedication and effort to
                shape his/her body into something to be proud of. We can give
                you everything you need for it.
              </Typography.Paragraph>
              <button className="getBtn">Get Started</button>
            </p>
          </div>
          <div className="textContainer">
            <Image maxWidth="100%" src={bg3} preview={false} />
            <p className="text">
              <Typography.Title
                italic
                style={{
                  fontSize: 62,
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                You can go the distance
              </Typography.Title>
              <Typography.Paragraph
                style={{ color: "#fff", fontSize: 22, height: 70 }}
              >
                Clients of our gym receive not only necessary equipment for
                their workouts but also friendly support in achieving their
                number one training goal.
              </Typography.Paragraph>
              <button className="getBtn">Get Started</button>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
function Welcome() {
  return (
    <div className="welcome">
      <Typography.Title
        className="heading"
        style={{
          fontSize: 45,
          display: "block",
          marginInline: "auto",
          width: "fit-content",
        }}
      >
        Welcome
      </Typography.Title>

      <Typography.Paragraph className="text">
        Welcome to Intense Gym! We hope that you will appreciate our services
        and opportunities we offer our loyal and potential customers. Here are
        some of them:
      </Typography.Paragraph>

      <div className="cards">
        <div className="card">
          {" "}
          <span className="icon">
            <UserOutlined />
          </span>
          <Typography.Title className="title">
            Qualified Coaches
          </Typography.Title>
          <Typography.Paragraph
            style={{ marginTop: 18, fontWeight: 400, color: "#434345" }}
          >
            Our coaches have years of experience in various types of fitness and
            sports.
          </Typography.Paragraph>
        </div>
        <div className="card">
          {" "}
          <span className="icon">
            <LikeOutlined />
          </span>
          <Typography.Title className="title">
            Individual Approach
          </Typography.Title>
          <Typography.Paragraph
            style={{ marginTop: 18, fontWeight: 400, color: "#434345" }}
          >
            Every client of Intense has a personalized program of training and
            nutrition.
          </Typography.Paragraph>
        </div>
        <div className="card">
          {" "}
          <span className="icon">
            <ThunderboltOutlined />
          </span>
          <Typography.Title className="title">
            Modern Fitness Equipment
          </Typography.Title>
          <Typography.Paragraph
            style={{ marginTop: 18, fontWeight: 400, color: "#434345" }}
          >
            We cooperate with leading fitness equipment suppliers to give you
            the superior results.
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}

function Coaches() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  return (
    <div className="coaches">
      <div className="container">
        <Typography.Title
          className="heading"
          style={{
            fontSize: 45,
            display: "block",
            marginInline: "auto",
            width: "fit-content",
          }}
        >
          Coaches
        </Typography.Title>
        <div className="cards">
          <Space direction="horizontal" size={18}>
            <div className="card">
              <div className="imgcontainer">
                <Image className="coaimg" src={coach01} preview={false} />
                <span className="links">
                  <span className="link face">
                    <FacebookFilled />{" "}
                  </span>
                  <span className="link google">
                    <GooglePlusOutlined />
                  </span>
                  <span className="link twitter">
                    <TwitterOutlined />
                  </span>
                </span>
              </div>
              <div className="info">
                <span
                  className="name"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  Ryan Jackson
                </span>
                <span className="position">CrossFit</span>
              </div>
              <div className="data">
                He has more than 10 years of experience in CrossFit and
                professional athletics.
              </div>
            </div>
            <div className="card">
              <div className="imgcontainer">
                <Image className="coaimg" src={coach02} preview={false} />
                <span className="links">
                  <span className="link face">
                    <FacebookFilled />{" "}
                  </span>
                  <span className="link google">
                    <GooglePlusOutlined />
                  </span>
                  <span className="link twitter">
                    <TwitterOutlined />
                  </span>
                </span>
              </div>
              <div className="info">
                <span
                  className="name"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  Emily Perkins
                </span>
                <span className="position">Fitness</span>
              </div>
              <div className="data">
                Emily can teach you all peculiarities of fitness and aerobics in
                a group or individually.
              </div>
            </div>
            <div className="card">
              <div className="imgcontainer">
                <Image className="coaimg" src={coach03} preview={false} />
                <span className="links">
                  <span className="link face">
                    <FacebookFilled />{" "}
                  </span>
                  <span className="link google">
                    <GooglePlusOutlined />
                  </span>
                  <span className="link twitter">
                    <TwitterOutlined />
                  </span>
                </span>
              </div>
              <div className="info">
                <span
                  className="name"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  Samantha Ruiz
                </span>
                <span className="position">Yoga</span>
              </div>
              <div className="data">
                Our leading yoga coach, Samantha, will help you reach full
                harmony with your body.
              </div>
            </div>
            <div className="card">
              <div className="imgcontainer">
                <Image className="coaimg" src={coach04} preview={false} />
                <span className="links">
                  <span className="link face">
                    <FacebookFilled />{" "}
                  </span>
                  <span className="link google">
                    <GooglePlusOutlined />
                  </span>
                  <span className="link twitter">
                    <TwitterOutlined />
                  </span>
                </span>
              </div>
              <div className="info">
                <span
                  className="name"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  Austin Ortiz
                </span>
                <span className="position">Bodybuilding</span>
              </div>
              <div className="data">
                Austin is not only our most called-for coach, but also a winner
                of many championships.
              </div>
            </div>
          </Space>
        </div>
        <button
          className="viewAll"
          onClick={() => {
            navigate("/about");
          }}
        >
          VIEW ALL COACHES
        </button>
      </div>
    </div>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState("1");
  return (
    <div className="container">
      <div className="testimonials">
        <div className="overLay"></div>
        <div className="content">
          <Typography.Title className="heading">Testimonials</Typography.Title>
          {current === "1" && <OP1 />}
          {current === "2" && <OP2 />}
          <Change current={current} setCurrent={setCurrent} />
        </div>
      </div>
    </div>
  );
}
function OP1() {
  return (
    <div className="op1">
      <Typography.Title className="qu">
        <PushpinOutlined />
      </Typography.Title>
      <Typography.Paragraph className="op">
        I came here to acquire the shape of my body I had half a year ago. I was
        quite surprised with a range of services they offered me at Intense Gym.
        Moreover, you can benefit from their group training
      </Typography.Paragraph>
      <div className="user">
        <Avatar
          src={user01}
          style={{ width: 70, height: 70, marginBottom: 12 }}
        ></Avatar>
        <Typography.Title className="userN">Alice Wilson</Typography.Title>
        <Typography.Paragraph className="userD">
          Regular Client
        </Typography.Paragraph>
      </div>
    </div>
  );
}
function OP2() {
  return (
    <div className="op2">
      <Typography.Title className="qu">
        <PushpinOutlined />
      </Typography.Title>
      <Typography.Paragraph className="op">
        I have had the phenomenal pleasure of working out with Intense Gym
        coaches as a client and friend throughout the last year. Their magnetic
        personalities ensure that a friendship will inevitably develop
        throughout the training course.
      </Typography.Paragraph>
      <div className="user">
        <Avatar
          src={user02}
          style={{ width: 70, height: 70, marginBottom: 12 }}
        ></Avatar>
        <Typography.Title className="userN">Julie Smith</Typography.Title>
        <Typography.Paragraph className="userD">
          Regular Client
        </Typography.Paragraph>
      </div>
    </div>
  );
}
function Change({ current, setCurrent }) {
  return (
    <span className="controls">
      <button
        className="prev"
        onClick={() => {
          if (current === "1") {
            setCurrent("2");
          } else if (current === "2") {
            setCurrent("1");
          }
        }}
      >
        <LeftOutlined />
      </button>
      <button
        className="next"
        onClick={() => {
          if (current === "1") {
            setCurrent("2");
          } else if (current === "2") {
            setCurrent("1");
          }
        }}
      >
        <RightOutlined />
      </button>
    </span>
  );
}
