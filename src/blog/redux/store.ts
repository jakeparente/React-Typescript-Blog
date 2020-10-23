import { createStore } from "redux";
import { reducer } from "./model";

const store = createStore(reducer);
export default store;