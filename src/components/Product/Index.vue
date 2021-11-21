<template>
    <div>
        <h1>Search Products</h1>
        <div class="row">
            <div class="col">
                <Product/>
            </div>
            <div class="col">
                <Filters/>
            </div>
        </div>
    </div>
</template>

<script>
import Filters from './Filter.vue'
import Product from './Product.vue'

export default {
    name:'Index',
    components: {
        Filters,
        Product
    }
}

</script>

<style scoped>

</style>