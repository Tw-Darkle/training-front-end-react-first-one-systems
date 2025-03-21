import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="header-content">
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
          <img src="https://www.firstone.co.th/public/assets/app/img/content/05.jpg" alt="body-image" />
          <div className="text-body">
            <p className="content-body-headder">FIRST ONE SYSTEMS <span>COMPANY LIMITED</span></p>
            <p>719 KPN Tower 11th floor ,Rama 9 Road, Bangkapi, Huay-Kwang,
            Bangkok 10310 Thailand</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Contact;
