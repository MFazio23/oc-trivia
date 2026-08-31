import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import QuestionField from "@/components/QuestionField";
import type {Question} from "@/types/Question";

interface QuestionRowProps {
    question: Question;
}

export default function QuestionRow({question}: QuestionRowProps) {
    return (
        <Stack direction="column"
               sx={{display: 'flex', alignItems: "center", justifyContent: 'center', borderTop: '1px solid #D4D4D4'}}>
            <Grid container
                  sx={{
                      width: '100%',
                      minHeight: 100,
                  }}>
                <Grid size={1} sx={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
                    <Checkbox></Checkbox>
                </Grid>
                <Grid size={11} sx={{display: 'flex', alignItems: "center", justifyContent: 'start'}}>
                    <Box sx={{display: 'flex', alignItems: "center", justifyContent: 'space-between', gap: 1}}>
                        <QuestionField value={question.clue1}/>
                        <QuestionField value={question.clue2}/>
                        <QuestionField value={question.clue3}/>
                        <QuestionField value={question.clue4}/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{width: '100%'}}>
                <Grid offset={1} size={11}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: 'space-between',
                        pb: 1,
                        pr: 2,
                    }}>
                        <Typography variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: "center"}}>
                            {question.answer}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: "center"}}>
                            {question.author}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    )
}
