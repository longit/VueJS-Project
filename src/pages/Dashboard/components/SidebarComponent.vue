<template>
  <div class="b__sidebar">
    <div class="b__avatar">
      <img src="@/assets/images/img_avar.png" /> 
      <div class="b__avar--info">
        <h3>Le van Linh</h3>
        <span class="status">Online</span>
      </div>
    </div> 
    <div class="b__menu">
      <ul>
        <li><router-link :to="{name: 'home'}"><i class="fa fa-home" ></i> Home </router-link></li>
        <li><router-link :to="{name: 'products'}"><i class="fa fa-home" ></i> Products </router-link></li>
        <li><router-link :to="{name: 'abouts'}"><i class="fa fa-home" ></i> Abouts </router-link></li>
        <li> <router-link :to="{name: 'contact'}"><i class="fa fa-home" ></i> Contact </router-link> </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: 'SidebarComponent'
}
</script>

<style lang="scss">
.b__sidebar {
  .b__avatar {
    display: flex;
    align-items: center;
    padding: 30px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-right: 10px;
    }
    .b__avar--info {
      h3 {
        font-size: 20px;
        margin: 0;
        text-transform: uppercase;
      }
      .status {
        color: green;
      }
    }
  }
  .b__menu {
    ul {
      padding: 0;
      li {
        list-style: none;
        padding: 0 30px;
        margin-bottom: 15px;
        a {
          color: #333;
        }
      }
    }
  }
}
</style>