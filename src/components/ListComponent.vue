<template>
    <div class="b__list--componet">
        <div class="b__list--tile">
            <p>{{ description }} <span class="badge badge-info">{{ data.length}}</span></p>
        </div>
        <div class="b__list--content">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{ colums[0]}}</th>
                    <th scope="col">{{ colums[1]}}</th>
                    <th scope="col">{{ colums[2]}}</th>
                    </tr>7
                </thead>
                <tbody>
                    <tr v-for="user in data" :key="user.id">
                        <th scope="row">{{user.id}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>@{{user.phone}}</td>
                    </tr> 
                </tbody>
            </table>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    props:{
        data: Array,
        description: String,
        colums:[],
    }
}
</script>

<style lang="scss" scoped>
.b__list--componet {
    border: 2px solid #ddd;
    padding: 20px;
    border-radius: 5px;
}
</style>