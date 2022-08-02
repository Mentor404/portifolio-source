<template>
  <div class="page-content">
    <Header />
    <Projects />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
export default {
  components: { Projects, Header }
}
</script>