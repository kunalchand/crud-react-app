import { TextField } from "@mui/material";

function SearchBar({ filterText, onFilterTextChange }) {
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

export default SearchBar;
