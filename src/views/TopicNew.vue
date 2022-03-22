<template>
    <TopicForm :topic="topic" title="New topic" @saveTopic="saveTopic" />
</template>

<script>
import { useRouter } from 'vue-router';
import TopicForm from "../components/TopicForm.vue"
import { useTopicsStore } from "../stores/topics";

export default {

    setup() {
        const store = useTopicsStore();
        const router = useRouter();
        const route = useRouter();
        let topic = {
            id: null,
            title_sv: "",
            title_en: "",
            sub_topics: []
        };
        const saveTopic = async (item) => {
            await store.newTopic(item);
            topic = store.getTopicById(item.id);
            router.push({name: 'TopicShow', params: {id: item.id }});
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