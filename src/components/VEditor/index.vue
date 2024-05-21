<template>
  <QuillEditor
      ref="editor"
      contentType="html"
      v-model:content="value"
      :options="editorOption"
  >
  </QuillEditor>
</template>

<script>
import { defineComponent } from 'vue'
import Quill from 'quill'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.core.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import ImageUploader from 'quill-image-uploader';
import htmlEditButton from "quill-html-edit-button";
Quill.register('modules/imageUploader', ImageUploader);
Quill.register("modules/htmlEditButton", htmlEditButton);

export default defineComponent({
  name: "VEditor",

  components: {
    QuillEditor
  },

  emits: ['update:modelValue'],

  props: {
    modelValue: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      content: '',
      editorOption: {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          htmlEditButton: {
            debug: true,
            msg: "Редактировать содержимое в формате HTML",
            okText: "Сохранить",
            cancelText: "Отмена",
            // buttonHTML: "HTML",
            buttonTitle: "HTML",
            syntax: false,
            prependSelector: 'div#myelement',
            editorModules: {}
          },
        },
        placeholder: 'Введите текст ...',
      },
    }
  },

  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.content = newValue;
        this.$emit('update:modelValue', newValue);
      },
    },
  },

  watch: {
    modelValue(newValue) {
      if (newValue === this.content) {
        return;
      }
      this.$refs.editor.setHTML(this.modelValue);
    },
  },

  methods: {
  }
});
</script>

<style lang="scss">
.ql-editor {
  min-height: 300px;
}
</style>
