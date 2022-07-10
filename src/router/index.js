import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LocationPage from '../pages/LocationPage';
import Catalog from '../pages/Catalog';
import Mortgage from '../pages/Mortgage';
import Contacts from '../pages/Contacts';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/location',
        component: LocationPage,
    },
    {
        path: '/catalog',
        component: Catalog,
    },
    {
        path: '/mortgage',
        component: Mortgage,
    },
    {
        path: '/contacts',
        component: Contacts,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
