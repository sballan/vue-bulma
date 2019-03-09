<template>
<div class="container">
  <nav class="tabs is-boxed is-full-width">
    <ul>
      <li v-for="item in items" :key="item.name" :class="{'is-active': item == activeItem}">
        <router-link
          v-if="!nav"
          :class="{'is-active': item == activeItem}"
          @click="setActive(item)"
          :to="item.route"
        >{{item.name}}
        </router-link>
        <a v-else @click="setActive(item)">{{item.name}}</a>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

export default {
  name: 'VbTabs',
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