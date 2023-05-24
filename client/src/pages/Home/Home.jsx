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
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../features/api";
import { setProfile } from "../../features/customer/getUser";

export const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.profile.profile);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="app__container home__container">
      <div className="app__wrapper flex">
        <div className="home__intro flex">
          {auth.user_id && <Search />}

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
          {!auth?.user_id && (
            <div
              className={
                user ? `btn__container flex btn-center` : `btn__container flex`
              }
            >
              {!auth?.user_id && (
                <div className="btn-box">
                  <SignupBtn
                    label="Partnership"
                    handler={() => navigate("/signupuser")}
                  />
                </div>
              )}

              {!auth?.user_id && (
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
        {user && <Map />}
        <ChargesBadge />
        {user && <DownloadSection />}
        {user ? "" : <OurBrand />}
        {user ? "" : <Safety />}
      </div>
    </div>
  );
};
