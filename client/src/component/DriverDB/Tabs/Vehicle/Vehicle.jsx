import React, { useEffect, useState } from "react";
import { vehicles } from "../../../../content/Vehicle";
import "./Vehicle.scss";
import { styles } from "../../../../style/style";
import VehiclesForm from "../../../driver/VehiclesForm.jsx";

function Vehicle() {
  const [open, setOpen] = useState(false);
  return (
    <div className="Vehicle mt-[20px] ">
      <div className="control__con mt-5 m-[1rem]">
        <p className="title 800px:text-[20px]">Expird Documents</p>
        <div className="w-[100%]">
          <div className="bg-[#f3f3f3] py-3 px-4 rounded-[20px] shadow-sm flex justify-between items-center mt-4">
            <h4 className="text-sm font-[700] w-[25%]">Deadline</h4>
            <h5 className="text-sm font-[700] w-[45%] text-center truncate">
              Document
            </h5>
            <h5 className="text-sm font-[700] w-[30%] text-right">Car Plate</h5>
          </div>

          <div className="mt-7">
            {vehicles.map((vehicle, index) => {
              return (
                <div
                  key={index}
                  className="flex py-5  px-3 w-[100%] mb-3 justify-between border-b-2 border-[#f3f3f3]"
                >
                  <h4 className="text-sm font-[400] w-[25%] truncate text-[green]">
                    {vehicle.model}
                  </h4>
                  <h5 className="text-sm font-[400] w-[45%] text-left px-2 truncate">
                    {vehicle.year}
                  </h5>
                  <h5 className="text-sm font-[400] w-[30%] truncate text-right">
                    {vehicle.plate}
                  </h5>

                  {/* <h5 className="text-sm font-[400]">{vehicle.seats}</h5> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {open && <VehiclesForm setOpen={setOpen} open={open} />}
    </div>
  );
}

export default Vehicle;
