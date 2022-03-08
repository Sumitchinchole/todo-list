const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.payload.id);

      return {
        ...state,
        list: newList
      };

    default:
      return state;
  }
};

export default todoReducers;
