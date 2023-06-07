import React, { useEffect } from "react";

import "./Home.scss";
import Search from "../../component/Search/Search";
import UserTask from "../../component/UserTask/UserTask";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import OperationArea from "../../component/OperationArea/OperationArea";
import OurService from "../../component/OurService/OurService";
import Testimonials from "../../component/Testimonials/Testimonials";
import Map from "../../component/Map";
import ChargesBadge from "../../component/ChargesBadge/ChargesBadge";
import DownloadSection from "../../component/DownloadSection/DownloadSection";
import { useNavigate } from "react-router-dom";
import OurBrand from "../../component/OurBrand/OurBrand";
import Safety from "../../component/Safety/Safety";
import { useSelector } from "react-redux";

export const Home = () => {
  const navigate = useNavigate();

  const user_id = useSelector((state) => state?.auth?.user?.user_id);
  console.log(user_id);
  return (
    <div className="app__container home__container">
      <div className="app__wrapper flex">
        <div className="home__intro flex">
          {user_id && <Search />}

          <div className="home__intro-title">
            <h1 className="p-text fw-500">Fast & Easy Way To Rent A Car</h1>
          </div>

          <div className="home__intro-p">
            <p className="text intro-p">
              A successful business values the importance of face to face
              interaction, even in our growing digital age. If you’re a modern
              professional, a medium size business or a large enterprise;
              travelling internationally for business purposes is probably a
              fact of life.
            </p>
          </div>
          {!user_id && (
            <div
              className={
                user_id
                  ? `btn__container flex btn-center`
                  : `btn__container flex`
              }
            >
              {!user_id && (
                <div className="btn-box">
                  <SignupBtn
                    label="Partnership"
                    handler={() => navigate("/signupuser")}
                  />
                </div>
              )}

              {!user_id && (
                <div className="btn-box">
                  <SignupBtn
                    label="Sign up"
                    handler={() => navigate("/signUp")}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <UserTask />
        <OperationArea />
        <OurService />
        <Testimonials />
        {user_id && <Map />}
        <ChargesBadge />
        {user_id && <DownloadSection />}
        {user_id ? "" : <OurBrand />}
        {user_id ? "" : <Safety />}
      </div>
    </div>
  );
};
