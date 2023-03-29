<script setup lang="ts">
import { ref } from "vue";
import CustomEditor from "./CustomEditor/index.vue";
defineOptions({
  name: "MyEditor"
});
const editorValue = ref<string>("");
</script>

<template>
  <div class="main !m-2">
    <el-card>
      <template #header>
        <h3>练习编辑器使用</h3>
      </template>
      <div>
        <h3>编辑器的内容是：</h3>
        <div v-html="editorValue" class="p-2" />
      </div>
      <el-divider />
      <CustomEditor v-model:editorValue="editorValue" />
    </el-card>
  </div>
</template>

<style scoped></style>
