<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      showConfirmation: false,
      privateUsername: 'AnniversaryInItaly',
      privatePassword: '12032024',
      errorMessage: '',
      confirm: false
    }  
  },
  methods: {
    handleSubmit() {
      // Perform login logic here
      // If login is successful, set showConfirmation to true
      this.showConfirmation = true
    },
    returnToLogin() {
      this.$router.push('/');
    }
  }
}
</script>

<template>
  <main class="content">
      <!-- Only this part transitions -->
      <transition name="fade" mode="out-in">
        <!-- Login Form -->
        <section v-if="!showConfirmation" key="login" class="login-box">
          <form @submit.prevent="handleSubmit" class="postcard-form">
              <input type="text" id="username" v-model="username" required placeholder="Recipient">
              <input type="password" id="password" v-model="password" required placeholder="Sender">
          </form>
        </section>

        <!-- Confirmation Message -->
        <section v-else key="confirm" class="login-box">
          <h1>Login Successful!</h1>
          <p>Welcome, {{ username }}.</p>
          <button @click="returnToLogin">Go Back</button>
        </section>
      </transition>
  </main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/2.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0ece7;
}

/* Positioning helper so we can place inputs precisely over the postcard artwork */
main {
  position: relative;
}

.confirm img {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.return {
  color: var(--color-accent);
  text-shadow: none;
}

.content {
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10em;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Form positioned to match the 'TO:' and 'FROM:' lines in the background image */
.postcard-form {
  position: absolute;
  top: 11%;           
  left: 30%;        
  width: 12%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 3.1em;       
  background: transparent;
}

.form-group {
  display: flex;
  align-items: baseline; 
  gap: 0.8rem;
}

.form-group label {
  margin-bottom: 0;
  transform: translateY(1.5px);
}

input {
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 1.3em;
  line-height: 1.25rem;
  font-family: 'Homemade Apple', "Inter", cursive !important;
}

input:focus,
input:active,
input:focus-visible {
  outline: none;
  box-shadow: none;
  border: none;
}

/* Make placeholder text more transparent to blend with the postcard artwork */
input::placeholder {
  color: rgba(0, 0, 0, 0.28);
  opacity: 1; /* ensure consistent rendering */
  font-family: 'Homemade Apple', cursive;
}

/* Vendor prefixes for broader browser support */
input::-webkit-input-placeholder { color: rgba(0,0,0,0.28); }
input:-ms-input-placeholder { color: rgba(0,0,0,0.28); }
input::-ms-input-placeholder { color: rgba(0,0,0,0.28); }
</style>
