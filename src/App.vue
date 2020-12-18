<template>
  <div id="app">
    <lgn-input type="text" v-model="pwd" placeholder="Hello"></lgn-input>
  </div>
</template>
<script>
import lgnInput from '@/components/input/input.vue'
export default {
  name: "Main",
  components: {
    lgnInput
  },
  data(){
    return{
      pwd: "1234"
    }
  }
}
</script>