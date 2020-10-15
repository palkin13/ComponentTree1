import React from "react";

// TO DISAPPEAR / DELETE THE ITEM BY CLICKING ON IT

function TodoItem(props) {
    return (
      // EXECUTED ON RENDER
      // <div onClick={props.onChecked(props.id)}>
      // EXECUTED ON CLICK
      <div onClick = { ( ) => {
        props.onChecked(props.id)
      }}>
        <li>
          {props.text}
        </li>
      </div>
    );
  }
export default TodoItem;

// BY CLICKING ON ITEM LINE-THROUGH SHOULD COME AND ON CLICKING AGAIN IT SHOULD DISAPPEAR
// function TodoItem(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone(prevValue => {
//       return !prevValue;
//     });
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecorationLine: isDone ? "line-through" : "none" }}>
//         {props.text}
//       </li>
//     </div>
//   );
// }