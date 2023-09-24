import {extendTheme} from "@chakra-ui/react";
import {ButtonStyles as Button} from './components/buttonStyles.ts'

export const theme = extendTheme({
    colors: {
        lightPrimary: '#EDE4FF',
        darkPrimary: '#A076F9',
    },

    components: {
        Button,
    }

})