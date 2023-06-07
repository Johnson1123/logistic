import React, { useState } from "react";
import { styles } from "../../../style/style";
import { AiOutlineClose } from "react-icons/ai";
import { useAddCardsMutation } from "../../../features/slice/wallet/walletActions";
import { BeatLoader } from "react-spinners";
import { images } from "../../../asset";

function AddCardForm({ open, setOpen }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expire, setExpire] = useState("");
  const [success, setSuccess] = useState(false);
  const [addCard, { isLoading, error }] = useAddCardsMutation();
  const body = {
    card_name: name,
    card_number: number,
    expiry_date: expire,
    cvv: cvv,
  };
  const handleAddCard = async (e) => {
    console.log(success);
    e.preventDefault();
    const res = await addCard(body).unwrap();
    setSuccess(true);
    console.log(success);
  };
  return (
    <div className="bg-[#0000003f] w-[100%] h-screen z-20 flex justify-center items-center fixed top-0 left-0">
      <div className="w-[90%] 800px:w-[60%] h-[80%] bg-white relative flex justify-center items-center">
        <div
          className="cursor-pointer absolute right-5 top-5"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineClose size={20} />
        </div>
        <>
          {success ? (
            <div className="modal__box modal-response box-shadow">
              <div>
                <h4> Hurray your card has been added successfully </h4>
              </div>
              <div>
                <img src={images.glad} alt="" className="glad" />
              </div>
              <div className="flex justify-between w-full">
                <button
                  className={`${styles.button} py-3 px-5 mx-auto mt-5 `}
                  type="submit"
                  onClick={() => setOpen(() => setOpen(false))}
                >
                  Go back
                </button>
                <button
                  className={`${styles.button} py-3 px-5 mx-auto mt-5`}
                  type="submit"
                  onClick={() => setSuccess(false)}
                >
                  Add new card
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col 800px:w-[50%]">
              <h3 className="text-center font-bold text-xl">Add new card</h3>
              <form onSubmit={handleAddCard} className="px-3 800px:px-8">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="text-sm font-300 focus:outline-none focus:border-none"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cardNum"
                    className="text-sm font-300 focus:outline-none focus:border-none"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNum"
                    name="cardNum"
                    className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
                    placeholder="card number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="mb-4 flex justify-between">
                  <div className="w-[48%]">
                    <label
                      htmlFor="Edate"
                      className="text-sm font-300 focus:outline-none focus:border-none"
                    >
                      Expiring Date
                    </label>
                    <input
                      type="text"
                      id="Edate"
                      name="Edate"
                      className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
                      placeholder="yyyy-mm-dd"
                      onChange={(e) => setExpire(e.target.value)}
                    />
                  </div>
                  <div className="w-[48%]">
                    <label
                      htmlFor="cvv"
                      className="text-sm font-300 focus:outline-none focus:border-none"
                    >
                      CVV
                    </label>
                    <input
                      type="password"
                      id="cvv"
                      name="cvv"
                      placeholder="cvv"
                      className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
                      maxLength={3}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  {error?.data?.message?.expiry_date ? (
                    <p className="error">
                      {error?.data?.message?.expiry_date[0]}
                    </p>
                  ) : (
                    error?.data?.message?.name && (
                      <p className="error">{error?.data?.message?.name[0]}</p>
                    )
                  )}
                  <button
                    className={`${styles.button} py-3 px-5 mx-auto mt-5`}
                    type="submit"
                  >
                    {isLoading ? <BeatLoader color="#36d7b7" /> : "Add New"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default AddCardForm;
