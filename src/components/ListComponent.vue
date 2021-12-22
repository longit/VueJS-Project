<template>
    <div class="b__list--componet">
        <div class="b__list--tile">
            <p>ListComponent</p>
        </div>
        <div class="b__list--content">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
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
        users: Array,
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