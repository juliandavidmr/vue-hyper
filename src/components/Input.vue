<!--
<template>
  <h1>
    {{ msg }}
  </h1>
</template>
-->

<script>
  export default {
    name: 'Input',
    props: {
      title: {
        required: true
      },
      tooltip: {
        required: true
      },
      value: {
        type: 'String'
      },
      el: {
        required: true,
        type: 'String'
      }
    },
    data () {
      return {
        msg: 'I am a input'
      }
    },
    render (createElement) {
      console.log('Props input', this.props)
      return createElement(this.el, {
        attrs: {
          value: this.value
        }
      })
    }
  }
</script>
