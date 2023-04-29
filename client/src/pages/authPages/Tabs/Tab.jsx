import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bgnav from "../../../component/BgNav/Bgnav";
import FirstTab from "../../../component/Tabs/FirstTab/FirstTab";
import FouthTab from "../../../component/Tabs/FouthTab/FouthTab";
import SecondTab from "../../../component/Tabs/SecondTab/SecondTab";
import ThirdTab from "../../../component/Tabs/ThirdTab/ThirdTab";
import "./Tab.scss";
import { useDispatch, useSelector } from "react-redux";

function Tab() {
  const Dispatch = useDispatch();
  const driver = useSelector((state) => state.driverDetails);
  const pageNumber = driver.pageNumber;
  const [pageStage, setPageStage] = useState(pageNumber);
  useEffect(() => {
    setPageStage(pageNumber);
  }, [Dispatch, driver, pageNumber]);

  const handleTab = (n) => {
    return setPageStage(n);
  };
  return (
    <div className="tab flex">
      <div className="tab__wrapper flex">
        <Bgnav />
        <p className="form-title tab-title">
          <span>XLCAB</span>TRANSFER
        </p>
        <div className="tab__controllers flex">
          <div
            className={
              pageStage === 1 ? "tab-controller active" : "tab-controller"
            }
            onClick={() => handleTab(1)}
          ></div>
          <div
            className={
              pageStage === 2 ? "tab-controller active" : "tab-controller"
            }
            onClick={() => handleTab(2)}
          ></div>
          <div
            className={
              pageStage === 3 ? "tab-controller active" : "tab-controller"
            }
            onClick={() => handleTab(3)}
          ></div>
          <div
            className={
              pageStage === 4 ? "tab-controller active" : "tab-controller"
            }
            onClick={() => handleTab(4)}
          ></div>
        </div>
        {pageStage === 1 && <FirstTab />}
        {pageStage === 2 && <SecondTab />}
        {pageStage === 3 && <ThirdTab />}
        {pageStage === 4 && <FouthTab />}
        <Link to="/helps" className="form-helps" />
      </div>
    </div>
  );
}

export default Tab;
