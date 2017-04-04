module.exports = {
  root: {
    type: 'form',
    method: 'post'
  },
  name: {
    type: 'input',
    properties: {
      title: 'Name',
      class: 'form-control',
      tooltip: 'Input your first name',
      value: 'Julian',
      innerHtml: 'hello',
      placeholder: ''
    },
    events: {
      change: function (value) {
        console.log('Element changed to ', value)
        return value === ''
      },
      click: function (value) {
        console.log('Element clicked ', value)
        return value
      },
      input: function (value) {
        console.log('Pressed ', value)
        return value
      }
    }
  },
  lastname: {
    type: 'input',
    properties: {
      title: 'lastname',
      tooltip: 'Input your first lastname',
      value: 'David'
    },
    events: {
      change: function (value) {
        console.log('Element lastname changed to ', value)
        return value === ''
      },
      click: function (value) {
        console.log('Element lastname clicked ', value)
        return value
      }
    }
  },
  description: {
    type: 'input',
    properties: {
      title: 'biografy',
      tooltip: 'Here your text',
      placeholder: 'Text'
    },
    events: {
      change: function (value) {
        console.log('Element lastname changed to ', value)
        return value === ''
      },
      click: function (value) {
        console.log('Element lastname clicked ', value)
        return value
      }
    }
  },
  genre: {
    type: 'select',
    properties: {
      title: 'genre',
      tooltip: 'Input your genre',
      value: ['M', 'F', 'Other']
    },
    events: {
      change: function (value) {
        console.log('Element genre changed to ', value)
        return value === ''
      },
      click: function (value) {
        console.log('Element genre clicked ', value)
        return value
      }
    }
  }
}
