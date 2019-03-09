<template>
  <figure>
    <img class="image" :class="isClasses" :src="">
  </figure>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbDelete',
  mixins: [ HasPropClasses ],
  props: {
    src: String
  }
}
</script>
