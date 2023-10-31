import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /* 
    *these are state slices/pieces

    *there are other way of storing the entered title as well, but
    here we're using state. this makes sure that, no matter what, even
    if this function gets re-executed, the enteredtitle var stays
    consistent 


    *these don't have to be state slices, you can have just 1 state, which
    stores an object of the title, date and amount input values like this, 
    but then you'd have to pass all 3 of them to onChange and include all
    of them in any change you want to make to 1 of them:
    
    const [entededInput, setEntededInput] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
    });

    below is the best way to update state that depends on a previous state.
    with some other ways, if you schedule al lot of state updates at the same
    time like we're doing here, you could be depending on the wrong previous
    state
    const titleChangeHandler = (event) => {
      setUserInput((previousState) => {
        return {...previousState, enteredTitle: event.target.value }
      });
    };
  */
  const [enteredTitle, setEnteredTitle] = useState("");
  /* 
    can use "" in useState("") because the onChange hook stored the 
    event.target.value as a string, even if it's a number
  */
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHAndler = (event) => {
    setEnteredDate(event.target.value);
  };
  */
  function inputHandler(identifier, value) {
    switch (identifier) {
      case "title":
        setEnteredTitle(value);
        break;

      case "amount":
        setEnteredAmount(value);
        break;

      case "date":
        setEnteredDate(value);
        break;
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredAmount || !enteredTitle || !enteredDate) {
      alert("Please enter a valid expense");
      return;
    }

    //constructing a data object so we can use it
    const enteredExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };git

    //passing the expensedata obj to the parent newexpense component
    props.onSaveExpenseData(enteredExpenseData);

    //to clear the input onsubmit
    clearForm();
  };

  function clearForm() {
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input
            id="expense-title"
            type="text"
            name="expense-title"
            /*
              this is 2 way binding meaning that we both listen to user
              input, but also change it. when the enteredtitle's value
              changes though setenteredtitle(), the value will be updated
              because it's set to the enteredtitle.
            */
            value={enteredTitle}
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="expense-amount">Amount</label>
          <input
            id="expense-amount"
            type="number"
            min="0.01"
            step="0.01"
            name="expense-amount"
            value={enteredAmount}
            /* 
              have to use an arrow func as a wrapper so that the
               inputhandler func doesn't get executed as soon as this
                code runs, but instead only onChange
            */
            onChange={(event) => {
              inputHandler("amount", event.target.value);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="expense-date">Date</label>
          <input
            id="expense-date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="expense-date"
            value={enteredDate}
            onChange={(event) => {
              inputHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
