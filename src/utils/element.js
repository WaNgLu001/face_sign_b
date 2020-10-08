/*
 * @Author: your name
 * @Date: 2020-10-05 10:24:06
 * @LastEditTime: 2020-10-08 17:12:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\utils\element.js
 */
import Vue from 'vue'
import {
    Button,
    Input,
    Form,
    FormItem,
    Message,
    Container,
    Header,
    Main,
    Aside,
    Footer,
    Menu,
    MenuItem
} from 'element-ui'

Vue.prototype.$message = Message
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)