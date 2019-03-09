<template>
  <span class="icon" :class="isClasses">
    <i class="fas" :class="`fa-${icon}`"></i>
  </span>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbIcon',
  mixins: [ HasPropClasses ],
  props: {
    icon: String,
  }
};
</script>
