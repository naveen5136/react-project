const initialState = {
    data: undefined
}
const BhotuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PUBLISH_DATA":
          return {
            ...state,
            data: action.payload,
          };
        case "RESET_PUBLISH_DATA":
          return {
            ...state,
            data: undefined,
          };
        default:
          return state;
      }
}
export default BhotuReducer