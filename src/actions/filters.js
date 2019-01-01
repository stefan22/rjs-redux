export const setTextFilter = ({text=''}={}) => ({
  type: 'SET_TEXT',
  text,
});

export const setSortByAmount = ({sortBy=''}) => ({
  type: 'SORT_BY_AMOUNT',
  sortBy,
});

export const setSortByDate = ({sortBy=''}) => ({
  type: 'SORT_BY_DATE',
  sortBy,
});


export const setStartDate = ({startDate=undefined}={}) => ({
  type: 'START_DATE',
  startDate,
});

export const setEndDate = ({endDate=undefined}={}) => ({
  type: 'END_DATE',
  endDate
});
