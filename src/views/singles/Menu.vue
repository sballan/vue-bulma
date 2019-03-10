<template>
  <div class="columns">
    <div class="column">
      <p>Menu Items</p>
      <textarea v-model="modelData" cols="50" rows="10"/>
    </div>
      <div class="column">
      <vb-menu :items="propData"></vb-menu>
    </div>
  </div>
</template>

<script>

import VbMenu from '@/components/VbMenu'

export default {
  name: 'Menu',
  components: { VbMenu },
  computed: {
    labels() { return this.labelNames.split(",")},
    propData() {
      try {
        return JSON.parse(this.modelData)
      }catch(err) {
        return {}
      }
    }
  },
  data() {
    return {
      modelData: `{
        "General": ["Admministration", "Team Settings"],
        "Administration": ["Invitations", "Authentication"],
        "Transactions": ["Payments", "Transfers", "Balance"]
      }`,
      items: {
        General: ['Admministration', 'Team Settings'],
        Administration: ['Invitations', 'Authentication'],
        Transactions: ['Payments', 'Transfers', 'Balance']
      },
      labelNames: "General, Addmition",
      childrenNames: {
        General: ['SubItems', 'Others']
      }
    }
  }
}
</script>
