<template>
    <div class="blockAddGoods">
        <div>
            <br>
            <label>
                <p class="text nameAdd">Назва</p>
                <input type="text" v-model="name" placeholder="Назва">
            </label>
            <label>
                <p class="text">Опис</p>
                <input type="text" v-model="description" placeholder="Опис" class="decription">
            </label>
            <label>
                <p class="text">Ціна</p>
                <input type="text" v-model.number="price" placeholder="Ціна">
            </label>
            <label>
                <p class="text categoriesAdd">Категорія</p>
                <input type="text" v-model.number="categories" placeholder="Категорія">
            </label>
            <label>
                <p class="text">Фото</p>
                <input type="text" v-model="photo" placeholder="Силка на фото">
            </label>
        </div>
        <br>
        <button @click="addgoods">Додати</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'AddGoods',
        data() {
            return {
                name: null,
                description: null,
                price: null,
                categories: null,
                photo: null
            }
        },
        methods: {
            ...mapActions(['addGoods']),
            addgoods() {
                this.addGoods({
                    name: this.name,
                    description: this.description,
                    price: this.price,
                    categories: this.categories,
                    photo: this.photo
                })
                this.$router.push({ path: '/' })
            }
        },
    }
</script>

