import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#262638",
                secondary: "#E03A50",
                accent: "#E03A50"
            }
        }
    }
}
    );
