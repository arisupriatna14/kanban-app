import Vue from 'vue'
import Vuex from 'vuex'
import database from './firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    KANBAN_TASK(state, payload) {
      state.tasks = payload
    }
  },  
  actions: {
    addTask(context, payload) {
      const defaultStatus = 0;
      const postTask = database.ref('kanban').child('/task').push()
      postTask.set({
        id: postTask.key,
        statusTask: defaultStatus,
        titleTask: payload
      })
    },

    getAllTask({ commit }) {
      database
        .ref('kanban/task')
        .on('value', function(snapshot) {
          commit('KANBAN_TASK',snapshot.val())
        });
    },

    updateTask(context, payload) {
      let getTask = this.state.tasks
      for (let key in getTask) {
        if (payload.id === getTask[key].id) {
          database
            .ref(`kanban/task/${payload.id}`)
            .set({
              id: getTask[key].id,
              statusTask: payload.updateStatusTask,
              titleTask: getTask[key].titleTask,
            })
        }
      }
    },

    deleteTask(context, payload) {
      database.ref(`kanban/task/${payload.id}`).remove();
    }
  }
})
