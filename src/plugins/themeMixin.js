// src/mixins/themeMixin.js
export default {
  methods: {
    getHeaderColor() {
      const theme = this.$vuetify.theme.current;
      return theme.colors.header;
    },
    getHeroColor() {
      const theme = this.$vuetify.theme.current;
      return theme.colors.hero;
    },
    getContrastColor() {
      const theme = this.$vuetify.theme.current;
      return theme.colors.contrast;
    },
    getBackgroundColor() {
      const theme = this.$vuetify.theme.current;
      return theme.colors.primary;
    },
    getTextColor() {
      const theme = this.$vuetify.theme.current;
      console.log("theme.colors.text: ", theme.colors.text);
      return theme.colors.text;
    },
  },
};
