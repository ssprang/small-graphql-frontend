// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'


export default createVuetify(
    {
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        },
        theme: {
            defaultTheme: 'dark'
        }
    },
    // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
