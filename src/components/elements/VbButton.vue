<template>
  <button class="button" :class="isClasses">This is a button</button>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbButton',
  mixins: [ HasPropClasses ]
}
</script>
