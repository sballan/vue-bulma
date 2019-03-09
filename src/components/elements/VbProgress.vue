<template>
  <progress class="progress" :class="isClasses" :value="value" :max="max"></progress>
</template>
<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbProgress',
  mixins: [ HasPropClasses ],
  props: {
    value: {
      type: [Number, String]
    },
    max: {
      type: [Number, String],
      default: 100
    }
  }
}
</script>
