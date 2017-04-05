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
      change: function (data) {
        console.log('Element changed to', data.target.value)
      },
      click: function (data) {
        console.log('Element clicked ', data)
      },
      input: function (data) {
        console.log('Pressed input', data.target.value)
      },
      keypress: function (data) {
        console.log('Pressed key', data.key, data.keyCode)
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
      input: function (data) {
        console.log('Element changed to', data.target.value)
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
      input: function (data) {
        console.log('Element changed to', data.target.value)
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
        console.log('Element genre changed to ', value.target.value)
      },
      click: function (value) {
        console.log('Element genre clicked ', value)
      }
    }
  }
}
