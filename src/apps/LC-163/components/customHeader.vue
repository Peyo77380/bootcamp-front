<template>
    <div id="headerContainer">
        <img src="../../../assets/images/Logo/Logo bleue marine.png" width="50px" height="50px" alt="Logo de l'entreprise">
        <Breadcrumb />
        <h1>test de titre</h1>
        <p>Test de description</p>
    </div>
</template>
<script>
import Breadcrumb from './Breadcrumb/breadcrumb.vue'
export default {
    components: {Breadcrumb}
}
</script>