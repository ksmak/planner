import { configureStore } from "@reduxjs/toolkit";
import plannerSlice from "../slices/plannerSlice";

export default configureStore({
    reducer: {
        planner: plannerSlice,
    },
});