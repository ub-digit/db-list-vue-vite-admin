
import { defineStore } from "pinia";
import _ from 'lodash'; 

export const useTopicsStore = defineStore({
  id: "topics",
  state: () => {
    return {
        topics:  [
          {
            id: 1,
            title_sv: "Ekonomi",
            title_en: "Economy",
            sub_topics: [
              {
                id:21, 
                title_sv: "Ekonomi sub 21",
                title_en: "Economy sub 21",
                can_be_removed: false 
              },
              {
                id:22, 
                title_sv: "Ekonomi sub 22",
                title_en: "Economy sub 22",
                can_be_removed: false
              },
              {
                id:23, 
                title_sv: "Ekonomi sub 23",
                title_en: "Economy sub 23",
                can_be_removed: true
              }
            ]
          },
          {
            id: 2,
            title_sv: "Gender studies sv 23",
            title_en: "Gender studies 23",
            sub_topics:[]
          },
          {
            id: 3,
            title_sv: "Teknologi",
            title_en: "Technology",
            sub_topics:[]
          },
        ]
  
      } 
  
  },
  getters: {
    getTopicById: (state) => (id) => {
        try {
          return state.topics.find((topic) => topic.id === parseInt(id) );
        } catch (err) {
          console.log(err.message);
        }
      }
  },
  actions: {
    removeTopic(payload) {
        try {
            this.topics.splice(this.topics.indexOf(payload), 1)
        } catch (err)  {
          console.log(err.message)
        }
    },
    updateTopic(payload) {
        try {
            // http://shzhangji.com/blog/2018/04/17/form-handling-in-vuex-strict-mode/
            var obj = this.topics.find(item => item.id === payload.id);
            if (obj) {
                _.assign(obj,payload);
            }
        } catch (err) {
          console.log(err.message);
        }
    },
    newTopic(payload) {
      try {
        payload.id = parseInt(_.now());
        this.topics.push(payload)
      } catch (error) {
        
      }
    }
  }
});
