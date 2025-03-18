import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-top">
        <div className="logo-nav">
          <a className="logos">
            <img src="https://www.firstone.co.th/public/assets/app/img/logo.png " alt="Logos"/>
          </a>
        </div>
        <div className="nav-menu">
          <div className="menu-main">
            <a href="/" className="menu">
              HOME
            </a>
            <a href="/About" className="menu">
              ABOUT US
            </a>
            <a href="/" className="menu">
              SOLUTIONS & SERVICES
            </a>
            <a href="/Partner" className="menu">
              PARTNERS
            </a>
            <a href="/Clients" className="menu">
              CLIENTS
            </a>
            <a href="/Career" className="menu">
              CAREER
            </a>
          </div>
          
        <div className="nav-contact menu-main">
            <a href="/Contact" className="menu">
              CONTACT US
            </a>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
