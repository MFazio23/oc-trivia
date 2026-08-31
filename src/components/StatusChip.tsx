import Chip from "@mui/material/Chip";
import CircleIcon from "@mui/icons-material/Circle";


export default function StatusChip() {
    return (
        <Chip size="small"
              icon={
                  <CircleIcon color="success" sx={{fontSize: '10px !important'}}/>
              }
              label={"High"}
              color="info"
        />
    )
}
