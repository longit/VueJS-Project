<template>
    <DashboardComponent >
        <div slot="slot-pages" class="content-pages">
            <h3> Abouts </h3>
            <div class="b__card---rows">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Product01'" :percentage="'7%'" :icon="'fa-users'" :qtd="'3455'" />
                    </div> 
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Product02'" :percentage="'34%'" :icon="'fa-star'" :qtd="'35'" />
                    </div> 
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Product03'" :percentage="'27%'" :icon="'fa-ambulance'" :qtd="'123'" />
                    </div> 
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Product04'" :percentage="'44%'" :icon="'fa-sign-out-alt'" :qtd="'5'" />
                    </div> 
                </div>
            </div><!-- end .b__card---rows-->
        </div> 
    </DashboardComponent >
</template>
<script>
import DashboardComponent from '../Dashboard/DashboardComponent'
import CardsComponent from '../../components/CardsComponent.vue'
export default {
    name: 'AboutsComponent',
    components: {
        DashboardComponent,
        CardsComponent
    }
}
</script>
<style lang="scss" scr="./style.scss" scoped>
.content-pages {
    padding: 15px;
}
</style>