import VModal from "./components/VModal/index.vue";
import VGlModalWrapper from "./components/VGlModalWrapper";
import VPaymentModal from "@/modals/VPaymentModal";
import VSelectLessonModal from "@/modals/VSelectLessonModal";
import VApplicationModal from "@/modals/VApplicationModal";
import VDeleteConfirmModal from "@/modals/VDeleteConfirmModal";
import VCourseStudents from "@/modals/VCourseStudentsModal";
import VSelectTaskModal from "@/modals/VSelectTaskModal";
import VFInishTaskModal from "@/modals/VFInishTaskModal";
import VConfirmFinishTask from "@/modals/VConfirmFinishTask";

export default {
  install(app) {
    app.config.globalProperties.vGlModal = {
      show(obj = {
        modalName: '',
        modalLocked: false,
        modalTitle: '',
        modalClasses: '',
        modalCustom: false,
        modalOverlayDisable: false,
        modalWidth: 0,
        component: '',
        componentProps: {},
      }) {
        app.config.globalProperties.eventBus.emit('v-modal--show', obj)
      },
      update(name, obj) {
        app.config.globalProperties.eventBus.emit(`v-modal--${name}-update`, obj);
      },
      hide(name) {
        app.config.globalProperties.eventBus.emit('v-modal--hide', name);
      },
      hideAll() {
        app.config.globalProperties.eventBus.emit('v-modal--hide-all');
      },
    };

    app.component('v-modal-wrapper', VGlModalWrapper)
    app.component('v-modal', VModal);
    app.component('v-payment-modal', VPaymentModal);
    app.component('v-application-modal', VApplicationModal);
    app.component('v-select-lesson-modal', VSelectLessonModal);
    app.component('v-delete-confirm-modal', VDeleteConfirmModal);
    app.component('v-course-students-modal', VCourseStudents);
    app.component('v-select-task-modal', VSelectTaskModal);
    app.component('v-finish-task-modal', VFInishTaskModal);
    app.component('v-confirm-finish-task-modal', VConfirmFinishTask);
  }
}
