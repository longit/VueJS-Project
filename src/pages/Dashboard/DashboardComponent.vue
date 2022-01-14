<template>
    <div class="main">
        <div class="b__sidebar">
            <SidebarComponent /> 
        </div>
        <div class="content-right"> 
            <NavbarComponent /> 
            <div class="b__apges">
                <slot name="slot-pages"></slot> 
                
            </div> 
        </div>
    </div>
</template>
<script>
import SidebarComponent from './components/SidebarComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'  

export default {
    name: 'DashboardComponent',
    components: {
        SidebarComponent,
        NavbarComponent 
    }
}
</script>
<style>
.main {
    width: 100%;
    height: 100vh; 
    display: flex;
}
.b__sidebar {
    width: 300px;
    height: 100vh;
    background: #f5f5f5;
}
.content-right {
    width: calc(100% - 300px);
    height: 100vh; 
}
.b__navbar {
    width: 100%;
    height: 70px;
    background: yellow;
}
</style>