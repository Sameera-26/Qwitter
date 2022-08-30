const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    // By adding name property, we can access it anywhere using "$"
    children: [
      {
        path: "",
        component: () => import("src/pages/PageHome.vue"),
        name: "Home",
      },
      {
        path: "/about",
        component: () => import("src/pages/PageAbout.vue"),
        name: "About",
      },
      {
        path: "/explore",
        component: () => import("src/pages/PageExplore.vue"),
        name: "Explore",
      },
      {
        path: "/bookmark",
        component: () => import("src/pages/PageBookmark.vue"),
        name: "Bookmark",
      },
      {
        path: "/notifications",
        component: () => import("src/pages/PageNotification.vue"),
        name: "Notifications",
      },
      {
        path: "/profile",
        component: () => import("src/pages/PageProfile.vue"),
        name: "Profile",
      },
      {
        path: "/messages",
        component: () => import("src/pages/PageMessages.vue"),
        name: "Messages",
      },
      {
        path: "/list",
        component: () => import("src/pages/PageList.vue"),
        name: "List",
      },
      {
        path: "/haider",
        component: () => import("src/pages/PageHaider.vue"),
        name: "Haider",
      },
      {
        path: "/babar",
        component: () => import("src/pages/PageBabar.vue"),
        name: "Babar",
      },
      {
        path: "/sasha",
        component: () => import("src/pages/PageSasha.vue"),
        name: "Sasha",
      },
      {
        path: "/dahani",
        component: () => import("src/pages/PageDahani.vue"),
        name: "Dahani",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
