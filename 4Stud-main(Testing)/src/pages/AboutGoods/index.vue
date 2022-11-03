<template>
    <div class="blockAboutGoods">
        <ShoppingCartIcon class="icon13"/>
        <h3 id="nameGoods">Назва товару</h3>
        <div class="photoAboutGoods">
            Фото
        </div>
        <p id="infoAboutGoods">
            Ціна: 1488$
            <br>
            <br>
            Прізвищe Ім’я По батькові 
            <br>
            <br> 
            Контакти 
            <br>
            <br>
            Навчальний заклад
        </p>
        <DotsCircleHorizontalIcon class="icon14"/>
        <div class="description">
            Опис...
        </div>
    </div>
</template>

<script>
import { ShoppingCartIcon } from "@vue-hero-icons/outline"
import { DotsCircleHorizontalIcon } from "@vue-hero-icons/solid"
    export default {
       components: { ShoppingCartIcon,DotsCircleHorizontalIcon,
  } 
    }
</script>
