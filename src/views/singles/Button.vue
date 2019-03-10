<template>
  <div class="columns">
    <div class="column">
      <div class="columns">
        <div class="column">
          <p>Button Text</p>
          <input v-model="demoButtonText1"/>

          <p>"is" Classes</p>
          <input v-model="demoIsClasses1"/>
        </div>

        <div class="column">
          <vb-button :vb-is="demoIsClasses1">
            <span>{{demoButtonText1}}</span>
          </vb-button>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <p>Button Text</p>
          <input v-model="demoButtonText2"/>

          <p>"is" Classes</p>
          <input v-model="demoIsClasses2"/>
        </div>

        <div class="column">
          <vb-button :vb-is="demoIsClasses2">
            <span>{{demoButtonText2}}</span>
          </vb-button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import HasPropClasses from '@/mixins/hasPropClasses.js'

import VbButton from '@/components/elements/VbButton.vue'

export default {
  name: 'Button',
  mixins: [ HasPropClasses ],
  components: {
    VbButton
  },
  data(){
    return {
      demoButtonText1: "My Small Primary Button",
      demoButtonText2: "My Large Info Button",
      demoIsClasses1: "primary small",
      demoIsClasses2: "info large"
    }
  }
}
</script>
