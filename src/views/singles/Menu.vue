<template>
  <single-viewer class="tile">
    <vb-menu :items="items"></vb-menu>
  </single-viewer>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses'
import SingleViewer from '@/components/layout/SingleViewer'

import VbMenu from '@/components/VbMenu'

export default {
  name: 'Menu',
  mixins: [ HasPropClasses ],
  components: { SingleViewer, VbMenu },
  data() {
    return {
      items: {
        General: ['Admministration', 'Team Settings'],
        Administration: ['Invitations', 'Authentication'],
        Transactions: ['Payments', 'Transfers', 'Balance']
      }
    }
  }
}
</script>
