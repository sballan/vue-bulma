<template>
  <div class="content" :class="isClasses">
    <slot></slot>
  </div>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbContent',
  mixins: [ HasPropClasses ]
}
</script>
