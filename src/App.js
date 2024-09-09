import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [inputedTotoTitle, setInputedTotoTitle] = useState("");

  return (
    <>
      <h1>새 할일</h1>
      &nbsp;
      <input
        type="text"
        placeholder="새 할일을 입력해주세요."
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      &nbsp;
      <button
        onClick={() => {
          setNewTodoTitle("");
          setInputedTotoTitle(newTodoTitle);
        }}
      >
        할 일 추가
      </button>
      <div>
        {inputedTotoTitle === "" ? (
          <h2>할 일 등록 필요</h2>
        ) : (
          <>
            <h2>할 일 목록</h2>
            <nav>
              <ul>
                <li>{inputedTotoTitle}</li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default App;
