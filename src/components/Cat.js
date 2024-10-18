import { Carousel, Image, Typography } from "antd";
import "../css/header.css";
import cat01 from "../imgs/home-01-480x480.jpg";
import cat02 from "../imgs/home-02-480x480.jpg";
import cat03 from "../imgs/home-03-480x480.jpg";
import cat04 from "../imgs/home-04-480x480.jpg";
import cat05 from "../imgs/about-01-480x480.jpg";
import cat06 from "../imgs/about-02-480x480.jpg";
export default function Cat() {
  return (
    <div
      className="category"
      style={{
        // paddingTop: 50,
        // width: "100%",
        // height: 500,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Carousel style={{ display: "block", padding: "0 35px" }} draggable>
        <div>
          <span
            className="img"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src={cat01} preview={false} />
            <Typography.Title className="imgt" style={{}}>
              Bodybuilding
            </Typography.Title>
            <button className="fbtn" style={{}}>
              FREE FIRST LESSON
            </button>
          </span>
          <span
            className="img"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src={cat02} preview={false} />
            <Typography.Title className="imgt" style={{}}>
              Fitness
            </Typography.Title>
            <button className="fbtn" style={{}}>
              FREE FIRST LESSON
            </button>
          </span>
          <span
            className="img"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src={cat03} preview={false} />
            <Typography.Title className="imgt" style={{}}>
              Crossfit
            </Typography.Title>
            <button className="fbtn" style={{}}>
              FREE FIRST LESSON
            </button>
          </span>
        </div>
        <div>
          <span
            className="img"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src={cat04} preview={false} />
            <Typography.Title className="imgt" style={{}}>
              Circle Studio
            </Typography.Title>
            <button className="fbtn" style={{}}>
              FREE FIRST LESSON
            </button>
          </span>
          <span
            className="img"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src={cat05} preview={false} />
            <Typography.Title className="imgt" style={{ width: "100%" }}>
              Strength Training
            </Typography.Title>
            <button className="fbtn" style={{}}>
              FREE FIRST LESSON
            </button>
          </span>
          <span
            className="img"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src={cat06} preview={false} />
            <Typography.Title className="imgt" style={{}}>
              Yoga
            </Typography.Title>
            <button className="fbtn" style={{}}>
              FREE FIRST LESSON
            </button>
          </span>
        </div>
      </Carousel>
    </div>
  );
}
