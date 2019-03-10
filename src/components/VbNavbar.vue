<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1>Vue-Bulma</h1>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a to="/button" class="navbar-link">
            Button
          </a>

          <div class="navbar-dropdown is-active">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>
<script>
export default {
  name: 'VbNavbar',
  props: {
    links: Array
  }

}
</script>


