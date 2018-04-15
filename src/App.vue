<template>
  <div id="app">
    <v-jsoneditor v-model="json" @error="onError"></v-jsoneditor>
    <p style="text-align:center;">
      {{ json }}
    </p>
  </div>
</template>

<script>
import VJsoneditor from './VueJsoneditor'
export default {
  name: 'app',
  data () {
    return {
      json: { hello:'world' }
    }
  },
  components: { VJsoneditor },
  methods: {
    onError() {
      console.log('err')
    }
  },
}
</script>

<style>

</style>
