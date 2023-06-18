// export const css = {
//   loaderOptions: {
//     sass: {
//       preventData: `@import "@/assets/styles/styles.sass";`,
//     },
//   },
// };

module.exports = {
  // настройки...
  css: {
    loaderOptions: {
      sass: {
        prepentData: `@import "@/assets/styles/styles.sass";`,
      },
    },
  },
};
