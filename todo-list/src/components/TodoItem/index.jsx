import "./style.css";

function TodoItem(props) {
  return (
    <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
      {props.todo.text}
      <div>
        <button onClick={() => props.completeTodo(props.index)}>
          {props.todo.isCompleted ? "Completed" : "Incomplete"}
        </button>
        <button onClick={() => props.removeTodo(props.index)}>x</button>
      </div>
    </div>
  );
}
export default TodoItem;
