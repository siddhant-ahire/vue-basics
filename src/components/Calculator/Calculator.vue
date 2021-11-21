<template>
    <div>
        <div  class="row"  :gutter="10">
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(1)">1</button></div>
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(2)">2</button></div>
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(3)">3</button></div>
            <div class="col primary"><button type="button" class="btn btn-danger btn-lg" @click="add">+</button></div>
        </div>
        <div class="row"  :gutter="10">
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(4)">4</button></div>
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(5)">5</button></div>
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(6)">6</button></div>
            <div class="col primary"><button type="button" class="btn btn-danger btn-lg" @click="subtract">-</button></div>
        </div>
        <div class="row"  :gutter="10">
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(7)">7</button></div>
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(8)">8</button></div>
            <div class="col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(9)">9</button></div>
            <div class="col primary"><button type="button" class="btn btn-danger btn-lg" @click="multiply">x</button></div>
        </div>
        <div class="row"  :gutter="10">
            <div class = "col primary">&nbsp;</div>
            <div class = "col primary"><button type="button" class="btn btn-primary btn-lg mb-3" @click="appendNumber(0)">0</button></div>
            <div class = "col primary">&nbsp;</div>
            <div class = "col primary"><button type="button" class="btn btn-danger btn-lg" @click="divide">/</button></div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Calculator',

    methods: {
        ...mapActions(['appendNumber','add','setOperandValue','subtract','multiply','divide']),
        onKeyup(event) {
            let value = event.target.value
            this.setOperandValue(value)
                }
            }
}

</script>

<style scoped>

</style>