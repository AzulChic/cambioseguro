import '../src/assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDo6COAASZuyGVEwILN3gBooJqRJ6p0IAk",
  authDomain: "exchangeratecs.firebaseapp.com",
  projectId: "exchangeratecs",
  storageBucket: "exchangeratecs.appspot.com",
  messagingSenderId: "391759386229",
  appId: "1:391759386229:web:3c4d332a4bceb4756b4a3c"
})

const app = createApp(App)
const db = getFirestore(firebaseApp)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(createPinia())

app.config.globalProperties.$db = db
app.mount('#app')
