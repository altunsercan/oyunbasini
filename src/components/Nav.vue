<template>
  <nav id="patterns-nav" class="patterns" role="navigation">
    <h2 class="vh">Main navigation</h2>
    <button id="menu-button" aria-expanded="false">
      <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
        <use xlink:href="#menu"></use>
      </svg>
      Menu
    </button>

    <ul id="patterns-list">
      <li class="pattern">
        <g-link class="nav__link" to="/">
          <svg class="bookmark-icon" aria-hidden="true" focusable="false" viewBox="0 0 40 50">
            <use xlink:href="#bookmark"></use>
          </svg>
          <span class="text">Home</span>
        </g-link>
      </li>

      <li class="pattern">
        <g-link class="nav__link" to="/about">
          <svg class="bookmark-icon" aria-hidden="true" focusable="false" viewBox="0 0 40 50">
            <use xlink:href="#bookmark"></use>
          </svg>
          <span class="text">About</span>
        </g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>

</style>