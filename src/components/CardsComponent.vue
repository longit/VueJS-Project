<template>
    <div class="b__cards">
        <div class="b__cards--ls b__top">
            <h3> {{ type }} </h3>
            <p class="percentage"><i class="fa fa-arrow-up"></i> {{percentage}}</p>
        </div>
        <div class="b__cards--ls b__bottom">
            <i :class="['fa ico', icon ]"></i>
            <p class="qtd">{{qtd}}</p>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'CardsComponent',
    props:{
        type: String,
        percentage: String,
        icon: String,
        qtd: String,
    }
}
</script>
<style lang="scss">
.b__cards {
    display: flex;
    flex-direction: column;
    background: green;
    border-radius: 5px;
    padding: 15px;
    .b__cards--ls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        h3,p, .ico {
            margin: 0;
            color:#fff;
        } 
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>