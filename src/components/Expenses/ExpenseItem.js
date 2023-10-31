import { useState } from "react"; //importing a useState() function from "react"
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

/* 
  it doesn't matter whether we return a normal function or use a const with an arrow 
  function
*/
const ExpenseItem = (props) => {
  /* 
    Using array destructuring. useState() returns the title variable and a setTitle() function.
    props.title is the initial value for title.
    all instances of this component have seperate states (so state is on a per component instance basis), therefore, if we change the state fo one, it won't affect the others
  
    we can use the const keyword even though the state changes because we use setTitle(), 
    not title="sm" (which would fail). When setTitle() is called, React re-executes the
    ExpenseItem func, fetching the updated title value from react

    you'd think the props.title would override the title's new value, but it doesn't because
    react only sets the initial value when this expenseitem func is 1st executed

    *const [title, setTitle] = useState(props.title);
   */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
