<template>
  <aside class="menu">
    <vb-menu-item label="General" :list="['Admministration', 'Team Settings']"></vb-menu-item>
    <vb-menu-item label="Administration" :list="['Team Settings', 'Invitations', 'Authentication']"></vb-menu-item>
    <vb-menu-item label="Transactions" :list="['Payments', 'Transfers', 'Balance']"></vb-menu-item>
  </aside>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

import VbMenuItem from '@/components/VbMenuItem.vue'

export default {
  name: 'VbMenu',
  mixins: [ HasPropClasses ],
  components: { VbMenuItem },
  props: {
    list: Array
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

