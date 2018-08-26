<template>
  <div class="home">
    <img alt="Vue logo" src="https://cdn-images-1.medium.com/max/896/1*YoHuRmT4KzdPH6iMdQ6QIQ.png" width="250">
    <v-container grid-list-md>
      <v-btn color="blue" @click="submitTask" class="white--text">Add New Task</v-btn>
      <br><br>
      <v-layout row wrap>
        <Backlog></Backlog>
        <Todo></Todo>
        <Doing></Doing>
        <Done></Done>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Backlog from '@/components/Backlog.vue'
import Todo from '@/components/Todo.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'
import swal from 'sweetalert'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Backlog,
    Todo,
    Doing,
    Done
  },
  data: () => ({

  }),
  methods: {
    ...mapActions([
      'addTask',
      'getAllTask'
    ]),
    submitTask() {
      swal({
        title: 'Input your task',
        buttons: 'submit',
        content: 'input',
      })
        .then((result) => {
          if (result.length === 0) {
            swal('Task tidak boleh kosong', '', 'warning')
          } else {
            this.addTask(result)
            swal('Add task success', '', 'success');
          }
        })
        .catch(() => {
          swal('Gagal', '', 'error')
        })
    },
  },
};
</script>
