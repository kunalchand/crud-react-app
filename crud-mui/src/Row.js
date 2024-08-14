import { Box, Button, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";

function Row({ row, onSave, onDelete, isNew = false }) {
  const [isEditMode, setIsEditMode] = useState(isNew);
  const [editedName, setEditedName] = useState(row.name);
  const [editedAge, setEditedAge] = useState(row.age);

  return (
    <TableRow>
      <TableCell>{isNew ? "New" : row.id}</TableCell>
      <TableCell>
        {isEditMode ? (
          <TextField
            variant="outlined"
            size="small"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          row.name
        )}
      </TableCell>
      <TableCell>
        {isEditMode ? (
          <TextField
            variant="outlined"
            size="small"
            type="number"
            value={editedAge}
            onChange={(e) => setEditedAge(e.target.value)}
          />
        ) : (
          row.age
        )}
      </TableCell>
      <TableCell>
        {isEditMode ? (
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onSave({ ...row, name: editedName, age: editedAge });
                if (!isNew) setIsEditMode(false);
              }}
            >
              Save
            </Button>
          </Box>
        ) : (
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              onClick={() => {
                setEditedName(row.name);
                setEditedAge(row.age);
                setIsEditMode(true);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onDelete(row.id)}
            >
              Delete
            </Button>
          </Box>
        )}
      </TableCell>
    </TableRow>
  );
}

export default Row;
