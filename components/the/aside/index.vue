<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col">
      <div
        v-for="i in 5"
        :key="i"
        class="p-2 cursor-pointer hover:bg-light-300"
      >
        Menu{{ i }}
      </div>
    </div>
    <div class="flex flex-col">
      <div
        v-for="i in 2"
        :key="i"
        class="p-2 cursor-pointer hover:bg-light-300 border-none"
      >
        Menu{{ i }}
      </div>
    </div>
  </div>
</template>
