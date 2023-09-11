import "./App.css";
import React, { useState } from "react";
import TodoLsit from "./components/TodoList/TodoLsit";
import Header from "./components/Header/Header";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoLsit filter={filter} />
    </>
  );
}

export default App;
