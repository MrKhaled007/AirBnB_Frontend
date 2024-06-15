import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/Login.vue";
import CampBooking from "./components/CampBooking.vue";
import MyBookings from "./components/MyBookings.vue";
import IntMap from "./components/IntMap.vue";
import MyProfile from "./components/MyProfile.vue";
import AdminPage from "./components/AdminPage.vue";
import DeleteCampSpot from "./components/DeleteCampSpot.vue";
import UserInfo from "./components/UserInfo.vue";
import CampInfo from "./components/CampInfo.vue";
import AdminLogin from "./components/AdminLogin.vue";
const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "LogIn",
        component: LogIn,
        path: "/logIn",
    },
    {
        path: '/camp-booking/:campId',
        name: 'CampBooking',
        component: CampBooking
    },
    {
        path: '/MyBookings',
        name: 'MyBookings',
        component: MyBookings
    },
    {
        path: '/map',
        name: 'IntMap',
        component: IntMap
    },
    {
        path: '/myprofile',
        name: 'MyProfile',
        component: MyProfile
    },
    {
        path: '/admin',
        name: 'AdminPage',
        component: AdminPage
    },
    {
        path: '/delete',
        name: 'DeleteCampSpot',
        component: DeleteCampSpot
    },
    {
        path: '/userinfo',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path: '/campinfo',
        name: 'CampInfo',
        component: CampInfo
    },
    {
        path: '/adminlogin',
        name: 'AdminLogin',
        component: AdminLogin
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;