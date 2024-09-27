

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Index from './pages/index.vue'
import AddListing from './pages/add-listing.vue'
import ListingPage from './pages/listing-page.vue'






const routes = [
    {path: '/', component: Index},
    {path: '/add-listing', component: AddListing},
    {path: '/listing-page', component: ListingPage},
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')

