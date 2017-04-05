<script>
  export default {
    name: 'app',
    data () {
      return {
        valid: true,
        root: 'div'
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
    components: {},
    render (h) {
      if (typeof this.schema === 'string') {
        this.schema = JSON.parse(this.schema)
      }
      var childrens = []
      var root = 'div'
      for (var key in this.schema) {
        if (this.schema.hasOwnProperty(key)) {
          var element = this.schema[key]
          if (key === 'root') {
            if (typeof element === 'string' || typeof element === 'object') {
              root = element
            }
            continue
          }
          // console.log(element)
          if (element.properties) {
            if (!!element.properties.value && typeof element.properties.value === typeof []) {
              childrens.push(
                h(element.type, {
                  attrs: element.properties,
                  on: element.events
                }, element.properties.value.map((item) => h('option', {
                  attrs: { value: item }
                }, item)))
              )
            } else {
              childrens.push(
                h(element.type, {
                  attrs: element.properties,
                  on: element.events
                })
              )
            }
          } else {
            console.warn(`Render ${key} invalid`)
          }
        }
      }

      if (typeof root === 'string') {
        return h(
          root, // tag name
          childrens
        )
      } else {
        return h(root.type, {
          attrs: root
        }, childrens)
      }
    }
  }
</script>
