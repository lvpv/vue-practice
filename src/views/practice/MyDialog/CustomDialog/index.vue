<script setup lang="ts">
defineOptions({
  name: "CustomDialog"
});

interface Props {
  isShow: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false
});

const emits = defineEmits(["update:isShow"]);

const changeValue = () => {
  emits("update:isShow", !props.isShow);
};
const handlerClose = () => {
  emits("update:isShow", false);
};
</script>

<template>
  <el-dialog :model-value="isShow" title="Tips">
    <div class="mb-2">This is a message</div>
    <el-button type="primary" @click="changeValue">切换</el-button>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handlerClose">Cancel</el-button>
        <el-button type="primary" @click="handlerClose"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
