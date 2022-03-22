<template>
    <TopicForm :topic="topic" title="Edit topic" @saveTopic="saveTopic" />
</template>

<script>
import TopicForm from "../components/TopicForm.vue"
import {useTopicsStore} from '@/stores/topics'
import {useRoute, useRouter} from 'vue-router'
import _ from 'underscore'
export default {
    name: 'TopicEdit',
    setup() {
        const store = useTopicsStore();
        const route = useRoute();
        const router = useRouter();
        const topic = store.getTopicById(route.params.id);

        const saveTopic = async (topic) => {
            await store.updateTopic(topic);
            router.push({name: 'TopicShow', params: {id: topic.id }});
        }

        return {
            topic,
            saveTopic
        }
    },
    components: { TopicForm }

}
</script>

<style>

</style>