<template>
  <div class="box" :class="isClasses">
    <slot></slot>
  </div>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbBox',
  mixins: [ HasPropClasses ]
}
</script>
