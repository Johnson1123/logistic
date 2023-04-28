import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const driverData = {
  vehicle: {
    name: "acura",
    plate_number: "",
    color: "",
    external_picture: "",
    internal_picture: "",
    manufacturer_and_model: "",
    vehicle_year: "",
  },
  first_name: "",
  last_name: "",
  refferal_code: "",
  vehicle_available: "",
  driver_license: "",
  driver_license_image: "",
  drivers_picture: "",
  billing_type: "",
  company_name: "",
  address: "",
  registration_code: "",
  vat_liability: "",
  vat_number: "",
  bank_account_holder_name: "",
  bank_account_number: "",
  bank_name_or_bic_swift: "",
};

export const uploadDriverDetail = createAsyncThunk(
  "uploadDriverDetail/auth",
  async (user, { rejectWithValue }) => {
    const tokenData = JSON.parse(localStorage.getItem("token"));
    try {
      const body = JSON.stringify(user);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.data.access}`,
        },
      };
      const response = await axios.get(
        "https://techvonix.onrender.com/api/v1/profile/",
        config
      );
      localStorage.setItem("profile", JSON.parse(response.data));
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);
