<script setup lang="ts">
import { ref } from "vue";
import CustonDialog from "./CustomDialog/index.vue";
defineOptions({
  name: "MyDialog"
});
const isShow = ref<boolean>(false);

const showDialog = () => {
  isShow.value = true;
};
</script>

<template>
  <div class="main !m-2">
    <el-card>
      <template #header>
        <h3>对话框练习</h3>
      </template>
      <div>
        <h4 class="mb-2">是否显示对话框：{{ isShow }}</h4>
        <el-button type="primary" @click="showDialog">显示对话框</el-button>
      </div>
    </el-card>
    <CustonDialog v-model:isShow="isShow" />
  </div>
</template>

<style scoped></style>
