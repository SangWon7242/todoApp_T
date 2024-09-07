import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  return (
    <>
      <h1>새 할일</h1>
      &nbsp;
      <input
        type="text"
        placeholder="새 할일을 입력해주세요."
        value={newTodoTitle}
        onSubmit={(e) => setNewTodoTitle(e.target.value)}
      />
      &nbsp;
      <button onClick={() => setNewTodoTitle("11")}>할 일 추가</button>
      <nav>
        <ul>
          <li>할 일 목록</li>
        </ul>
      </nav>
    </>
  );
}

export default App;
