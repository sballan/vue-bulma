<template>
  <table class="table" :class="isClasses">
    <slot name="thead"></slot>
    <slot name="tfoot"></slot>
    <slot name="tbody"></slot>
  </table>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbTable',
  mixins: [ HasPropClasses ]
};
</script>
