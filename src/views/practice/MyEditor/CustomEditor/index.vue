<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
defineOptions({
  name: "CustomEditor"
});

interface Props {
  editorValue: string;
}
withDefaults(defineProps<Props>(), {
  editorValue: ""
});

const emits = defineEmits(["update:editorValue"]);

const editorRef = shallowRef();

const mode = "default";

const htmlValue = ref("");

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = editor => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const handlerChange = () => {
  emits("update:editorValue", htmlValue.value);
};
</script>

<template>
  <div class="wangeditor">
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="htmlValue"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handlerChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
