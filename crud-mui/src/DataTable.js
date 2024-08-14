import { useState } from "react";
import Table from "./Table";
import ToolBar from "./ToolBar";
import initialData from "./initialData.json";

function DataTable() {
  const [data, setData] = useState(initialData);
  const [filterText, setFilterText] = useState("");
  const [newRow, setNewRow] = useState(null);

  function handleSave({ id, name, age }) {
    if (id === "new") {
      const maxId = Math.max(...data.map((item) => item.id));
      const newId = maxId + 1;
      setData([...data, { id: newId, name, age }]);
      setNewRow(null);
    } else {
      const updatedData = data.map((item) =>
        item.id === id ? { id, name, age } : item
      );
      setData(updatedData);
    }
  }

  function handleDelete(id) {
    if (id === "new") {
      setNewRow(null);
    } else {
      const filteredData = data.filter((item) => item.id !== id);
      setData(filteredData);
    }
  }

  function handleAdd() {
    setNewRow({ id: "new", name: "", age: "" });
  }

  return (
    <div>
      <ToolBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        onAdd={handleAdd}
      />
      <Table
        data={data}
        filterText={filterText}
        onSave={handleSave}
        onDelete={handleDelete}
        newRow={newRow}
      />
    </div>
  );
}

export default DataTable;
