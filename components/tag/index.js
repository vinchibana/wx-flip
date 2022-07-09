Component({

  properties: {
    text: String
  },

  options: {
    multipleSlots: true
  },

  data: {},

  methods: {
    onTap(event) {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }
  }
})
