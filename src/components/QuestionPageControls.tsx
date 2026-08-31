import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {COQLButton} from "@/components/COQLButton";
import type {ChangeEvent} from "react";

interface QuestionPageControlsProps {
    questionCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function QuestionPageControls({questionCount, currentPage, onPageChange}: QuestionPageControlsProps) {

    const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
        onPageChange(page);
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #D4D4D4',
            px: 3,
            py: 2
        }}>
            <COQLButton variant="outlined" startIcon={<ArrowBack/>}
                        onClick={() => onPageChange(currentPage - 1)}>Previous</COQLButton>
            <Pagination shape="rounded" hidePrevButton hideNextButton
                        count={Math.ceil(questionCount / 4)} page={currentPage} onChange={handlePageChange}/>
            <COQLButton variant="outlined" endIcon={<ArrowForward/>}
                        onClick={() => onPageChange(currentPage + 1)}>Next</COQLButton>
        </Box>
    )
}
