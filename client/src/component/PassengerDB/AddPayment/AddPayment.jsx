import React, { useEffect, useState } from "react";
import "./AddPayment.scss";
import { styles } from "../../../style/style";
import AddCardForm from "../../PassengerDB/AddPayment/AddCardForm.jsx";
import { AiOutlineClose } from "react-icons/ai";
import { useGetCardsMutation } from "../../../features/slice/wallet/walletActions";

function AddPayment() {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState();
  const [getCard, { isLoading, errorr }] = useGetCardsMutation();

  useEffect(() => {
    async function getCards() {
      const res = await getCard().unwrap();
      setCards(res.data);
    }
    getCards();
  }, [open]);
  console.log(cards);
  return (
    <div className="AddCard">
      <div className="w-[100%] bg-[#f3f3f3] py-3 px-4 800px:w-[80%] rounded-md shadow-sm flex justify-between mt-4">
        <p className="small-title fw-400 text">Add new payment system</p>
        <button
          className={`${styles.button} py-1`}
          onClick={() => setOpen(!open)}
        >
          Add New
        </button>
      </div>
      <div className="mt-7">
        {!cards ? (
          <p>Loading.....</p>
        ) : (
          cards.map((card, index) => {
            return (
              <div
                key={index}
                className="bg-slate-100 flex py-3 px-3 round-sm w-[95%] mx-auto 800px:mx-0 800px:w-[80%] mb-3 justify-between "
              >
                <h4 className="text-sm font-[400] w-[25%] truncate">
                  {card.card_name}
                </h4>
                <h5 className="text-sm font-[400] text-left w-[30%] truncate">
                  {card.card_number}
                </h5>
                <h5 className="text-sm font-[400] text-center">***</h5>
                <h5 className="text-sm font-[400] text-center">
                  {card.expiry_date}
                </h5>
                <h5 className="text-sm font-[400] text-center">
                  <AiOutlineClose
                    size={16}
                    className="text-[#c9c9c9] cursor-pointer font-bold hover:text-[red]"
                  />
                </h5>
              </div>
            );
          })
        )}
      </div>

      {open && <AddCardForm open={open} setOpen={setOpen} />}
    </div>
  );
}

export default AddPayment;
