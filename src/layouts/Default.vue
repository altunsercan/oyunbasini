<template>
  <div>
    <a href="#main">skip to content</a>
    <!-- {{ partial "svg.html" . }} -->
    <div class="wrapper">
      <header class="intro-and-nav" role="banner">
        <div>
          <div class="intro">
            <g-link class="logo" href="/">
              <g-image src="https://via.placeholder.com/728x300.png?text=Oyun+Basını+Rehberi+Logo"></g-image>
            </g-link>
            <p class="library-desc">
              <!--
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper gravida egestas. Donec ultrices tempor turpis, id gravida mauris rutrum in.
              -->
            </p>
          </div>
          <Nav/>
        </div>
      </header>
      <div class="main-and-footer">
        <div>
          <slot/>
          <!--{{ partial "footer.html" . }}-->
        </div>
      </div>
    </div>
  </div>
</template>



<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
<script>
  import Nav from "../components/Nav";
  export default {
    components: {Nav}
  }
</script>