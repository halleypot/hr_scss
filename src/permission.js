import router from "@/router";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.needLogin) {
    const token = store.state.user.token;
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});
