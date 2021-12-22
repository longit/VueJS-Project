<template>
    <DashboardComponent >
        <div slot="slot-pages" class="content-pages">
            <p> Products</p>
        </div>
    </DashboardComponent >
</template>
<script>
import DashboardComponent from '../Dashboard/DashboardComponent'
export default {
    name: 'ProductsComponent',
    components: {
        DashboardComponent
    }
}
</script>
<style scoped>

</style>