<template>
  <div class="row subjects">
    <div v-if="topics.length" class="row">
      <div class="col-2">
        <ul class="list-unstyled">
          <li v-for="topic in topics" :key="topic.id">
            <router-link :to="{ name: 'TopicShow', params: { id: topic.id }}">{{topic.title_en}}</router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
    <div v-else>
      No topics created
    </div>
    
    
  </div>
</template>

<script>
import { useTopicsStore } from "@/stores/topics"
import {computed } from 'vue'

export default {
  name: 'Topics',
  setup() {
    const topicStore = useTopicsStore();
    return {
      topics: computed(() => topicStore.topics), 
    } 
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 40px;
  }
  ul{
        border-right: 1px solid #000;
  }
  a {
    text-decoration: none;
    &.router-link-active {
      text-decoration: underline;
    }
  }

</style>
