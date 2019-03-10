<template>
  <div>
    <p v-if="label" class="menu-label">
      {{label}}
    </p>
    <ul v-if="list" class="menu-list">
      <li v-for="item in list">
        <a>{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbMenuEntry',
  mixins: [ HasPropClasses ],
  props: {
    label: String,
    list: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {
      activeItem: null
    }
  },
  methods: {
    setActive(item) {
      this.activeItem = item
    }
  }
}
</script>

