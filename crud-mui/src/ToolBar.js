import { Box } from "@mui/material";
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";

function ToolBar({ filterText, onFilterTextChange, onAdd }) {
  return (
    <Box my={3} display="flex" justifyContent="space-between">
      <AddButton
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
      <SearchBar onAdd={onAdd} />
    </Box>
  );
}

export default ToolBar;
