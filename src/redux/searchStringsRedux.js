const createActionName = actionName => `app/searchStrings/${actionName}`;
const UPDATE_SEARCH_STRING = createActionName('UPDATE_SEARCH_STRING');

export const updateSearchString = payload => ({type: UPDATE_SEARCH_STRING, payload})
const searchStringsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringsReducer;