<template>
  <div class="home">
    <div class="home__title">Vue.js TypeScript Todo App</div>

    <OrderList v-model="tasks" listStyle="height:auto" dataKey="_id">
      <template #header> List of Tasks </template>
      <template #item="slotProps">
        <div class="home__item">
          <div class="home__item-title">{{ slotProps.item.name }}</div>
          <div class="home__item-btns">
            <Button
              icon="pi pi-check-circle"
              class="p-button-rounded p-button-text"
              @click="setTaskComplete(slotProps.item)"
              v-if="slotProps.item.completed"
            />
            <Button
              icon="pi pi-circle-off"
              class="p-button-rounded p-button-info p-button-text"
              @click="setTaskComplete(slotProps.item)"
              v-else
            />
            <Button
              icon="pi pi-times"
              class="p-button-rounded p-button-danger p-button-text"
              @click.prevent="deleteTask(slotProps.item)"
            />
          </div>
        </div>
      </template>
    </OrderList>
    <Toast position="top-right" />
  </div>
</template>

<script lang="ts">
import Task from "../models/Task";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      tasks: [] as Task[],
      deletedTasks: [] as Task[],
      completedTasks: [] as Task[],
    };
  },
  computed: {},
  methods: {
    setTaskComplete(task: Task): void {
      this.$store.commit("completeTask", task);
    },
    deleteTask(task: Task) {
      this.$toast.add({
        severity: "error",
        summary: "Task Deleted",
        detail: `Task ${task.name} deleted`,
        life: 3000,
      });
      this.$store.commit("deleteTask", task);
    },
  },
  mounted() {
    this.tasks = this.$store.state.tasks;
  },
});
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
