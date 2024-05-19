import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WindowPropsType } from "../../components/desktop/window";

export const windowSlice = createSlice({
  name: "user",
  initialState: {
    openWindows: [] as WindowPropsType[],
  },
  reducers: {
    openWindow: (state, action: PayloadAction<WindowPropsType>) => {
      if (!state.openWindows.find((el) => el.title === action.payload.title)) {
        state.openWindows.push(action.payload);
      }
    },
    closeWindow: (state, action: PayloadAction<{ title: string }>) => {
      const closingWindow = state.openWindows.find(
        (el) => el.title === action.payload.title
      );
      if (closingWindow) {
        state.openWindows = state.openWindows.filter(
          (win) => win.title !== action.payload.title
        );
      }
    },
    activeWindow: (state, action: PayloadAction<{ title: string }>) => {
      state.openWindows = state.openWindows.map((el) => {
        el.isActive = false;

        if (el.title === action.payload.title) {
          el.isActive = true;
        }

        return el;
      });
    },
  },
});

export const { openWindow, closeWindow, activeWindow } = windowSlice.actions;

export default windowSlice.reducer;
