<template>
  <button class="button" :class="isClasses"><slot>My Button</slot></button>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbButton',
  mixins: [ HasPropClasses ]
}
</script>
