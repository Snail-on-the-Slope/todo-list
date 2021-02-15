<template>
  <div class="create-task">
    <div class="create-task__title">Create Tasks</div>
    <div class="create-task__form p-formgroup-inline">
      <span class="create-task__input p-float-label">
        <InputText id="todoName" type="text" v-model="taskName" />
        <label for="todoName">What you want to do next?</label>
      </span>
      <Button label="Create" @click="createTask()" />
    </div>
    <Toast position="top-right" />
  </div>
</template>

<script lang="ts">
import Task from "../models/Task";
import Vue from "vue";

export default Vue.extend({
  name: "Create",
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    createTask(): void {
      if (this.taskName !== "") {
        let newTask = new Task(this.taskName);
        this.$store.commit("setTask", newTask);
        this.taskName = "";
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Task added",
          life: 3000,
        });
      }
    },
  },
});
</script>

<style scoped lang="scss">
.create-task {
  &__title {
    font-size: 26px;
    font-weight: bold;
  }
  &__form {
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;
  }
  &__input {
    width: 100%;
    max-width: 250px;
    margin-right: 15px;
    input {
      width: 100%;
    }
  }
}
</style>
