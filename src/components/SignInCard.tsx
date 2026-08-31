import {Box, Button, Card, CardContent, type SxProps, type Theme, Typography} from "@mui/material";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import {useGoogleAuth} from "@/hooks/useGoogleAuth";

interface SignInCardProps {
    sx?: SxProps<Theme> | undefined
}

export default function SignInCard({sx}: SignInCardProps) {

    const {currentUser, signIn, signOut} = useGoogleAuth();

    return (
        <Card sx={{width: '100%', maxWidth: 300, ...sx}}>
            <CardContent>
                {currentUser ?
                    (
                        <Box>
                            <Typography variant="body1">Signed in as {currentUser.displayName}</Typography>
                            <Button sx={{mt: 1}} variant="outlined" onClick={signOut}>Sign Out</Button>
                        </Box>
                    ) :
                    (
                        <Box>
                            <Typography variant="body1" sx={{mb: 1}}>Please sign in below</Typography>
                            <GoogleSignInButton onClick={signIn}/>
                        </Box>
                    )
                }
            </CardContent>
        </Card>
    )
}
