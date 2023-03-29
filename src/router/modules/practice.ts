export default {
  path: "/practice",
  redirect: "/practice/index",
  meta: {
    icon: "informationLine",
    title: "练习合集",
    rank: 3
  },
  children: [
    {
      path: "/my-dialog",
      name: "MyDialog",
      component: () => import("@/views/practice/MyDialog/index.vue"),
      meta: {
        title: "对话框"
      }
    },
    {
      path: "/my-drawer",
      name: "MyDrawer",
      component: () => import("@/views/practice/MyDrawer/index.vue"),
      meta: {
        title: "抽屉"
      }
    },
    {
      path: "/my-editor",
      name: "MyEditor",
      component: () => import("@/views/practice/MyEditor/index.vue"),
      meta: {
        title: "编辑器"
      }
    }
  ]
} as RouteConfigsTable;
