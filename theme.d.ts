import '@mui/material/styles'
import '@mui/material/Button'

declare module '@mui/material/styles' {
    interface Palette {
        black: Palette['primary'];
        white: Palette['primary'];
    }

    interface PaletteOptions {
        black?: PaletteOptions['primary'];
        white?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        black: true;
        white: true;
    }
}
