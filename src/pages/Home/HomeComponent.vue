<template>
    <DashboardComponent >
        <div slot="slot-pages" class="content-pages">
            <div class="b__title--pages mb-3">
                <h3> Home Page</h3>
            </div>
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
            <div class="b__list mt-4">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ListComponent :data="users" description="ListComponent" :colums="['Nome','E-mail','Contact']"  /> 
                    </div>
                    <div class="col-12 col-md-6">
                        <ListComponent :data="users" description="ProductsComponent" :colums="['Name','E-mail','Product']" /> 
                    </div>
                </div>
            </div><!-- end .b__list--> 
        </div>
    </DashboardComponent >
</template>
<script>
import DashboardComponent from '../Dashboard/DashboardComponent'
import CardsComponent from '../../components/CardsComponent.vue'
import ListComponent from '../../components/ListComponent.vue'
const axios = require('axios');
export default {
    name: 'HomeComponent',
    data () {
        return {
            users:[]
        }
    },
    mounted(){
        this.getUsers();
    },
    methods:{
        async getUsers(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            if(response.status == 200) {
                this.users = response.data;
            } else {
                console.log("Response error to API");
            } 
        }
    },
    components: {
        DashboardComponent,
        CardsComponent,
        ListComponent
    }
}
</script>
<style lang="scss" scoped>
.content-pages {
    padding: 15px;
}
</style>