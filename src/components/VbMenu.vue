<template>
  <div class="menu">
    <vb-menu-item
      v-for="(list, name) in items"
      :key="name"
      :label="name"
      :list=list
    >
    </vb-menu-item>
    <!-- <vb-menu-item label="General" :list="['Admministration', 'Team Settings']"></vb-menu-item>
    <vb-menu-item label="Administration" :list="['Invitations', 'Authentication']"></vb-menu-item>
    <vb-menu-item label="Transactions" :list="['Payments', 'Transfers', 'Balance']"></vb-menu-item> -->
  </div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

import VbMenuItem from '@/components/VbMenuItem.vue'

export default {
  name: 'VbMenu',
  mixins: [ HasPropClasses ],
  components: { VbMenuItem },
  props: {
    items: {
      type: Object,
      default() {return []}
    }
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

