
import { defineStore } from "pinia";

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
          },
        ]
  
      } 
  
  },
  getters: {
  },
  actions: {

  },
});
