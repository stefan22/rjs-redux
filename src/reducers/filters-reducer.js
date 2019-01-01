//filtersDefault
const filtersDefault = {
  text: '',   //SET_TEXT
  sortBy: '', //SORT_BY_AMOUNT
  startDate: undefined, //SET_START_DATE
  endDate: undefined, //SET_END_DATE
  createdAt:0
};

const FiltersReducer = (state=filtersDefault,action) => {
  switch (action.type) {
    case 'SET_TEXT':
     return {
       ...state,
       text: action.text
     }
    case 'SET_END_DATE':
     return state;

    case 'SET_START_DATE':
     return state;

    case 'SORT_BY_AMOUNT':
     return {
       ...state,
       sortBy: action.sortBy
     }

    case 'START_DATE':
     return {
       ...state,
       startDate: action.startDate
     }

    case 'END_DATE':
     return {
       ...state,
       endDate: action.endDate
     }

    default:
      return state;
  }
};


export default FiltersReducer;
