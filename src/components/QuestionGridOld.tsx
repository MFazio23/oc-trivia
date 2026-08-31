import Box from "@mui/material/Box";
import {DataGrid, type GridColDef, type GridRenderEditCellParams, useGridApiContext} from "@mui/x-data-grid";
import type {Question} from "@/types/Question";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import type {ChangeEvent} from "react";

function MultilineEditCell(props: GridRenderEditCellParams) {
    const {id, value, field, hasFocus} = props;
    const apiRef = useGridApiContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        apiRef.current.setEditCellValue({id, field, value: event.target.value});
    };

    return (
        <InputBase
            multiline
            fullWidth
            autoFocus={hasFocus}
            value={value ?? ''}
            onChange={handleChange}
            sx={{
                p: 1,
                fontSize: 'inherit',
                alignItems: 'flex-start',
                width: '100%',
            }}
        />
    );
}

const columns: GridColDef<Question>[] = [
    {field: 'clue1', headerName: "Clue 1", width: 150, editable: true},
    {field: 'clue2', headerName: "Clue 2", width: 150, editable: true,},
    {field: 'clue3', headerName: "Clue 3", width: 150, editable: true},
    {field: 'clue4', headerName: "Clue 4", width: 150, editable: true},
    {field: 'answer', headerName: "Answer", width: 150, editable: true},
    {field: 'setter', headerName: "Setter", width: 150, editable: true},
    {field: 'date', headerName: "Date", width: 50, editable: true},
    {
        field: 'notes', headerName: "Notes", width: 150, editable: true,
        renderEditCell: (params) => <MultilineEditCell {...params} />,
    },
    {field: 'dateUsed', headerName: "Date Used", width: 50, editable: true},
]

const testData: Question[] = [
    {
        id: '1',
        "clue1": "MONTEREY'S COAST",
        "clue2": "MY SOCRATES NOTE",
        "clue3": "SETEC ASTRONOMY",
        "clue4": "TOO MANY SECRETS",
        "answer": "Anagrams from Sneakers (1992)",
        "setter": "",
        "date": 0,
        "notes": "",
        "dateUsed": 0
    },
    {
        id: '2',
        "clue1": "Ted Healy",
        "clue2": "Justin Long",
        "clue3": "Dean Martin",
        "clue4": "Bud Abbott",
        "answer": "Straight Men in comedy duos/groups",
        "setter": "",
        "date": 0,
        "notes": "Ted Healy was the original straight man for the Three Stooges. Justin Long from the \"Hello, I'm a Mac\" ads",
        "dateUsed": 0
    },
    {
        id: '3',
        "clue1": "Goodfellow Dry Goods",
        "clue2": "Cadabra",
        "clue3": "Blue Ribbon Sports",
        "clue4": "Twitter",
        "answer": "Famous rebrands",
        "setter": "",
        "date": 0,
        "notes": "Target, Amazon, Nike, X",
        "dateUsed": 0
    },
    {
        id: '4',
        "clue1": "Kongen befaler",
        "clue2": "Le maître du jeu",
        "clue3": "Stormester",
        "clue4": "[REDACTED] New Zealand",
        "answer": "International versions of Taskmaster",
        "setter": "",
        "date": 0,
        "notes": "Norway, Canada, Denmark, NZ",
        "dateUsed": 0
    },
    {
        id: '5',
        "clue1": "Poe",
        "clue2": "Cod",
        "clue3": "Wow",
        "clue4": "FF14",
        "answer": "Gaming franchise abbreviations",
        "setter": "",
        "date": 0,
        "notes": "Path of Exile, Call of Duty, World of Warcraft, Final Fantasy 14",
        "dateUsed": 0
    }
]

export default function QuestionGridOld() {
    return (
        <Box>
            <DataGrid
                rows={testData}
                columns={columns}
                getRowHeight={() => 'auto'}
                getEstimatedRowHeight={() => 100}
                autosizeOnMount={true}
                sx={{
                    '& .MuiDataGrid-cell': {
                        py: 1, // Add vertical padding (8px)
                    },
                }}
            />
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Clues</TableCell>
                            <TableCell>Answer</TableCell>
                            <TableCell align="right">Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {testData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell scope="row">
                                    <Box>
                                        <Stack>
                                            <Typography variant="body1">{row.clue1}</Typography>
                                            <Typography variant="body1">{row.clue2}</Typography>
                                            <Typography variant="body1">{row.clue3}</Typography>
                                            <Typography variant="body1">{row.clue4}</Typography>
                                        </Stack>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        <Stack>
                                            <Typography variant="body1">{row.answer}</Typography>
                                        </Stack>

                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <Box>
                                        <Stack>
                                            <Typography variant="body1">{row.notes}</Typography>
                                        </Stack>

                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
