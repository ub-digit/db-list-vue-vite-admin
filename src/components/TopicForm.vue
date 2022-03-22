<template>
  <div class="edit-topic-wrapper">
    <div v-if="topic_initial_state">
          <div class="row">
            <div class="col">
              <h1>{{props.title}}</h1>
            </div>
            <div class="col-auto align-self-end">
                <router-link v-if="topic_initial_state.id" class="btn btn-light me-2" :to="{name: 'TopicShow', params: {id: topic_initial_state.id}}">Cancel</router-link>
              <FormKit
                :classes="{
                  outer: 'd-inline-block',
                  input: 'btn btn-primary'
                }"
                @click.prevent="saveTopic"
                type="submit"
                label="Save"
                :disabled="!isDirty"
              />
            </div>
        </div>

        <div class="mb-3">
          <FormKit 
            type="text" 
            :classes="{
              input: 'form-control'
            }"
            label="English"
            name="topic_initial_state.title_en"
            v-model="topic_initial_state.title_en"
          />
        </div>
        <div class="mb-3">
          <FormKit 
            type="text" 
            :classes="{
              input: 'form-control'
            }"
            label="Swedish"
            name="topic_initial_state.title_sv"
            v-model="topic_initial_state.title_sv"
          />
        </div>

        <div id="sub-topics-wrapper" v-if="topic_initial_state.sub_topics">
          <h2>Subtopics</h2>
          <ul id="sub-topics-list" class="list-unstyled">
                <li :class="{is_marked_for_removal:sub_topic.marked_for_removal}" v-for="(sub_topic, index) in topic_initial_state.sub_topics" :key="index">
                  <div class="row">                    
                    <div>ID: ({{sub_topic.id}})</div>
                    <div class="col">
                      <FormKit
                        type="text"
                        :classes="{
                          input: 'form-control mb-3'
                        }"
                        label="English"
                        :name="sub_topic.id + '-en'"
                        v-model="sub_topic.title_en"
                      />
                      <FormKit
                        type="text"
                        :classes="{
                          input: 'form-control mb-3'
                        }"
                        label="Swedish"
                        :name="sub_topic.id + '-sv'"
                        v-model="sub_topic.title_sv"
                      />
                    </div>
                    <div class="col-auto">
                      <button @click.prevent="removeSubTopic(index)" :disabled="sub_topic.marked_for_removal" class="btn btn-danger">Remove</button>
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
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { computed, ref } from 'vue'
import {useTopicsStore} from '@/stores/topics'
import _ from 'lodash'

export default {
  name: 'TopicForm',
  emits: ['saveTopic'],
  props: ['topic', 'title'],
  setup(props, ctx) {
    const router = useRouter();
    const route = useRoute();
    const store = useTopicsStore();
    const topic = props.topic;
    const topic_initial_state = ref(_.cloneDeep(topic));
    const isDirty = computed(() => _.isEqual(topic, topic_initial_state.value) ? false: true);
    let isSaved = false;

    onBeforeRouteLeave(() => {
      if (isDirty.value && !isSaved) {
        const answer = window.confirm("It looks like you have been editing something. If you leave before saving, your changes will be lost.");
        if (!answer) return false;
      }
    })
    const saveTopic = () => {
      const sub_topics_to_keep = topic_initial_state.value.sub_topics.filter((item) => {
        return !item.marked_for_removal;
      })
      topic_initial_state.value.sub_topics = sub_topics_to_keep;
        ctx.emit('saveTopic', topic_initial_state.value);
        isSaved = true;
    }

    const addSubTopic = () => {
      const subtopic = {
        id: null,
        title_sv: '',
        title_en: ''
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
      removeSubTopic,
      isDirty,
      props
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
