import { Input, Typography } from "antd";
import "../css/footer.css";
import logo from "../imgs/logo.png";
import {
  FacebookFilled,
  GooglePlusOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="links">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="links-list">
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
          <div className="copyright">
            Intense Gym &copy; {new Date().getFullYear()} .<p>By MaNo</p>
          </div>
        </div>

        <div className="Newsletter">
          <Typography.Title className="heading">Newsletter</Typography.Title>
          <Typography.Paragraph className="cont">
            Keep up with our always upcoming news and updates. Enter your e-mail
            and subscribe to our newsletter.
          </Typography.Paragraph>
          <Input
            style={{
              padding: "0",
              borderRadius: "0",
              height: 40,
              border: "none",
            }}
            type="text"
            placeholder="Type your email"
            prefix={
              <MailOutlined
                style={{
                  backgroundColor: "#191919",
                  color: "#fff",
                  height: "100%",
                  width: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            }
            suffix={<button className="btn">Subscribe</button>}
          />
        </div>
      </div>
    </footer>
  );
}
