import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WindowPropsType } from "../../components/desktop/window/window";
import { AppsType } from "../../apps";

type WindowType = AppsType;

export const windowSlice = createSlice({
  name: "user",
  initialState: {
    openWindows: [] as WindowType[],
  },
  reducers: {
    openWindow: (state, action: PayloadAction<WindowPropsType>) => {
      if (!state.openWindows.find((el) => el.name === action.payload.name)) {
        state.openWindows.push(action.payload);
      }
    },
    closeWindow: (state, action: PayloadAction<{ name: string }>) => {
      const closingWindow = state.openWindows.find(
        (el) => el.name === action.payload.name
      );
      if (closingWindow) {
        state.openWindows = state.openWindows.filter(
          (win) => win.name !== action.payload.name
        );
      }
    },
    activeWindow: (state, action: PayloadAction<{ name: string }>) => {
      state.openWindows = state.openWindows.map((el) => {
        el.isActive = false;

        if (el.name === action.payload.name) {
          el.isActive = true;
        }

        return el;
      });
    },
  },
});

export const { openWindow, closeWindow, activeWindow } = windowSlice.actions;

export default windowSlice.reducer;
