<template>
     <div class="blockgoods">
        <div> 
            <div class="cardPhoto"><img :src="goods.photo" alt="photo" class="photo"></div> <br> 
            <div class="cardInfo">{{goods.name}}</div> <br>
            <div class="cardInfo">{{goods.price}} грн</div>
            <router-link to="/AboutGoods" class="bt">Переглянути</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodsItem',
        props: {
            goods: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

