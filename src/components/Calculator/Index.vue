<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <Calculator></Calculator>
      </div>
      <div class="col">
        <Output></Output>
      </div>
    </div>
  </div>
</template>

<script>

import Calculator from './Calculator.vue'
import Output from './Output.vue'

export default {
  name: 'Index',
  components: {
    Calculator,
    Output
  }
}
</script>

<style>

</style>
