<!--<template>
  <div id="app">
  
    <Hello></Hello>
    <Input el="a"></Input>
  </div>
</template>-->

<script>
  import Hello from './components/Hello'
  import Input from './components/Input'
  
  export default {
    name: 'app',
    data () {
      return {
        valid: true
      }
    },
    props: {
      schema: {
        type: Object,
        required: true,
        default () {
          return {
            valid: {}
          }
        }
      }
    },
    components: {
      Hello,
      Input
    },
    render (createElement) {
      var childrens = []
      for (var key in this.schema) {
        if (this.schema.hasOwnProperty(key)) {
          var element = this.schema[key]
          childrens.push(
            createElement(element.type || 'a', {
              props: element.properties
            })
          )
        }
      }
  
      return createElement(
        'span', // tag name
        childrens
      )
    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
