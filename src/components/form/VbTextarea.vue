<template>
  <div>
    <textarea class="textarea" :class="isClasses" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: "VbTextarea",
  mixins: [ HasPropClasses ],
  props: {
    label: String,
    placeholder: String,
    value: String
  }
};
</script>
