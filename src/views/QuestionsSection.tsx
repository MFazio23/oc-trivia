import QuestionSearchFilterControls from "@/components/QuestionSearchFilterControls";
import {QuestionsGrid} from "@/views/QuestionsGrid";
import Box from "@mui/material/Box";
import {useQuestions} from "@/hooks/useQuestions";

export default function QuestionsSection() {
    const {currentPage, pagedQuestions, questionCount, searchTerm, handlePageUpdate, setSearchTerm} = useQuestions();

    const handleUpdateSearchTerm = (newTerm?: string) => {
        //TODO: add a debounce
        setSearchTerm(newTerm);
    }

    const handlePageChange = (newPage: number) => {
        handlePageUpdate(newPage);
    }

    return (
        <Box sx={{width: '100%', maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 3}}>
            <QuestionSearchFilterControls searchTerm={searchTerm} setSearchTerm={handleUpdateSearchTerm}/>
            <QuestionsGrid questions={pagedQuestions} questionCount={questionCount} currentPage={currentPage}
                           onPageChange={handlePageChange}/>
        </Box>
    )
}
