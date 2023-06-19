import Input from "antd/es/input/Input";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TabInput from "../Tabs/TabInput/TabInput";
import { styles } from "../../style/style";
import { images } from "../../asset";
import { useAddVehicleMutation } from "../../features/slice/vehicle/vehicleActions";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

function VehiclesForm({ setOpen, open }) {
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [plate_number, setPlate_number] = useState();
  const [external_picture, setExternal_picture] = useState();
  const [internal_picture, setInternal_picture] = useState();
  const [manufacturer_and_model, setManufacturer_and_model] = useState();
  const [vehicle_year, setVehicle_year] = useState();

  const [addVehicle, { isLoading, error }] = useAddVehicleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      plate_number: plate_number,
      color: color,
      external_picture: external_picture,
      internal_picture: internal_picture,
      manufacturer_and_model: manufacturer_and_model,
      vehicle_year: vehicle_year,
    };
    try {
      const res = await addVehicle(body).unwrap();
      toast.success(res?.message);
      setOpen(!open);
    } catch (error) {
      toast.error("Error Occurred");
    }
  };
  return (
    <div className="bg-[#0000003f] w-[100%] h-screen z-20 flex justify-center items-center fixed top-0 left-0">
      <div className="w-[90%] 800px:w-[60%] h-[80%] bg-white relative flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-center font-bold text-xl">Add new vehicle</h3>
          <div className="px-3 800px:px-8 mt-5 mb-8">
            <form action="" className="mt-8" onSubmit={handleSubmit}>
              <div className="flex justify-between items-center w-[100%] mb-5">
                <div className="w-[48%]">
                  <label className="text-sm font-300 focus:outline-none focus:border-none">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px]"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <label className="text-sm font-300 focus:outline-none  w-[49%]">
                    plate_number
                  </label>
                  <input
                    type="text"
                    placeholder="plate number"
                    name="plate_number"
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px]"
                    onChange={(e) => setPlate_number(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between w-[100%] mb-5">
                <div className="w-[48%]">
                  <label className="text-sm font-300 focus:outline-none focus:border-none">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="year"
                    name="year"
                    value={vehicle_year}
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px]"
                    // onChange={(e) => setVehicle_year(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <label className="text-sm font-300 focus:outline-none focus:border-none">
                    Color
                  </label>
                  <input
                    type="text"
                    placeholder="color"
                    name="color"
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px]"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-[100%] mb-5 justify-between items-center">
                <div className="w-[48%]">
                  <label className="text-sm font-300">
                    Manufacturer / model
                  </label>
                  <input
                    type="text"
                    placeholder="manufacturer or model"
                    name="manufacturer_and_model"
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px]"
                    onChange={(e) => setManufacturer_and_model(e.target.value)}
                  />
                </div>
                <div className="w-[48%] flex flex-row items-center">
                  <input
                    type="file"
                    placeholder="model"
                    name="external_picture"
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px] hidden"
                    id="external_picture"
                    onChange={(e) => setExternal_picture(e.target.value)}
                  />
                  <div className="mr-5">
                    <img
                      src={images.avatar}
                      alt=""
                      className="h-[50px] w-[50px] rounded-full"
                    />
                  </div>
                  <label
                    className="text-sm font-300 text-[green]"
                    htmlFor="external_picture"
                  >
                    external_picture
                  </label>
                </div>
              </div>
              <div className="flex w-[100%] mb-5 justify-between items-center">
                <div className="w-[48%] flex flex-row items-center">
                  <input
                    type="file"
                    placeholder="model"
                    name="internal_picture"
                    className="focus:outline-none border-[1px] border-[#f3f3f3] rounded-md px-2 w-[100%] h-[35px] hidden"
                    id="internal_picture"
                    onChange={(e) => setInternal_picture(e.target.value)}
                  />
                  <div className="mr-5">
                    <img
                      src={images.avatar}
                      alt=""
                      className="h-[50px] w-[50px] rounded-full"
                    />
                  </div>
                  <label
                    className="text-sm font-300 text-[green]"
                    htmlFor="internal_picture"
                  >
                    external_picture
                  </label>
                </div>
              </div>
              <button
                className={`${styles.button} rounded-md py-3 px-5 mx-auto mt-8`}
              >
                {isLoading ? <BeatLoader color="#36d7b7" /> : "Add vehicle"}
              </button>
            </form>
          </div>
        </div>
        <div
          className="cursor-pointer absolute right-5 top-5"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineClose size={20} />
        </div>
      </div>
    </div>
  );
}

export default VehiclesForm;
