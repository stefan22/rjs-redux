 // get visible expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' ||
                      expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' ||
                      expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase()
                      .includes(text.toLowerCase());
    return textMatch && startDateMatch && endDateMatch;
  }).sort((a,b) => {
     return (a.createdAt < b.createdAt) ? 1 : -1;
  });
};


export default getVisibleExpenses;
