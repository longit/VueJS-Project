<template>
    <DashboardComponent > 
        <div slot="slot-pages" class="content-pages">  
            <ProductListComponent />
        </div>
    </DashboardComponent >
</template>
<script>
import DashboardComponent from '../Dashboard/DashboardComponent'
import ProductListComponent from '../../components/ProductListComponent.vue'
export default {
    name: 'ProductsComponent',
    components: {
        DashboardComponent,
        ProductListComponent
    }, 
}
</script>
<style lang="scss" scoped> 

</style>