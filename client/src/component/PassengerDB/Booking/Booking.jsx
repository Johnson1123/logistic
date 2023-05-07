import React, { useEffect, useState } from "react";

// file import
import SignupBtn from "../../Btn/SignupBtn/SignupBtn";
import { images } from "../../../asset/index";
import { favourites } from "../../../content/MyFourite";
import "./Booking.scss";

// icons import
import { BsSearch } from "react-icons/bs";
import { TfiAngleRight } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { Places } from "../../../content/Places";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import Note from "./Note/Note";
import DatePicker from "../DatePicker/DatePicker";
import Input from "../../Input/Input";
import { useDispatch } from "react-redux";

function Booking() {
  const Dispatch = useDispatch();
  const [isRoute, setIsRoute] = useState(false);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: "",
  });
  const handleToggle = () => {
    setIsRoute(true);
  };

  const checkError = (cardData) => {
    const formError = {};
    if (!cardData.name) {
      formError.name = "card name required";
    }
    if (!cardData.number && typeof cardData.number != "number") {
      formError.number = "card number required";
    }
    if (!cardData.month && typeof cardData.month != "number") {
      formError.month = "month required";
    }
    if (!cardData.year && !typeof cardData.year != "number") {
      formError.year = "year required";
    }
    if (!cardData.cvv && !typeof cardData.cvv != "number") {
      formError.cvv = "cve required";
    }
    return formError;
  };

  const handleCard = (e) => {
    e.preventDefault();
    setError(checkError(cardData));
    if (Object.keys(error).length === 0 && submit) {
      // Dispatch(customerAddCard(cardData));
    }
    setSubmit(true);
  };
  console.log(submit);
  return (
    <div className="Booking__container flex center">
      <div className="Booking__wrapper">
        <div className="main__container flex">
          <div className="left__container">
            <div className="map">
              <div className="map__container">
                <img src={images.Mapping} alt="" />
              </div>
              {/* <div className="search__container flex">
                <input type="text" />
                <BsSearch />
              </div> */}
              <div className="setRoute">
                <div className="routeIcon">
                  <div>
                    <IoLocationSharp />
                  </div>
                  <div>.</div>
                  <div>.</div>
                  <div>.</div>
                  <div>.</div>
                  <div className="box"></div>
                </div>
                <div className="input-con">
                  <input type="text" placeholder="Pick up location?" />
                  <input type="text" placeholder="Drop off location?" />
                </div>
              </div>
            </div>
          </div>
          <div className="center__container">
            <div className="top__container flex">
              <h3 className="p-text title">My Favourites</h3>
              <div className="favourite__container flex">
                {favourites.map((item, index) => {
                  return (
                    <div className="favourite flex" key={index}>
                      <span>{item.icon}</span>
                      <span className="name p-text">{item.place}</span>
                      <span className="right">
                        <TfiAngleRight />
                      </span>
                    </div>
                  );
                })}
              </div>
              <h4 className="p-text small-title">OTHER PLACES</h4>
              <div className="places flex">
                {Places.map((item, index) => {
                  return (
                    <div key={index} className="place flex">
                      <IoLocationSharp />
                      <div className="place__info">
                        <p className="p-text title">{item.name}</p>
                        <p className="p-text">{item.address}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bottom__container">
              <h3 className="title">Add new place</h3>
              <form action="">
                <div className="input__container">
                  <label htmlFor="Pname">Place Name</label>
                  <input type="text" placeholder="Tiffany Park" />
                </div>
                <div className="input__container">
                  <label htmlFor="Paddress">Place Address</label>
                  <input
                    type="text"
                    placeholder="3890 Copperfield Dr, Bryan, Tx....  "
                  />
                </div>
                <div className="btn__control">
                  <SignupBtn label="Add +" className="btn-add" />
                </div>
              </form>
            </div>
          </div>
          <div className="right__container">
            <div className="payments__container">
              <h3 className="title">Payment</h3>
              <p className="p-text text">
                Choose desired payment type. We offer cars suitable for most
                every day needs
              </p>
              <p className="small-title">Payment Methods</p>
              <PaymentMethod />
            </div>
            {/* <div className="pickUp__time">
              <h3 className="title">Pick-Up Time</h3>
              <div className="control__btn flex">
                <div className="control-btn">
                  <div className="details">
                    <p className="small-title">IMMEDIATE PICK-UP</p>
                    <p className="p-text">Get a ride in a minutes</p>
                  </div>
                  {true ? (
                    <div className="circle"></div>
                  ) : (
                    <div className="circle-checked">
                      <IoIosCheckmark />
                    </div>
                  )}
                </div>
                <div className={false ? `control-btn` : `control-btn active`}>
                  <div className="details">
                    <p className="small-title">SCHEDULE RIDE</p>
                    <p className="p-text">
                      Schedule your ride from 60 minutes in advance
                    </p>
                  </div>
                  {false ? (
                    <div className="circle"></div>
                  ) : (
                    <div className="circle-checked">
                      <IoIosCheckmark />
                    </div>
                  )}
                </div>
              </div>
              {false && <Note />}
              {true && <DatePicker />} */}
            {/* </div> */}
            <div className="add__card">
              <h3 className="bold-text">Add new card</h3>

              <form onSubmit={handleCard}>
                <div className="input_error">
                  <Input
                    type="text"
                    name="issuer"
                    placeholder="name on the card"
                    onChange={(e) => {
                      setCardData((prev) => {
                        return { ...prev, name: e.target.value };
                      });
                    }}
                  />
                  {error.name ? <p className="error">{error.name}</p> : null}
                </div>

                <div className="input_error">
                  <Input
                    type="text"
                    name="number"
                    placeholder="card number"
                    onChange={(e) => {
                      setCardData((prev) => {
                        return { ...prev, number: e.target.value };
                      });
                    }}
                  />
                  {error.number ? (
                    <p className="error">{error.number}</p>
                  ) : null}
                </div>

                <div className="cv flex">
                  <div className="input_error">
                    <div className="wrap">
                      <input
                        type="text"
                        name="month"
                        placeholder="month"
                        onChange={(e) => {
                          setCardData((prev) => {
                            return { ...prev, month: e.target.value };
                          });
                        }}
                        max={2}
                        maxLength={2}
                      />
                      <input
                        type="text"
                        name="year"
                        placeholder="year"
                        onChange={(e) => {
                          setCardData((prev) => {
                            return { ...prev, year: e.target.value };
                          });
                        }}
                      />
                    </div>
                    {error.year || error.month ? (
                      <p className="error">{error.year}</p>
                    ) : null}
                  </div>
                  <div>
                    <div className="input_error">
                      <Input
                        type="text"
                        name="cve"
                        placeholder="cve"
                        onChange={(e) => {
                          setCardData((prev) => {
                            return { ...prev, cvv: e.target.value };
                          });
                        }}
                      />
                      {error.cve ? <p className="error">{error.cve}</p> : null}
                    </div>
                  </div>
                </div>
                <SignupBtn label={submit ? "sumitted" : "add"} />
              </form>
            </div>
          </div>
        </div>
        <div className="footer__container"></div>
      </div>
    </div>
  );
}

export default Booking;
