<template>
  <v-flex lg3 md6 sm12 xs12>
    <v-card dark color="lime">
      <v-card-text class="white--text header-text">DONE</v-card-text>
    </v-card>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex v-for="(task, index) in tasks" v-if="task.statusTask === 3" :key="index">
            <v-card color="lime darken-3" class="white--text">
              <v-card-title primary-title>
                <div class="headline">{{ task.titleTask }}</div>
              </v-card-title>
              <br>
              <v-card-actions>
                <v-flex>
                  <v-btn color="blue" @click="deleteTaskById(task.id)">
                    <v-icon>fa fa-trash-o</v-icon>
                  </v-btn>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions(['deleteTask']),
    deleteTaskById(id) {
      let payload = { 
        id: id 
      }
      this.deleteTask(payload)
    }
  },
  computed: {
    ...mapState(['tasks'])
  }
};
</script>

<style scoped>
.header-text {
  font-size: 16px;
  font-weight: bold;
}
</style>
