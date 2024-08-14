import {
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Row from "./Row";

function Table({ data, filterText, onSave, onDelete, newRow }) {
  const rows = data
    .filter((row) => row.name.toLowerCase().includes(filterText.toLowerCase()))
    .map((row) => (
      <Row row={row} key={row.id} onSave={onSave} onDelete={onDelete} />
    ));

  if (newRow) {
    rows.push(
      <Row
        row={newRow}
        key="new"
        onSave={onSave}
        onDelete={onDelete}
        isNew={true}
      />
    );
  }

  return (
    <Paper>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </MuiTable>
    </Paper>
  );
}

export default Table;
