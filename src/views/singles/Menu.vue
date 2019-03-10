<template>
  <single-viewer>
    <vb-menu></vb-menu>
  </single-viewer>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses'
import SingleViewer from '@/components/layout/SingleViewer'

import VbMenu from '@/components/VbMenu'

export default {
  name: 'Menu',
  mixins: [ HasPropClasses ],
  components: { SingleViewer, VbMenu }
}
</script>
