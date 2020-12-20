import createDataContex from "./createDataContext";

const LocationReducer = () => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};

const stopRecording = (dispatch) => () => {};

const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Context, Provider } = createDataContex(
  LocationReducer,
  { startRecording, stopRecording, addLocation },
  {
    recording: false,
    locations: [],
    currentLocation: null,
  }
);
