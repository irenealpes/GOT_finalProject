import Home from "./components/Home.vue";
import Books from "./components/Books.vue";
import NotFound from "./components/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/books/:id", name: "books", component: Books, props: true },
  { path: "/:path(.*)", component: NotFound },
];
