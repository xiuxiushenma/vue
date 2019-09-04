// npm i @vue/cli-service-gloabl -g 直接可以
// vue serve
// an


import Vue from 'vue';
import App from './App';

// 向上通知：
// 深层嵌套的组件想要修改root的数据，通过派发dispatch
Vue.prototype.$dispatch = function(eventName, value) {
        let parent = this.$parent;
        // 不好的地方就是如果不同的父组件有同名的eventName就不好精准派发了，就得加条件区别对待
        while (parent) {
            parent.$emit(eventName, value);
            parent = parent.$parent
        }
    }
    // 调用这么调用
    // this.$dispatch('setMoney', 20000)


const vm = new Vue({
    el: '#app',
    render: h => h(App)
})

console.log(vm);


// 构建 组件件通信