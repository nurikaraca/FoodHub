import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressState {
  address: string;
  latitude?: number;
  longitude?: number;
}

const initialState: AddressState = {
  address: "",
  latitude: undefined,
  longitude: undefined,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ address: string; latitude: number; longitude: number }>
    ) => {
      state.address = action.payload.address;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setLocation } = addressSlice.actions;
export default addressSlice.reducer;
