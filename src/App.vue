<template>
  <v-app>
    <!-- Cursor -->
    <div>
      <!-- Outer Circle -->
      <div ref="outerCircle" class="circle-cursor circle-cursor-outer" :style="{ borderColor: getContrastColor() }">
      </div>
      <!-- Inner Circle -->
      <div ref="innerCircle" class="circle-cursor circle-cursor-inner" :style="{ backgroundColor: getContrastColor() }">
      </div>
    </div>
    <!-- Cursor -->
    <Nav_Bar></Nav_Bar>
    <RouterView></RouterView>
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";
import Nav_Bar from './components/Nav_Bar.vue';

export default {
  name: 'App',

  components: {
    Nav_Bar,
    RouterView
  },

  data() {
    return {
      outerX: 0,
      outerY: 0,
      innerX: 0,
      innerY: 0,
      requestId: null,
    };
  },

  mounted() {
    const outerCircle = this.$refs.outerCircle;
    const innerCircle = this.$refs.innerCircle;

    // Mouse move event listener
    document.addEventListener("mousemove", (e) => {
      this.innerX = e.clientX;
      this.innerY = e.clientY;
      innerCircle.style.transform = `translate(${this.innerX - 2}px, ${this.innerY - 2}px)`;
    });

    // Function for the outer circle to follow the inner circle
    const animate = () => {
      this.outerX += (this.innerX - this.outerX) * 0.1;
      this.outerY += (this.innerY - this.outerY) * 0.1;

      outerCircle.style.transform = `translate(${this.outerX - 9}px, ${this.outerY - 9}px)`;

      // Call animate again on the next frame
      this.requestId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Listener de mousedown para el click
    document.addEventListener("mousedown", this.handleMouseDown);
  },

  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleMouseDown);
  },
  methods: {
    handleMouseDown() {
      const innerCircle = this.$refs.innerCircle;

      innerCircle.classList.add("grow");
      setTimeout(() => {
        innerCircle.classList.remove("grow");
      }, 300);
    }
  }
};
</script>

<style>
/* Para el cursor */
.circle-cursor {
  position: absolute;
  pointer-events: none;
  z-index: 1000;
}

.circle-cursor-outer {
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 50%;
  transition: all 0.1s ease;
}

.circle-cursor-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transition: all 0.1s ease;
}

.grow {
  animation: growAnimation 0.3s forwards;
}

@keyframes growAnimation {
  0% {
    width: 6px;
    height: 6px;
  }

  50% {
    width: 10px;
    height: 10px;
  }

  100% {
    width: 6px;
    height: 6px;
  }
}
</style>
