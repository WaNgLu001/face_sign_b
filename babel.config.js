/*
 * @Author: your name
 * @Date: 2020-09-16 17:24:43
 * @LastEditTime: 2020-10-05 10:23:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test\babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};