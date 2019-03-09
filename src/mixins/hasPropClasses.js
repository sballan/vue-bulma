function propToClasses(prefix, prop) {
  const classes = prop.split(' ')
  const propClasses = []

  classes.forEach(c => {
    propClasses.push(`${prefix}-${c}`)
  })
  return propClasses
}

export default {
  props: {
    vbIs: String,
    vbHas: String,
    vbAre: String
  },
  computed: {
    isClasses() {
      if (!this.vbIs) return []
      return propToClasses('is', this.vbIs)
    },
    hasClasses() {
      if (!this.vbHas) return []
      return propToClasses('has', this.vbHas)
    },
    areClasses() {
      if (!this.vIs) return []
      return propToClasses('are', this.vbAre)
    }
  }
}
