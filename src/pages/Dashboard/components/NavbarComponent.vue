<template>
  <div class="b__navbar"> 
      <h3><i class="fa fa-star"></i> Logo</h3>
      <a href="#" @click.prevent="logout"><i class="fas fa-sign-out-alt"></i> Logut</a>
  </div>
</template>

<script>
export default {
name: 'NavbarComponent',
methods: {
  logout() {
    this.$router.push({name: 'login'});
  }
}
}
</script>

<style lang="scss">
.b__navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
</style>