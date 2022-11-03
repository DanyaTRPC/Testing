<template>
 <form  @submit.prevent="submitHandler">
    <div>
        <UserAddIcon class="icon5"/>
        <div class="blockRegestration">
            <h3 >Реєстрація</h3>
            <input type="email" placeholder="Пошта"  v-model="email" />
      <br>
      <br>
      <input type="text" placeholder="П.І.Б"  v-model="name" />
      <br>
      <br>
      <input type="password" placeholder="Пароль"  v-model="password" />
      <br>
      <br>
      <input type="password" placeholder="Повтор паролю" v-model="confirmPassword"/>
      <br>
      <br>
      <loader class="loader" v-if="loading" />
      <p>{{errorMessage}}</p>
       <button>Зареєструватися</button>
        </div>
    </div>
     </form>
</template>

<script>
import { UserAddIcon } from "@vue-hero-icons/outline"
    export default {
        name: 'Registration',
 components: { UserAddIcon
  },
    data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      errorMessage: ""
    };
  },
  methods: {
    async submitHandler() {
      if (
        !this.email ||
        !this.name ||
        !this.password ||
        !this.confirmPassword
      ) {
        this.errorMessage = "Усі поля мають бути заповнені";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Паролі не співпадають";
        return;
      }
      try {
        await this.$store.dispatch("Registration", {
          email: this.email,
          password: this.password,
          name: this.name
        });
        this.$router.push("/MyAccount");
      } catch (error) {
        console.log(this.error);
        this.errorMessage = this.error;
        console.log(this.errorMessage);
      }
    }
  }
};
</script>
