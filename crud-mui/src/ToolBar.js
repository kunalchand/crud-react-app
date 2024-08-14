import { Box } from "@mui/material";
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";

function ToolBar({ filterText, onFilterTextChange, onAdd }) {
  return (
    <Box my={3} display="flex" justifyContent="space-between">
      <SearchBar
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
      <AddButton onAdd={onAdd} />
    </Box>
  );
}

export default ToolBar;
