<template>
<div  v-if="database" class="topicshow-wrapper">
    <div class="row">
        <div class="col">
          <h1>{{database.title_en}} / {{database.title_sv}}</h1>
        </div>
    </div>
    <router-link class="btn btn-primary me-1" :to="{name: 'DatabaseEdit', params:{ id: database.id }}">Edit</router-link>
    <a href="#" @click.prevent="removeDatabase(publisher)" class="btn btn-danger" >Remove</a>
</div>

</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useDatabasesStore } from "@/stores/databases"
import { computed } from 'vue'

export default {
  name: 'TopicShow',

  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useDatabasesStore();
    const database = computed(() => store.getDatabaseById(route.params.id));

    const removeDatabase = (database) => {
      if (confirm("Are you sure?")) {
        store.removeDatabase(database);
        router.push({name:'databaseindex'});
      }
    }

    

    return {
      database, 
      removeDatabase
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
