import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goodsList: [
            {
                name: 'Лабораторна з фізики',
                description: 'Лабораторна робота №3',
                price: 500,
                categories: 'Лабораторна',
                photo: 'https://let-know.com/uploads/images/ts/827595_6_referat-konspekt-napishu-za-1-den.jpg'
            },
            {
                name: 'Реферат з історії',
                description: '2 курс історія',
                price: 400,
                categories: 'Реферат',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tkiLCAeBFlexgDc0dmsNHr4ry6eTE8n1XQ&usqp=CAU'
            },
            {
                name: 'Філософія',
                description: '3 курс 2021',
                price: 500,
                categories: 'Конспект',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDr3SeT2dkb4-seLFrwLkSOKlBcFIBLdIKQ&usqp=CAU'
            },
            {
                name: 'Фізика самостійна',
                description: '1 курс',
                price: 400,
                categories: 'Самостійна',
                photo: 'https://ireland.apollo.olxcdn.com/v1/files/yu9m74r4xov8-UA/image;s=525x700'
            },
            {
                name: 'Алгебра',
                description: '4 курс',
                price: 600,
                categories: 'Індивідуальна',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54RaqQ4kxjN3_1gnKxbqplBJLENlLFkfl5Q&usqp=CAU'
            },
            {
                name: 'Веб-програмування',
                description: 'Лабораторна робота №4',
                price: 200,
                categories: 'Лабораторна',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99hXvm65m0gKfRF2A9a_maqF-fswIwXESBA&usqp=CAU'
            },
            {
                name: 'Історя',
                description: 'Реферат з історії',
                price: 400,
                categories: 'Реферат',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmaU9op0eN0NV2ynx5wSq5PNSeLwJiKP0Mw&usqp=CAU'
            },
            {
                name: 'Бази даних',
                description: 'Бази даних 3 курс',
                price: 3000,
                categories: 'Курсова',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyC6ixEIUsDVp3d4qElhBQdCyCNmpy_xHVzw&usqp=CAU'
            },
            
        ],
    },
    getters: {
        getGoodsList: ({ goodsList }) => goodsList,
    },
    mutations: {
        addNewGoods(state, dataObj) {
            state.goodsList.push({
                ...dataObj
            })
        },
    },
    actions: {
        addGoods({commit}, data) {
            commit('addNewGoods', data)
        },
    }
})

export default store