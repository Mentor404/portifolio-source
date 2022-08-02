<template>
  <main>
    <div class="text-center text pb-14">
      <h2 class="sub-title"> Open Source Projects</h2>
      <p class="description">I've worked on some personal projects to put my knowledge into practice</p>
    </div>
    <div id="projects" class="list-box text">
      <article class="project-box" v-for="project in projects" :key="project.id">
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          <div class="link">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="opacity-50">{{ project.content }}</p>
          </div>
        </a>
      </article>
    </div>
  </main>

</template>

<script>
import jsonData from "../data/projects.json";
export default {
  name: "Projects",
  data() {
    return {
      projects: jsonData
    };
  }
};
</script>
