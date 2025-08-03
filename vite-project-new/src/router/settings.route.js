import FirstSettingView from "@/views/settingsPages/FirstSettingView.vue";
import SecondSettingView from "@/views/settingsPages/SecondSettingView.vue";
import ThirdSettingView from "@/views/settingsPages/ThirdSettingView.vue";
import FourthSettingView from "@/views/settingsPages/FourthSettingView.vue";
import SettingsView from "@/views/SettingsView.vue";

export default [
   {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      meta: {
        title: "settings ",
        layout: "default",
      },
      children: [
        {
          path: "first",
          name: "first",
          component: FirstSettingView,
          meta: {
            title: "First",
            tabLayout: "default",
          },
        },
        {
          path: "second",
          name: "second",
          component: SecondSettingView,
          meta: {
            title: "second",
            tabLayout: "default",
          },
        },
        {
          path: "third",
          name: "third",
          component: ThirdSettingView,
          meta: {
            title: "third",
            tabLayout: "blank",
          },
        },
        {
          path: "fourth",
          name: "fourth",
          component: FourthSettingView,
          meta: {
            title: "fourth",
            tabLayout: "blank",
          },
        },

      ],
    },
];
