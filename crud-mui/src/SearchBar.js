import { Button } from "@mui/material";

function SearchBar({ onAdd }) {
  return (
    <Button variant="contained" color="primary" onClick={onAdd}>
      Add New Item
    </Button>
  );
}

export default SearchBar;
