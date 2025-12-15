<script>
export default {
  data() {
    return {
      confirm: false
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
        <header>
          <div class="logo">
            <img src="../assets/images/logo.png" alt="Logo" />
          </div>

          <button @click="confirmUser" class="wrapper">Explore</button>
        </header>
        <!-- Arrow button (bottom center) that also navigates to the confirmation page -->
        <button @click="confirmUser" class="arrow-btn" aria-label="Go to confirmation">
          <img src="../assets/images/curved-arrow.png" alt="Next">
        </button>
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
  border: none;
  background: transparent;
  padding: 0;
}

.arrow-btn img {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%) rotate(30deg);
  width: 5.6em;
  height: auto;
  padding: 0.5em;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.12) inset;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.35)) brightness(1.08) contrast(1.25) saturate(1.15);
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
  animation: pulse 3s ease-in-out infinite;
}

.arrow-btn:hover img {
  transform: translateX(-50%) translateY(-6px) rotate(30deg) scale(1.06);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.45), 0 4px 8px rgba(0, 0, 0, 0.18) inset;
  animation-play-state: paused;
}

@keyframes pulse {
  0% { transform: translateX(-50%) rotate(30deg) scale(1); }
  50% { transform: translateX(-50%) rotate(30deg) scale(1.03); }
  100% { transform: translateX(-50%) rotate(30deg) scale(1); }
}
</style>