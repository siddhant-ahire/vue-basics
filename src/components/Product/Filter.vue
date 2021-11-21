<template>
    <div>
        <h1>Filters</h1>

        <select class="btn btn-secondary dropdown-toggle" name="categories" id="categories" @change="onChange">
            <option :value="category" v-for="category in categories" :key="category">{{category}}</option>
        </select>
       </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name:'Filters',
    data(){
        return{
            value:''
        }
    },
    beforeMount:function(){
        this.onload();
    },
    computed:mapState(['filters','categories']),
    methods: {
    ...mapActions(['getCategories','getProducts','setFilters']),
    onload(){
        this.getCategories();
    },
    onChange(e){
        this.setFilters({'category':e.target.value});
        this.getProducts()
    }

}

}

</script>

<style scoped>

</style>