import {useGoogleAuth} from "@/hooks/useGoogleAuth";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {useColorScheme} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function SignOutRow() {
    const {currentUser, signOut} = useGoogleAuth();
    const {mode, setMode} = useColorScheme();

    const handleModeClick = () => {
        setMode(
            mode ? (mode === "dark" ? "light" : "dark") : 'light'
        )
    }

    return (
        <Stack sx={{mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Stack direction="row" spacing={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="body2" sx={{mt: 2}}>Currently signed in as {currentUser?.displayName}</Typography>
                <IconButton onClick={handleModeClick}>{mode === 'dark' ? <LightMode/> : <DarkMode/>}</IconButton>
            </Stack>
            <Button variant="text" onClick={signOut} sx={{mt: 1, px: 2, width: 'fit-content'}}>Sign out</Button>
        </Stack>
    )
}
