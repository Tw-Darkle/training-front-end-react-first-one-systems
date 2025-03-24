import "./contact.css";
import { BsPhoneVibrate } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="header">
        <div className="boxs"></div>
        <div className="text-p">
          <p className="title-header"> CONTACT US</p>
          <span>
            <a href="/">Home</a> / <a href="/Contact">Contact</a>
          </span>
        </div>
        <img
          src="https://www.firstone.co.th/public/assets/app/img/bg/13.jpg"
          alt="bg-header"
        />
      </div>

      <div className="body-content">
        <img
          src="https://www.firstone.co.th/public/assets/app/img/content/05.jpg"
          alt="body-image"
        />
        <div className="text-body">
          <p className="content-body-headder">
            FIRST ONE SYSTEMS <span>COMPANY LIMITED</span>
          </p>
          <p className="text-addr">
            719 KPN Tower 11th floor ,Rama 9 Road, Bangkapi, Huay-Kwang, Bangkok
            10310 Thailand
          </p>
          <div className="contact-content">
            <div className="show-content">
              <div className="icons">
                <BsPhoneVibrate />
              </div>
              <div className="text-contact">
                <h3 className="text">CALL US</h3>
                <h4>02-717-1060, 02-717-1061</h4>
              </div>
            </div>
            <div className="show-content">
              <div className="icons">
                <CiMail />
              </div>
              <div className="text-contact">
                <h3 className="text">MAKE A QUOTE</h3>
                <h4>mkt@firstone.co.th</h4>
              </div>
            </div>
            <div className="show-content">
              <div className="icons">
                <FaSquareFacebook />
              </div>
              <div className="text-contact">
                <h3 className="text">FOLLOW US</h3>
                <h4>First One Systems Co.,Ltd.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7750.818470105343!2d100.58487036423196!3d13.754177304772314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e5d72156099%3A0xbe95e9dd6d7af187!2sFirst%20One%20Systems%20Co.%2C%20Ltd.!5e0!3m2!1sth!2sth!4v1742722772256!5m2!1sth!2sth"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          alt="map"
        ></iframe>
        <div className="text-map">
          <div className="icon-map">
            <FaMapLocationDot />
            <h4>Map</h4>
          </div>
        </div>
      </div>

      <div className="footer-contact">
        <div className="footer-content">
          <div className="footer-text">
            <h3>
              FIRST ONE SYSTEMS <span>COMPANY LIMITED</span>
            </h3>
            <p className="text-footer">
              719 KPN TOWER 11TH FLOOR, RAMA 9 ROAD, BANGKAPI, HUAY-KWANG,
              BANGKOK 10310 THAILAND
            </p>
            <h5 className="tel-mails">
              TEL. <span> 02-717-1060, 02-717-1061 </span> EMAIL :{" "}
              <span> MKT@FIRSTONE.CO.TH</span>
            </h5>
            <div className="contact-follow">
              <div className="text-follow"> FOLLOW US</div>
              <div className="link-facebook">
                <div className="link-content">
                  <TfiFacebook />
                  <a href="https://www.facebook.com/Firstonesystems/">
                    {" "}
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="links">
              <a href="/">HOME</a>
              <a href="/About">ABOUT US</a>
              <a href="/SOLUTION & SERVICES">SOLUTION & SERVICES</a>
              <a href="/Partner">PRATNERS</a>
            </div>
            <div className="links">
              <a href="Client">CLIENTS</a>
              <a href="/Career">CAREER</a>
              <a href="/Contact">CONTACT US</a>
              <a href="/PrivacyPolicy">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
        <img
          src="https://www.firstone.co.th/public/assets/app/img/bg/footer.jpg"
          alt="bg-footer"
        />
      </div>
    </div>
  );
};
export default Contact;
