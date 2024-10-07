<template>
  <HomeView id="home-view"></HomeView>
  <br />
  <div class="cardsContainer">
    <CardComponent
      class="card"
      url="http://www.google.com"
      icon_name="marketeq:reward"
      :title="$t('Card_Achievements')"
      content=""
      :style="{ backgroundColor: getAuxiliarColor() }"
    ></CardComponent>
    <CardComponent
      class="card"
      url="http://www.google.com"
      icon_name="icon-park:file-code"
      :title="$t('Card_Projects')"
      content=""
      :style="{ backgroundColor: getAuxiliarColor() }"
    ></CardComponent>
    <CardComponent
      class="card"
      url="http://www.google.com"
      icon_name="marketeq:gallery-collections"
      :title="$t('Card_Galery')"
      content=""
      :style="{ backgroundColor: getAuxiliarColor() }"
    ></CardComponent>
  </div>
  <br />
  <AboutView id="about-view"></AboutView>
  <SkillsView id="skills-view"></SkillsView>
  <ProjectsComponent :items="projects" id="projects-view"></ProjectsComponent>
  <ContactView></ContactView>
</template>

<script>
import HomeView from "../views/Home_View.vue";
import CardComponent from "../components/utils/Card_Component.vue";
import AboutView from "../views/About_View.vue";
import SkillsView from "../views/Skills_View.vue";
import ProjectsComponent from "../components/utils/Projects_Component.vue";
import ContactView from "../views/Contact_View.vue";

export default {
  name: "GeneralView", // Nombre del componente
  components: {
    HomeView,
    CardComponent,
    AboutView,
    SkillsView,
    ProjectsComponent,
    ContactView
  },
  data() {
    return {
      projects: [
        {
          title: "title 1",
          description: "desc 1",
          date: "date 1",
          image: "https://media.licdn.com/dms/image/v2/C5612AQFz2jYSPYu8hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1628894163030?e=1732752000&v=beta&t=RHOsnV2MQpOP2n9IQwg7Uv-n6Aj_sNy_8Y3vfEnww50",
          url: "url 1"
        },
        {
          title: "title 2",
          description: "desc 2",
          date: "date 2",
          image: "https://media.licdn.com/dms/image/v2/C5612AQFz2jYSPYu8hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1628894163030?e=1732752000&v=beta&t=RHOsnV2MQpOP2n9IQwg7Uv-n6Aj_sNy_8Y3vfEnww50",
          url: "url 2"
        },
        {
          title: "title 3",
          description: "desc 3",
          date: "date 3",
          image: "https://media.licdn.com/dms/image/v2/C5612AQFz2jYSPYu8hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1628894163030?e=1732752000&v=beta&t=RHOsnV2MQpOP2n9IQwg7Uv-n6Aj_sNy_8Y3vfEnww50",
          url: "url 3"
        },
        {
          title: "title 4",
          description: "desc 4",
          date: "date 4",
          image: "https://media.licdn.com/dms/image/v2/C5612AQFz2jYSPYu8hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1628894163030?e=1732752000&v=beta&t=RHOsnV2MQpOP2n9IQwg7Uv-n6Aj_sNy_8Y3vfEnww50",
          url: "url 4"
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardsContainer {
  display: flex;
  flex-direction: row;
  margin: 5% 10% 5% 10%;

  justify-content: space-between;
}

.card {
  width: 30%;
  height: 110px;
}
</style>
