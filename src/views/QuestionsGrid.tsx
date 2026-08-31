import Paper from "@mui/material/Paper";
import QuestionPageControls from "@/components/QuestionPageControls";
import QuestionRow from "@/components/QuestionRow";
import Box from "@mui/material/Box";
import type {Question} from "@/types/Question";

interface QuestionsGridProps {
    questions?: Question[];
    questionCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export function QuestionsGrid({questions, questionCount, currentPage, onPageChange}: QuestionsGridProps) {
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    return (
        <Paper elevation={0} sx={{width: '100%', border: '1px solid #D4D4D4'}}>
            <Box sx={{height: 44}}></Box>
            {questions?.slice(0, 4).map((question) => (
                <QuestionRow key={question.id} question={question}/>
            ))}
            <QuestionPageControls questionCount={questionCount} currentPage={currentPage}
                                  onPageChange={handlePageChange}/>
        </Paper>
    )
}
