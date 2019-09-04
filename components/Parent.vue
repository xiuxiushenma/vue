<template>
    <div>
        <Son1 :value='money' @setMoney="setValue"></Son1>
        <!--
            注意下面这种写法：
                这么写成行内函数
                下面两种写法是一致的，第二种是第一种的语法糖
                注意updata是vue固定的写法
            语法糖格式： 用在父组件   :传给子组件的props参数名称.sync='父组件中要同步的data'
                                  :value.sync='money' 
        -->
        <!-- <Son1 :value='money' @update:value="(value)=>this.money=value"></Son1> -->
        <!-- <Son1 :value.sync='money' ></Son1> -->
    </div>
</template>
<script>
import Son1 from './Son1'
export default {
    components: {
        Son1
    },
    data() {
        return {
            money: 1000
        }
    },
    methods: {
        setValue(money) {
            this.money = money
        }
    }
}
</script>