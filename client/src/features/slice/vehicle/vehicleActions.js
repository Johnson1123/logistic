import { apiSlice } from "../apiSlice";
const VEHICLE = "/profile/driver";

export const VehicleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addVehicle: builder.mutation({
      query: (data) => ({
        url: `${VEHICLE}/vehicles`,
        method: "POST",
        body: data,
      }),
    }),
    getVehicle: builder.mutation({
      query: () => ({
        url: `${VEHICLE}/vehicles`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddVehicleMutation, useGetVehicleMutation } = VehicleApiSlice;
