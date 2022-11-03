<template>
<form @submit.prevent="submitHandler">
    <div>
        <LoginIcon class="icon4"/>
        <div class="blockEnt">
        <h3 >Вхід</h3>
      <input type="email" placeholder="Пошта"  v-model="email" />
      <br>
      <br>
      <input type="password" placeholder="Пароль"  v-model="password" />
      <br>
      <br>
      <loader class="loader" v-if="loading" />
      <p>{{errorMessage}}</p>
       <button>Увійти</button>
        </div>
    </div>
     </form>
</template>

<script>
import { LoginIcon } from "@vue-hero-icons/outline"
    export default {
        name: 'Enter',
components: { LoginIcon
  },
    data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async submitHandler() {
      if (!this.email || !this.password) {
        this.errorMessage = "Усі поля мають бути заповнені";
        return;
      }
      if (this.password.length < 6) {
        this.errorMessage = "Довжина пароля має бути більше 6 символів";
        return;
      }
      try {
        await this.$store.dispatch("Enter", {
          email: this.email,
          password: this.password
        });
        this.$router.push("/MyAccount");
      } catch (error) {
        this.errorMessage = this.error;
      }
    }
  }
};
</script>

