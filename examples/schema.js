module.exports = {
  name: {
    type: 'Input',
    properties: {
      title: 'Name',
      class: 'form-control',
      tooltip: 'Input your first name',
      value: 'value default'
    },
    events: {
      onChange: function (value) {
        console.log('Element changed to ', value)
        return value === ''
      },
      onClick: function (value) {
        console.log('Element clicked ', value)
        return value
      }
    }
  },
  lastname: {
    type: 'input',
    properties: {
      title: 'lastname',
      tooltip: 'Input your first lastname',
      value: 'value default'
    },
    events: {
      onChange: function (value) {
        console.log('Element lastname changed to ', value)
        return value === ''
      },
      onClick: function (value) {
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
      onChange: function (value) {
        console.log('Element lastname changed to ', value)
        return value === ''
      },
      onClick: function (value) {
        console.log('Element lastname clicked ', value)
        return value
      }
    }
  }
}
