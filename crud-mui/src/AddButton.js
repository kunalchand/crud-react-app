import { Button } from "@mui/material";

function AddButton({ onAdd }) {
  return (
    <Button variant="contained" color="primary" onClick={onAdd}>
      Add New Item
    </Button>
  );
}

export default AddButton;
