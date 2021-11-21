<template>
    <div>
        <div class="row">
            <div class="col">
                <button class="btn btn-success btn-lg mb-3" type="warning" @click="calculate">=</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input class="form-control" type="number" :value="visibleValue" @change="onKeyup"/>
            </div>
            <div class="col"  :span="4">
                <button type="button" class="btn btn-warning btn-lg" @click="clear" >AC</button>
            </div>
            <div class="col text-align-center">Result: <span class="input-group-text ">{{ result }}</span></div>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
    name: 'Calculator',
    computed: mapState([
    'visibleValue',
    'result'
    ]),

    methods: {
        ...mapActions(['clear','setOperandValue','calculate',]),
        onKeyup(event) {
            let value = event.target.value
            this.setOperandValue(value)
                }
            }
}
</script>

<style scoped>

</style>