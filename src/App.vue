<template>
  <div id="app">
    <vb-navbar items="links"></vb-navbar>
    <router-view/>
  </div>
</template>

<script>
import VbNavbar from '@/components/VbNavbar'
export default {
  components: { VbNavbar },
  data() {
    return {
      links: [
        {name: 'Button', route: 'button'},
        {name: 'Box', route: 'box'}

      ]
    }
  }
}
</script>
