<template>
    <div class="b__login">
        <div class="b__login--content">
            <div class="b__login--title">
                <h3> Login Website</h3>
            </div>
            <div class="b__from">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div> 
                    <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
name: 'LoginComponent',
data() {
    return {

    }
},
methods:{
    login() {
        this.$router.push({name: 'home'});
    }
}
}
</script>
<style lang="scss" src="./styleLogin.scss" >
    @import "@/scss/_color.scss";
</style>