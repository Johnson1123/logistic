import React, { useEffect, useState } from "react";
import TabInput from "../../Tabs/TabInput/TabInput";
import { images } from "../../../asset";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import { styles } from "../../../style/style";
import "./FleetSettings.scss";

function FleetSetting() {
  const [tab, setTab] = useState("Personal");
  const [open, setOpen] = useState(false);
  const handleTab = (n) => {
    console.log(n);
    return setTab(n);
  };
  return (
    <div className="fleetSetting">
      <div className="fleetSetting__wrapper">
        <p className="title">Settings</p>
        <div className="tabs__con flex">
          {["Personal", "Company settings"].map((tabs, index) => {
            return (
              <button
                className={tab === tabs ? "tab-btn active" : "tab-btn"}
                key={index}
                onClick={() => handleTab(tabs)}
              >
                {tabs}
              </button>
            );
          })}
        </div>
        <div className="tbas__container">
          {tab === "Personal" && <PersonalForm />}
          {tab === "Company settings" && (
            <Taxsetting open={open} setOpen={setOpen} />
          )}
        </div>
      </div>
      {open && <AddTax open={open} setOpen={setOpen} />}
    </div>
  );
}
function PersonalForm() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="PersonalForm flex">
      <div className="img__control">
        {selectedFile ? <img src={preview} /> : <img src={images.James} />}
        <input type="file" id="img-upload" onChange={onSelectFile} />
        <label
          htmlFor="img-upload"
          className="custom-upload flex center p-text fw-500"
        >
          <MdOutlineEdit />
        </label>
      </div>
      <form className="personal__form">
        <div className="input__group">
          <TabInput
            type="text"
            label="First Name"
            placeholder="James"
            name="Fname"
          />
          <TabInput
            type="text"
            label="Last Name"
            placeholder="Williams"
            name="Lname"
          />
        </div>
        <div className="input__group">
          <TabInput
            type="text"
            label="Email "
            placeholder="Central Paris"
            name="home"
          />
          <TabInput
            type="text"
            label="Username"
            placeholder="Username"
            name="gender"
          />
        </div>
        <div className="flex justify-center my-[50px]">
          <button className="bg-[green] px-4 py-2 cursor-pointer mx-auto rounded-[20px] mt-[50px]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

function Taxsetting({ open, setOpen }) {
  return (
    <div className="">
      <div className="mt-5">
        <p className="title">Tax number</p>
        <div className="mt-[20px]">
          <form action="">
            <label className="text-sm">
              USA <span className="text-[red] text-sm">*</span>
              <div className="">
                <input
                  type="text"
                  className="border-[1px] border-slate-300 h-[35px] rounded-md mr-4 focus:outline-none px-2 w-[300px]"
                />

                <button className="bg-[green] px-5 py-2 rounded-md text-white w-[100px] mt-[16px] 800px:mt-0">
                  Edit
                </button>
              </div>
            </label>
          </form>
        </div>
        <button
          className="text-[green] text-sm mt-[20px]"
          onClick={() => setOpen(!open)}
        >
          Add another tax number
        </button>
      </div>
    </div>
  );
}

// return (
//   <div className="bg-[#0000003f] w-[100%] h-screen z-20 flex justify-center items-center fixed top-0 left-0">
//     <div className="w-[90%] 800px:w-[60%] h-[80%] bg-white relative flex justify-center items-center">
//       <div
//         className="cursor-pointer absolute right-5 top-5"
//         onClick={() => setOpen(!open)}
//       >
//         <AiOutlineClose size={20} />
//       </div>
//       <>
//         {success ? (
//           <div className="modal__box modal-response box-shadow">
//             <div>
//               <h4> Hurray your card has been added successfully </h4>
//             </div>
//             <div>
//               <img src={images.glad} alt="" className="glad" />
//             </div>
//             <div className="flex justify-between w-full">
//               <button
//                 className={`${styles.button} py-3 px-5 mx-auto mt-5 `}
//                 type="submit"
//                 onClick={() => setOpen(() => setOpen(false))}
//               >
//                 Go back
//               </button>
//               <button
//                 className={`${styles.button} py-3 px-5 mx-auto mt-5`}
//                 type="submit"
//                 onClick={() => setSuccess(false)}
//               >
//                 Add new card
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex justify-center items-center flex-col 800px:w-[50%]">
//             <h3 className="text-center font-bold text-xl">Add new card</h3>
//             <form onSubmit={handleAddCard} className="px-3 800px:px-8">
//               <div className="mb-5">
//                 <label
//                   htmlFor="name"
//                   className="text-sm font-300 focus:outline-none focus:border-none"
//                 >
//                   name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="name"
//                   className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="cardNum"
//                   className="text-sm font-300 focus:outline-none focus:border-none"
//                 >
//                   Card number
//                 </label>
//                 <input
//                   type="text"
//                   id="cardNum"
//                   name="cardNum"
//                   className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
//                   placeholder="card number"
//                   onChange={(e) => setNumber(e.target.value)}
//                 />
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <div className="w-[48%]">
//                   <label
//                     htmlFor="Edate"
//                     className="text-sm font-300 focus:outline-none focus:border-none"
//                   >
//                     Expiring Date
//                   </label>
//                   <input
//                     type="text"
//                     id="Edate"
//                     name="Edate"
//                     className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
//                     placeholder="yyyy-mm-dd"
//                     onChange={(e) => setExpire(e.target.value)}
//                   />
//                 </div>
//                 <div className="w-[48%]">
//                   <label
//                     htmlFor="cvv"
//                     className="text-sm font-300 focus:outline-none focus:border-none"
//                   >
//                     CVV
//                   </label>
//                   <input
//                     type="password"
//                     id="cvv"
//                     name="cvv"
//                     placeholder="cvv"
//                     className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
//                     maxLength={3}
//                     onChange={(e) => setCvv(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="">
//                 {error?.data?.message?.expiry_date ? (
//                   <p className="error">
//                     {error?.data?.message?.expiry_date[0]}
//                   </p>
//                 ) : (
//                   error?.data?.message?.name && (
//                     <p className="error">{error?.data?.message?.name[0]}</p>
//                   )
//                 )}
//                 <button
//                   className={`${styles.button} py-3 px-5 mx-auto mt-5`}
//                   type="submit"
//                 >
//                   {isLoading ? <BeatLoader color="#36d7b7" /> : "Add New"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </>
//     </div>
//   </div>
// );

function AddTax({ open, setOpen }) {
  const [success, setSuccess] = useState(false);
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div className="bg-[#0000003f] w-[100%] h-screen z-20 flex justify-center items-center fixed top-0 left-0">
      <div className="w-[90%] 800px:w-[60%] h-[80%] bg-white relative flex justify-center items-center">
        <div
          className="cursor-pointer absolute right-5 top-5"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineClose className="text-red-500" size={20} />
        </div>
        <>
          {success ? (
            <div className="modal__box modal-response box-shadow">
              <div>
                <h4> Hurray your Tax details added successfully </h4>
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
              <h3 className="text-center font-bold text-xl">Tax Number</h3>
              <form className="px-3 800px:px-8">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="text-sm font-300 focus:outline-none focus:border-none"
                  >
                    Country
                  </label>
                  <input
                    type=""
                    id="name"
                    name="name"
                    placeholder="country"
                    className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="tax_number"
                    className="text-sm font-300 focus:outline-none focus:border-none"
                  >
                    Tax Number
                  </label>
                  <input
                    type="text"
                    id="tax_number"
                    name="tax_number"
                    className="focus:outline-none border-[1px] border-[#e2e2e2] rounded-md px-2 w-[100%] h-[35px]"
                    placeholder="tax number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div className="flex justify-between w-full ">
                  {/* {error?.data?.message?.expiry_date ? (
                    <p className="error">
                      {error?.data?.message?.expiry_date[0]}
                    </p>
                  ) : (
                    error?.data?.message?.name && (
                      <p className="error">{error?.data?.message?.name[0]}</p>
                    )
                  )} */}
                  <button
                    className={`${styles.button} py-3 !rounded-xl w-[100px] px-5 mt-5 !bg-[#919191]`}
                    type="submit"
                    onClick={() => setOpen(!open)}
                  >
                    Cancel
                  </button>
                  <button
                    className={`${styles.button}  py-3 px-5 w-[100px] mt-5`}
                    type="submit"
                  >
                    {false ? <BeatLoader color="#36d7b7" /> : "Add New"}
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
export default FleetSetting;
