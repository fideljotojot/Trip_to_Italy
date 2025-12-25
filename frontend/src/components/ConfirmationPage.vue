<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      showConfirmation: false,
      privateUsername: 'BeatrixInItaly',
      privatePassword: '12032024',
      errorMessage: '',
      confirm: false
    }  
  },
  watch: {
    username() {
      this.checkAndSubmit();
    },
    password() {
      this.checkAndSubmit();
    }
  },
  methods: {
    checkAndSubmit() {
      // Clear any previous error message when user is still typing
      this.errorMessage = '';
      
      // Only submit when both fields are filled AND password has at least 8 characters
      if (this.username && this.password && this.password.length >= 8) {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      // Check if credentials match
      if (this.username === this.privateUsername && this.password === this.privatePassword) {
        // Show confirmation message
        this.showConfirmation = true;
      } else {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
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
          <div class="return">
            <a @click.prevent="returnToLogin" href="#" class="return-link">
              <img src="../assets/images/left-arrow.gif" alt="Return Icon" width="50" height="auto">
            </a>
          </div>
          <form @submit.prevent="handleSubmit" class="postcard-form">
              <input type="text" id="username" v-model="username" required placeholder="Recipient">
              <input type="password" id="password" v-model="password" required placeholder="Sender">
          </form>
          
          <!-- Error Alert Overlay -->
          <div v-if="errorMessage" class="error-overlay" @click="errorMessage = ''">
            <div  class="error-alert" @click.stop>
              <div class="error-header">
                <i class="fi fi-rr-triangle-warning"></i>
                <p>{{ errorMessage }}</p>
              </div>
              <button @click="errorMessage = ''">OK</button>
            </div>
          </div>
        </section>

        <!-- Confirmation Message -->
        <div class="overlay" v-else key="confirm" @click="goToHome">
          <section class="overlay-content">
            <h1>Login Successful!</h1>
            <p>Welcome to Italy, my love.</p>
          </section>          @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
        </div>

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

/* Ensure background scales properly on larger screens */
@media (min-width: 1920px) {
  main {
    background-size: 80%;
  }
}

@media (min-width: 2560px) {
  main {
    background-size: 60%;
  }
}

/* Positioning helper so we can place inputs precisely over the postcard artwork */
main {
  position: relative;
}


.return {
  position: relative;
  top: 1% ;
}

.content {
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 2em;
}

@media (min-width: 768px) {
  .content {
    padding: 4em;
  }
}

@media (min-width: 1024px) {
  .content {
    padding: 6em;
  }
}

@media (min-width: 1440px) {
  .content {
    padding: 10em;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Form positioned to match the 'TO:' and 'FROM:' lines in the background image */
.postcard-form {
  position: absolute;
  top: 10%;
  left: 29%;
  width: 15%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 3.5em;
  background: transparent;
}

/* Tablet */
@media (max-width: 1023px) {
  .postcard-form {
    top: 12%;
    left: 23%;
    width: 20%;
    gap: 1.8em;
  }
}

/* Laptop */
@media (min-width: 1024px) and (max-width: 1439px) {
  .postcard-form {
    top: 11%;
    left: 25%;
    width: 17.5%;
    gap: 3.5em;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .postcard-form {
    top: 11%;
    left: 28%;
    width: 15%;
    gap: 3.2em;
  }
}


input {
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 1em;
  line-height: 1.25rem;
  /* font-family: 'Homemade Apple', "Inter", cursive !important; */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif !important;
  color: rgba(0, 0, 0, 0.432);
}

/* Responsive font sizes */
@media (min-width: 768px) {
  input {
    font-size: 1.1em;
  }
}

@media (min-width: 1024px) {
  input {
    font-size: 1.2em;
  }
}

@media (min-width: 1440px) {
  input {
    font-size: 1.3em;
  }
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
  /* font-family: 'Homemade Apple', cursive; */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
}

/* Vendor prefixes for broader browser support */
input::-webkit-input-placeholder { color: rgba(0,0,0,0.28); }
input:-ms-input-placeholder { color: rgba(0,0,0,0.28); }
input::-ms-input-placeholder { color: rgba(0,0,0,0.28); }

.error-message {
  color: #d32f2f;
  font-size: 0.9em;
  margin-top: 0.5em;
  font-family: 'Inter', sans-serif;
  text-align: center;
  width: 100%;
}

.error-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000012;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.error-alert {
  top: 1%;
  background-color: #fff;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.719);
  text-align: center;
  max-width: 400px;
  animation: slideDown 0.3s ease;
  height: fit-content;
}

.error-header {
  display: flex;
  align-items: center;
  gap: 1em;
}

.error-alert i {
  font-size: 2em;
  color: #f44336;
}

.error-alert p {
  color: #333;
  font-size: 1.1em;
  margin: 1em 0;
  font-family: 'Inter', sans-serif;
}

.error-alert button {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 0.7em 2em;
  border-radius: 0.5em;
  font-size: 1em;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.error-alert button:hover {
  background-color: #d32f2f;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
