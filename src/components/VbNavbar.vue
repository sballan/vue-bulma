<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://vuejs.org">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg" width="30" height="28">
      </a>
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a

        <div class="navbar-item has-dropdown is-active is-hoverable">
          <a to="/button" class="navbar-link">
            Button
          </a>

          <div class="navbar-dropdown">
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
}
</script>


