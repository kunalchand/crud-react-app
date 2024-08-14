import { TextField } from "@mui/material";

function AddButton({ filterText, onFilterTextChange }) {
  return (
    <TextField
      variant="outlined"
      size="small"
      label="Search"
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)}
    />
  );
}

export default AddButton;
