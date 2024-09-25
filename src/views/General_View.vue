<template>
    <HomeView></HomeView>
    <br>
    <div class="cardsContainer">
        <CardComponent class="card" icon_name="game-icons:achievement" :title="$t('Card_Achievements')" content="" :style="{ backgroundColor: getAuxiliarColor()}"></CardComponent>
        <CardComponent class="card" icon_name="fa6-regular:file-code" :title="$t('Card_Projects')" content="" :style="{ backgroundColor: getAuxiliarColor()}"></CardComponent>
        <CardComponent class="card" icon_name="material-symbols:gallery-thumbnail" :title="$t('Card_Galery')" content="" :style="{ backgroundColor: getAuxiliarColor()}"></CardComponent>
    </div>
    <br>
    <AboutView></AboutView>
    
</template>

<script>
import HomeView from "../views/Home_View.vue";
import CardComponent from "../components/utils/Card_Component.vue";
import AboutView from "../views/About_View.vue";

export default {
    name: 'GeneralView', // Nombre del componente
    components:{
        HomeView,
        CardComponent,
        AboutView
    }
};
</script>

<style scoped>
.cardsContainer{
    display: flex;
    flex-direction: row;
    margin: 5% 10% 5% 10%;

    justify-content:space-between;
}

.card{
    width: 30%;
    height: 125px;
}

</style>