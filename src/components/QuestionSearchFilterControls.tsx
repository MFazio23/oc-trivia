import Box from "@mui/material/Box";
import {Button, InputAdornment, OutlinedInput, useColorScheme} from "@mui/material";
import {Search} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import {useQuestions} from "@/hooks/useQuestions";

interface QuestionSearchFilterControlsProps {
    searchTerm?: string;
    setSearchTerm: (term?: string) => void;
}

export default function QuestionSearchFilterControls({searchTerm, setSearchTerm}: QuestionSearchFilterControlsProps) {
    const {mode} = useColorScheme();
    const {addQuestion} = useQuestions();

    const createTestQuestion = async () => {
        await addQuestion({
            clue1: crypto.randomUUID(),
            clue2: crypto.randomUUID(),
            clue3: crypto.randomUUID(),
            clue4: crypto.randomUUID(),
            answer: crypto.randomUUID(),
            setter: crypto.randomUUID(),
            date: new Date(),
            notes: crypto.randomUUID(),
            dateUsed: new Date(),
        })
    }

    return <Paper
        elevation={0}
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor: mode === 'dark' ? '#333' : '#FAFAFA',
            px: 2,
            py: 1
        }}>
        <OutlinedInput
            id="search"
            type="search"
            size="small"
            placeholder="Search for puzzles"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
                bgcolor: mode === 'dark' ? '#444' : '#FFF',
                pr: 10
            }}
            startAdornment={
                <InputAdornment position="start">
                    <Search/>
                </InputAdornment>
            }
        />

        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={createTestQuestion}>Create test question</Button>
        </Box>
    </Paper>
}
