<template>
  <button class="delete" :class="isClasses"></button>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbDelete',
  mixins: [ HasPropClasses ]
}
</script>
