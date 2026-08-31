import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";

export interface QuestionFieldProps {
    value: string;
}

const QuestionFieldInput = styled(TextField)({

    '& .MuiInputBase-root': {
        padding: 8
    },
    '& .MuiInputBase-input': {
        textAlign: 'center',
    }
})

export default function QuestionField({value}: QuestionFieldProps) {
    return (
        <QuestionFieldInput multiline rows={3} value={value}/>
        // rows={3} multiline fullWidth value={value}/>
    )
}
