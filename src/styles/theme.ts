import {extendTheme} from "@chakra-ui/react";


export const theme = extendTheme({
    colors: {
        lightPrimary: '#EDE4FF',
        darkPrimary: '#A076F9',
    },
    dark: {
        50: "#212224",
        100: "#212224",
        150: "#212224",
        200: "#212224",
        250: "#212224",
        300: "#212224",
        350: "#212224",
        400: "#212224",
        450: "#212224",
        550: "#212224",
        650: "#212224",
        500: "#212224",
        750: "#212224",
        600: "#212224",
        850: "#212224",
        950: "#212224",
        700: "#212224",
        800: "#212224",
        900: "#212224",

        // Add more color values here as needed
    },
})

export const currentColor = (colorMode: string) => {
    return colorMode === 'dark' ? "#D7BBF5" : "#A076F9"
}

export const currentBackgroundColor = (colorMode: string) => {
    return colorMode === 'dark' ? "#212224" : "#fff"
}
