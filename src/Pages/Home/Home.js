import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { CiGlobe } from "react-icons/ci";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { TbCloudNetwork } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { LuTvMinimalPlay } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";

const Home = () => {
  return (
    <div className="home">
      <div className="home1">
        <div className="home-page1">
          <p className="title-name"> FIRST ONE</p>
          <p className="title-name2"> SYSTEMS</p>
          <p className="title-detail"> YOU TRUST IN US IS OUR SUCCES</p>
        </div>
        <div className="swiper-box">
          <div className="swipers">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://www.firstone.co.th/public/assets/app/img/bg/06.png"
                  alt="slide1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.firstone.co.th/public/assets/app/img/bg/13.jpg"
                  alt="slide2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.firstone.co.th/public/assets/app/img/bg/15.jpg"
                  alt="slide3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* หน้า 2 */}

      <div className=" home2 section-2">
        <div className="img-bg1">
          <img
            src="https://www.firstone.co.th/public/assets/app/img/bg/01.jpg"
            alt="bg-secsin2"
          />
        </div>
        <div className="container">
          <div className="contents">
            <div className="title1-home2"> </div>
            <div className="title2-home2 ">
              <div className="head-content">
                <span className="color-s1"> KNOW</span>{" "}
                <span className="color-s2">FIRST ONE</span>
              </div>
              <div className="body-content">
                <span className="body-color fw-fs">
                  First One Systems Company Limited{" "}
                </span>
                <span>was established in</span>
                <span className="fw-fs"> 2005 </span>
                <span>
                  with a registered capital of 5 million baht. The company
                  operates services that relate to information Communication
                  technology. These services include design, installation, and
                  after-sale services, which cater to a sundry of customer needs
                  to which most are related to networking infrastructure, cyber
                  security
                </span>
              </div>
              <div className="footer-content">
                <div className="ft-content">
                  <div className="icon-ft">
                    <CiGlobe />
                  </div>
                  <div className="num-ft"> 20 </div>
                  <div className="color-s1">Years Experience</div>
                </div>
                <div className="ft-content">
                  <div className="icon-ft">
                    <BsPersonWorkspace />
                  </div>
                  <div className="num-ft"> 20 </div>
                  <div className="color-s1">Corporate Aliance</div>
                </div>
                <div className="ft-content">
                  <div className="icon-ft">
                    <HiLightBulb />
                  </div>
                  <div className="num-ft"> 20 </div>
                  <div className="color-s1">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* หน้า 3 */}
      <div className="home3">
        <div className="img-bg2">
          <img
            src="https://www.firstone.co.th/public/assets/app/img/bg/08.png"
            alt="bg-home3"
          />
        </div>
        <div className="section-container2">
          <div className="section3-content1">
            <div className="section-ct1 color-s1 fw600">
              FIVE KEY
              <span className="color-s2"> SOLUTIONS</span>
            </div>
            <p className="text-st3">
              First One Systems Company Limited, and its skilled engineering
              team which provides design, installation, and services, has been
              in existence for more than 20 years. During this time, it has
              received certification from global manufactures in ICT such as
              Alcatel Lucent Enterprise, Cisco System, Huawei Technology,
              Fortinet, Nutanix, VMware, and AWS, and offers solutions and
              services in five key categories
            </p>
          </div>
          <div className="box-container">
            <div className="boxs  boxs3-c1">
              <div className="text-c3 box-skew">
                <TbCloudNetwork />
              </div>
              <h3 className="text-c3 box-skew">Network</h3>
              <p className="text-c3 box-skew">Infrastructure</p>
            </div>
            <div className="boxs  boxs3-c2">
              <div className="text-c3 box-skew">
                <BsClipboardData />
              </div>
              <h3 className="text-c3 box-skew">Data</h3>
              <p className="text-c3 box-skew">Center</p>
            </div>
            <div className="boxs  boxs3-c1">
              <div className="text-c3 box-skew">
                <AiOutlineSafety />
              </div>
              <h3 className="text-c3 box-skew">Cyber</h3>
              <p className="text-c3 box-skew">Security</p>
            </div>
            <div className="boxs  boxs3-c2">
              <div className="text-c3 box-skew">
                <LuTvMinimalPlay />
              </div>
              <h3 className="text-c3 box-skew">Digital</h3>
              <p className="text-c3 box-skew">Transformation</p>
            </div>
            <div className="boxs  boxs3-c1">
              <div className="text-c3 box-skew">
                <MdOutlineManageAccounts />
              </div>
              <h3 className="text-c3 box-skew">Manage</h3>
              <p className="text-c3 box-skew">Swevice</p>
            </div>
          </div>
          <div className="boxs-run">
            <marquee direction="left" className="text-run  ">
            <img src="https://www.firstone.co.th/public/assets/app/img/pattern/01.png" alt="text-run" />
          </marquee>

          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
