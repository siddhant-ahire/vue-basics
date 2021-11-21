<template>
    
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="product in products" :key="product.id">
    <div class="card h-100">
      <img :src="product.image" class="card-img-top" alt="..." >
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <h5>${{product.price}}</h5>
        <p>Rating : ${{product.rating.rate}} || rated by : {{product.rating.count}}</p>
        <p class="card-text">{{product.description.slice(0,50)}}...</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name:'Filters',
    beforeMount:function(){
        this.onload();
    },
    computed:mapState(['products']),
    methods: {
    ...mapActions(['getProducts']),
    onload(){
        this.getProducts();
    }
        }

}

</script>
