<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="path in pathArray" :key="path[path.length - 1]">
        <router-link :to="`/${path.join('/')}`">
          {{path[path.length - 1]}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbBreadcrumb',
  mixins: [ HasPropClasses ],
  created() { console.log(this.$router.currentRoute)},
  computed: {
    fullPath() {
      return this.$router.currentRoute.fullPath
    },
    pathArray() {
      const path = this.fullPath.split('/')
      if(path[0] === "") path.shift()

      const pathArray = []
      for(let i = 1; i <= path.length; i++){
        pathArray.push(path.slice(0, i))
      }
      return pathArray
    }
  }
}
</script>
