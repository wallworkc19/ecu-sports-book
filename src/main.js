import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import AmplifyVue from '@aws-amplify/ui-vue';

Amplify.configure(awsExports);





loadFonts()

createApp(App)
  .use(AmplifyVue)
  .use(router)
  .use(vuetify)
  .mount('#app')
