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
        type: 'String'
      },
      tooltip: {
        type: 'String'
      },
      value: {
        type: 'String'
      }
    },
    data () {
      return {
        msg: 'I am a input'
      }
    },
    mounted () {
      console.log('Props input', this.props)
    },
    render (createElement) {
      return createElement('input', {
        attrs: {
          innerHtml: this.props.innerHtml
        }
      })
    }
  }
</script>
