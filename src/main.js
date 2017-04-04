// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Schema from '../examples/schema'
console.log('Schema', Schema)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      schema: Schema
    }
  },
  mounted () {
    console.log('Montado ', this.schema)
  },
  template: '<App :schema="schema"/>',
  components: {
    App
  }
})
