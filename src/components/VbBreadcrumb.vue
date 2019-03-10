<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="#">Bulma</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
    </ul>
  </nav>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbBreadcrumb',
  mixins: [ HasPropClasses ],
  props: {
    items: Array,
    defaultActive: String,
    nav: Boolean
  },
  data: function() {
    return {
      activeItem: this.defaultActive
    }
  },
  methods: {
    setActive(item) {
      this.activeItem = item
    }
  }
}
</script>
