<template>
    <div>
      <MenuIcon class="icon2"/>
      <SwitchHorizontalIcon class="icon3"/>
        <div class="sort">
            <p> Вибрати товар за <select size="1" class="select">
            <option value="1">ціною</option>
            <option value="2">датою </option>
            </select>
            <input type="submit" value="Відсортувати" class="butsort"></p>
        </div>
        <div class="categories">
            <p id="catg">Категорії</p>
            <button class="btnCategories">
                Реферати
            </button>
            <br>
            <br>
            <button class="btnCategories">
                Конспекти
            </button>
            <br>
            <br>
            <button class="btnCategories">
                Лабораторні
            </button>
            <br>
            <br>
            <button class="btnCategories">
                Самостійні
            </button>
            <br>
            <br>
            <button class="btnCategories">
                Контрольні
            </button>
            <br>
            <br>
            <button class="btnCategories">
                Індивідуальні
            </button>
            <br>
            <br>
            <button class="btnCategories">
                Курсові
            </button>
        </div>
        <div class="mainList">
            <div class="listGoods">
            <goods-item v-for="goods in getGoodsList" :key="goods.id"
            :goods="goods"
            />
            </div>
        </div>
    </div>
</template>

<script>
    import GoodsItem from "@/components/GoodsItem";
    import { mapGetters } from "vuex"
    import { MenuIcon } from '@iconicicons/vue'
    import { SwitchHorizontalIcon } from "@vue-hero-icons/outline"
    export default {
        name: 'GoodsList',
        components: {
            GoodsItem, MenuIcon,SwitchHorizontalIcon
        },
        computed: {
            ...mapGetters(['getGoodsList'])
        },
    }
</script>

