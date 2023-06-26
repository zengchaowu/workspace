<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { RxDocument } from "rxdb";
import { initRxdb, getCollection } from "@/database/rxdb/index";
const projects = ref<Array<RxDocument>>([]);
onMounted(async () => {
  await initRxdb();
  const collection = await getCollection("project");
  if (collection) {
    const observable = collection.find().$;
    observable.subscribe((records) => {
      projects.value = records;
    });
  }
});

const onAppend = async () => {
  const collection = await getCollection("project");
  collection?.insert({ projectId: new Date().getTime() + "" });
};
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <div>This is an auto-imported component</div>
    <button @click="onAppend">添加新项目</button>
    <div class="flex flex-col">
      <div v-for="project in projects">
        {{ project }}
      </div>
    </div>
  </div>
</template>
