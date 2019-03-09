<template>
  <div class="notification" :class="isClasses">
    <vb-delete v-if="withDelete" :vb-is="withDelete"></vb-delete>
    <slot></slot>
  </div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

import VbDelete from '@/components/elements/VbDelete.vue'

export default {
  name: 'VbNotification',
  mixins: [ HasPropClasses ],
  props: {
    withDelete: {
      type: [Boolean, String],
      default: false
    }
  },
  components: {
    VbDelete
  }
};
</script>
