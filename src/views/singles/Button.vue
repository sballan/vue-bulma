<template>
  <vb-button>
    My Best Button
  </vb-button>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'
import SingleViewer from '@/components/layout/SingleViewer'

import VbButton from '@/components/elements/VbButton.vue'

export default {
  name: 'Button',
  mixins: [ HasPropClasses ],
  components: {
    VbButton
  }
}
</script>
