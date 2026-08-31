import './App.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useGoogleAuth} from "@/hooks/useGoogleAuth";
import QuestionsSection from "@/views/QuestionsSection";
import SignInCard from "@/components/SignInCard";
import SignOutRow from "@/components/SignOutRow";


function App() {
    const {currentUser} = useGoogleAuth();

    return (
        <>
            <section id="center">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant="h2">COQL</Typography>
                    <Typography variant="h4">Question Entry</Typography>
                    {currentUser ? <QuestionsSection/> : null}
                    {currentUser ? <SignOutRow/> : <SignInCard sx={{mt: 2}}/>}
                </Box>
            </section>
        </>
    )
}

export default App
