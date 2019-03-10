<template>
  <div class="columns">
    <div class="column">
      <div class="columns">

        <div class="column">
          <p>Button Text</p>
          <input v-model="demoButtonText"/>
          <p>"is" Classes</p>
          <input v-model="demoIsClasses"/>
        </div>
        <div class="column">
          <vb-navbar :vb-is="demoIsClasses">
          </vb-navbar>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <p>Button Text</p>
          <input v-model="demoButtonText"/>
          <p>"is" Classes</p>
          <input v-model="demoIsClasses"/>
        </div>
        <div class="column">
          <vb-navbar :vb-is="demoIsClasses">
          </vb-navbar>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import VbNavbar from '@/components/VbNavbar'

export default {
  name: 'Navbar',
  components: {
    VbNavbar
  }
}
</script>


