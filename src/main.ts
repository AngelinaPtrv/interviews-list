import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'

import Menubar from 'primevue/menubar'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'

import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyDoIPOekRX4GGEWKn7ArjL4SvEB834swdA',
  authDomain: 'interviews-e0d13.firebaseapp.com',
  projectId: 'interviews-e0d13',
  storageBucket: 'interviews-e0d13.appspot.com',
  messagingSenderId: '841407230993',
  appId: '1:841407230993:web:e26787eaf6aed0b2ffadb0'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false
    }
  }
})
app.directive('tooltip', Tooltip)
app.component('app-menubar', Menubar)
app.component('app-toast', Toast)
app.component('app-input-text', InputText)
app.component('app-button', Button)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-data-table', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', DatePicker)
app.component('app-radio', RadioButton)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
