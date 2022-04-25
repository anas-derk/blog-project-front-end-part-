const routes = [

    {
        name: "الصفحة الرئيسية",
        path: '/',
        component: () => import("../views/Home/index.vue")
    },

    {
        name: "إنشاء حساب جديد",
        path: "/sign-up",
        component: () => import("../views/Authentication/Signup/index.vue")
    },

    {
        path: "/:catchAll(.*)",
        component: () => import("../views/PageNotFound/index.vue")
    }

]

export default routes