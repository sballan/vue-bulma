<template>
  <single-viewer>
    <vb-delete></vb-delete>
  </single-viewer>
</template>

<script>

import HasPropClasses from '@/mixins/hasPropClasses'
import SingleViewer from '@/components/layout/SingleViewer'

import VbDelete from '@/components/elements/VbDelete'

export default {
  name: 'Delete',
  mixins: [ HasPropClasses ],
  components: { SingleViewer, VbDelete }
}
</script>
