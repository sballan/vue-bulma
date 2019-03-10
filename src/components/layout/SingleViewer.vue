<template>
  <div class="columns">
    <div class="column  is-half
is-offset-one-quarter">
      <div class="box">
        <article class="section">

          <slot></slot>

        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleViewer'
}
</script>

