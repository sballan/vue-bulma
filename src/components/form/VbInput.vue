<template>
  <div>
    <div class="field">
      <label v-if="label" class="label">{{this.label}}</label>
      <div class="control" :class="hasClasses">
        <input class="input" :class="isClasses" :placeholder="placeholder" :value="value" type="text" >
        <slot name="leftIcon"></slot>
        <slot name="rightIcon"></slot>
      </div>
      <p v-if="help" class="help" :class="isClasses">{{help}}</p>
    </div>
  </div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: "VbInput",
  mixins: [ HasPropClasses ],
  props: {
    label: String,
    placeholder: String,
    value: String,
    help: String
  }
};
</script>
