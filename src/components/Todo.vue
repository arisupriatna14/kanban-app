<template>
  <v-flex lg3 md6 sm12 xs12>
    <v-card dark color="cyan">
      <v-card-text class="white--text header-text">TODO</v-card-text>
    </v-card>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex v-for="(task, index) in tasks" v-if="task.statusTask === 1" :key="index">
            <v-card color="cyan darken-3" class="white--text">
              <v-card-title primary-title>
                <div class="headline">{{ task.titleTask }}</div>
              </v-card-title>
              <br>
              <v-card-actions>
                <v-flex>
                  <v-btn color="blue" @click="updateStatus(task.id, 0)">
                    <v-icon>fa fa-arrow-left</v-icon>
                  </v-btn>
                  <v-btn color="blue" @click="updateStatus(task.id, 2)">
                    <v-icon>fa fa-arrow-right</v-icon>
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
    ...mapActions(['updateTask']),
    updateStatus(id, status) {
      let payload = {
        id: id,
        updateStatusTask: status
      }
      this.updateTask(payload);
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
