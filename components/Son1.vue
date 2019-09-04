<template>
    <div>
        老父亲给的钱：{{value}}元
        <div>
            <button @click='changeVlue'>还了老父亲的债</button>
        </div>
        <div>
            <Grandson1 :value='value'></Grandson1>
        </div>
    </div>
</template>
<script>
import Grandson1 from './Grandson1'

export default {
    components: {
        Grandson1
    },
    props: {
        value: {
            default: 1,
            type: Number
        }
    },
    methods: {
        changeVlue() {
            // this.$emit('setMoney', 1000000)

            // 注意这里的update是规定死的
            this.$emit('update:value', 1000000)
        }
    }
}
</script>