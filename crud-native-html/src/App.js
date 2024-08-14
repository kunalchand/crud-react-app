import { useState } from "react";

function DataTable() {
  const initialData = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 45 },
    { id: 4, name: "Bob Brown", age: 23 },
    { id: 5, name: "Charlie Black", age: 30 },
  ];

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
      <AddAndSearch
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

function AddAndSearch({ filterText, onFilterTextChange, onAdd }) {
  return (
    <>
      <br />
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <br />
      <button onClick={onAdd}>Add New Item</button>
      <br />
      <br />
    </>
  );
}

function Table({ data, filterText, onSave, onDelete, newRow }) {
  const rows = [];

  data.forEach((row) => {
    if (row.name.toLowerCase().includes(filterText.toLowerCase())) {
      rows.push(
        <TableRow row={row} key={row.id} onSave={onSave} onDelete={onDelete} />
      );
    }
  });

  if (newRow) {
    rows.push(
      <TableRow
        row={newRow}
        key="new"
        onSave={onSave}
        onDelete={onDelete}
        isNew={true}
      />
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function TableRow({ row, onSave, onDelete, isNew = false }) {
  const [isEditMode, setIsEditMode] = useState(isNew);
  const [editedName, setEditedName] = useState(row.name);
  const [editedAge, setEditedAge] = useState(row.age);

  return (
    <tr>
      <td>{isNew ? "New" : row.id}</td>
      <td>
        {isEditMode ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          row.name
        )}
      </td>
      <td>
        {isEditMode ? (
          <input
            type="number"
            value={editedAge}
            onChange={(e) => setEditedAge(e.target.value)}
          />
        ) : (
          row.age
        )}
      </td>
      <td>
        {isEditMode ? (
          <button
            onClick={() => {
              onSave({ ...row, name: editedName, age: editedAge });
              if (!isNew) setIsEditMode(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setEditedName(row.name);
              setEditedAge(row.age);
              setIsEditMode(true);
            }}
          >
            Edit
          </button>
        )}
        <button onClick={() => onDelete(row.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default function App() {
  return <DataTable />;
}
