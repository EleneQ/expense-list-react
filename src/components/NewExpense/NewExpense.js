import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    //passing the expensedata to the app component
    props.onAddExpense(expenseData);
  };

  /* 
    the onSaveExpenseData is being executed in the ExpenseForm 
    componenet so that we can get the new expense data from it
  */
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
