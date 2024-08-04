// src/mixins/themeMixin.js
export default {
  methods: {
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
