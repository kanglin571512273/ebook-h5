import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Personal from "@/components/Personal";
import category from "@/views/category";
import morebook from "@/views/morebook";
import nowmorebook from "@/views/nowmorebook";
import bookdetails from "@/views/bookdetails";
import helpCenter from "@/views/helpCenter";
import personalData from "@/views/personalData";
import Address from "@/views/address";
import EditAds from "@/views/editAds";
import Order from "@/views/order";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/personal",
      name: "Personal",
      component: Personal
    },
    {
      path: "/category",
      name: "category",
      component: category
    },
    {
      path: "/morebook",
      name: "morebook",
      component: morebook
    },
    {
      path: "/nowmorebook",
      name: "nowmorebook",
      component: nowmorebook
    },
    {
      path: "/bookdetails",
      name: "bookdetails",
      component: bookdetails
    },
    {
      path: "/helpCenter",
      name: "helpCenter",
      component: helpCenter
    },
    {
      path: "/personalData",
      name: "personalData",
      component: personalData
    },
    {
      path: "/address",
      name: "Address",
      component: Address
    },
    {
      path: "/editAds",
      name: "EditAds",
      component: EditAds
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    }
  ]
});
