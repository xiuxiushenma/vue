<template>
    <div>
        老爷爷给的钱：{{value}}元
        <!-- 
            // 通过调用父亲上的事件来修改爷爷的数据
            this.$parent.$emit('setMoney',
        -->
        <div>
            <button @click='changeRootData'>还了老爷爷的债</button>
        </div> 
    </div>
</template>
<script>
export default {
    // 怎么获取lmz这个属性呢this.$options.lmz
    lmz:'lmz',
    props: {
        value: {
            default: 1,
            type: Number
        }
    },
    methods: {
        changeRootData() {
            // this.$parent.$emit('setMoney', 888888888)
            // 向上通知，可以子啊vue原型上添加一个方法，在main.js中
            this.$dispatch('setMoney', 20000)
        }
    }
}
</script>