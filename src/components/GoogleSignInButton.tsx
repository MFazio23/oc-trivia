import GoogleSignInIcon from "@/assets/google-sign-in-button.svg";
import {ButtonBase} from "@mui/material";

export default function GoogleSignInButton({onClick}: { onClick: () => void }) {
    return (
        <ButtonBase
            onClick={onClick}
            focusRipple
            sx={{
                borderRadius: 1,
                overflow: 'hidden',
                display: 'inline-block',
                transition: 'filter 0.15s ease, transform 0.1s ease',
                '&:hover': {filter: 'brightness(0.95)'},
                '&:active': {transform: 'scale(0.98)'},
            }}
        >
            <img
                src={GoogleSignInIcon}
                alt="Sign in with Google"
                style={{display: 'block', height: 'auto', pointerEvents: 'none'}}
            />
        </ButtonBase>
    )
}
