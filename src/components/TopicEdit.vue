<template>
  <div class="edit-topic-wrapper">
    <form v-if="topic_initial_state">
          <div class="row">
            <div class="col">
              <h1>Edit topic</h1>
            </div>
            <div class="col-auto align-self-end">
              <input class="btn btn-primary" type="submit" @click.prevent="saveTopic" value="Save">
            </div>
        </div>
        <div class="mb-3">
          <label for="topic-title-en">English</label>
          <input  class="form-control" v-model="topic_initial_state.title_en" type="text"  name="topic-title-en" id="topic-title-en">
        </div>
        <div class="mb-3">
          <label for="topic-title-en">Swedish</label>
          <input class="form-control" v-model="topic_initial_state.title_sv" type="text" name="topic-title-sv" id="topic-title-sv">
        </div>

        <div id="sub-topics-wrapper" v-if="topic_initial_state.sub_topics">
          <h2>Subtopics</h2>
          <ul id="sub-topics-list" class="list-unstyled">
                <li :class="{is_marked_for_removal:sub_topic.marked_for_removal}" v-for="(sub_topic, index) in topic_initial_state.sub_topics" :key="index">
                  <div class="row">                    
                    <div>ID: ({{sub_topic.id}})</div>
                    <div class="col">
                      <label :for="sub_topic.id + '-en'">English</label>
                      <input :name="sub_topic.id + '-en'" class="form-control mb-3" v-model="sub_topic.title_en" type="text">
                      <label :for="sub_topic.id + '-sv'">Swedish</label>
                      <input :name="sub_topic.id +'-sv'" class="form-control" v-model="sub_topic.title_sv" type="text">
                    </div>
                    <div class="col-auto">
                      <button @click.prevent="removeSubTopic(index)" :disabled="!sub_topic.can_be_removed" class="btn btn-danger">Remove</button>
                    </div>
                  </div>
                </li>
          </ul>
          <div class="row">
            <div class="col align-self-start">
              <button class="btn btn-light" @click.prevent="addSubTopic">New subtopic +</button>
            </div>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import {useTopicsStore} from '@/stores/topics'
import {cloneDeep} from 'lodash'

export default {
  name: 'TopicEdit',
  setup() {
    const route = useRoute();
    const store = useTopicsStore();
    const topic = store.getTopicById(route.params.id);
    const topic_initial_state = ref(cloneDeep(topic));

    const saveTopic = () => {
      console.log(topic)
      store.updateTopic(topic_initial_state.value);
    }

    const addSubTopic = () => {
      const subtopic = {
        id: null,
        title_sv: '',
        title_en: '',
        can_be_removed: true
      }
      topic_initial_state.value.sub_topics.push(subtopic);
    } 
    const removeSubTopic = (index) => {
      if (confirm("Are you sure?")) {
        topic_initial_state.value.sub_topics[index].marked_for_removal = true;
      }
    }
  

    return {
      topic_initial_state,
      saveTopic,
      addSubTopic,
      removeSubTopic
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .edit-topic-wrapper {
    #sub-topics-wrapper {
      margin-left: 20px;
      #sub-topics-list {
        li  {
          padding: 20px;
          margin-bottom: 20px;
          border: 1px dotted #ccc;
          &.is_marked_for_removal {
            opacity: .5;
          }
        }
      }
    }
  }
</style>
