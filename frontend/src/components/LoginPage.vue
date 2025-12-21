<script>
export default {
  data() {
    return {
      confirm: false,
      ask: false
    }
  },
  methods: {
    confirmUser() {
      this.confirm = true;
      this.$router.push('/confirm');
    }
  }
}
</script>

<template>
  <div class="page-wrapper">
    <transition name="content">
      <div class="login-page" v-if="!confirm">
        <!-- Arrow button (bottom center) that also navigates to the confirmation page -->
        <button @click="confirmUser" class="arrow-btn" aria-label="Go to confirmation">
          <span class="arrow-mark" aria-hidden="true"></span>
        </button>

        <i class="fi fi-rr-interrogation help-icon" aria-hidden="true" @click="ask = true"></i>

        <div v-if="ask"></div>
      </div>
    </transition>
  </div>
</template>


<style>
.content-enter-active,
.content-leave-active {
  transition: opacity 0.35s ease;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
}

.login-page {
  background-image: url('../assets/images/1.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

header {
  padding: 0 1.5em;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.logo {
  order: 1;
  padding-top: 1em;
}

.logo img {
  width: 4em;
  height: 4em;
}

.wrapper {
  order: 2;
  background-color: var(--color-accent);
  color: #fff;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.662);
}

.arrow-btn {
  position: relative;
  width: 5.6em;
  height: 5.6em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: transform 220ms ease, box-shadow 220ms ease;
  animation: pulse 3s ease-in-out infinite;
}

.arrow-mark {
  position: absolute;
  top: 380%;
  left: 425%;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/love-arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  filter: invert(1) sepia(0.50) saturate(7) hue-rotate(3deg) brightness(.93) contrast(1);
}


@keyframes pulse {
  0% { transform: translate(-50%) scale(1); }
  50% { transform: translate(-50%) scale(1.05); }
  100% { transform: translate(-50%) scale(1); }
}

.help-icon {
  position: fixed;
  right: 1.25em;
  bottom: 1.25em;
  font-size: 1.5em;
  line-height: 1;
  color: #fff;
  filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.35));
  cursor: pointer;
  z-index: 10;
}
</style>