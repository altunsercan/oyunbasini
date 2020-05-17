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
      <li class="pattern" >
        <g-link class="nav__link" v-bind:aria-current="$route.path === '/'" to="/">
          <svg class="bookmark-icon" aria-hidden="true" focusable="false" viewBox="0 0 40 50">
            <use xlink:href="#bookmark">
              <symbol id="bookmark" viewBox="0 0 40 50">
                <g transform="translate(2266 3206.2)">
                  <path style="stroke:currentColor;stroke-width:3.2637;fill:none" d="m-2262.2-3203.4-.2331 42.195 16.319-16.318 16.318 16.318.2331-42.428z"></path>
                </g>
              </symbol>
            </use>
          </svg>
          <span class="text">Home</span>
        </g-link>
      </li>

      <li class="pattern">
        <g-link class="nav__link"  v-bind:aria-current="$route.path === '/about'"  to="/about">
          <svg class="bookmark-icon" aria-hidden="true" focusable="false" viewBox="0 0 40 50">
            <use xlink:href="#bookmark">
              <symbol id="bookmark" viewBox="0 0 40 50">
                <g transform="translate(2266 3206.2)">
                  <path style="stroke:currentColor;stroke-width:3.2637;fill:none" d="m-2262.2-3203.4-.2331 42.195 16.319-16.318 16.318 16.318.2331-42.428z"></path>
                </g>
              </symbol>
            </use>
          </svg>
          <span class="text">About</span>
        </g-link>
      </li>
    </ul>

    <div class="nav-bottom">
      Project by <g-link href="http://www.unog.dev">ÜNOG</g-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>
.nav-bottom
{
  position: absolute;
  margin-bottom: 1rem;
  bottom: 0px;
}

</style>