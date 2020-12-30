<template>
<div>
    <h1>vue3typyscript</h1>
    <todu-input></todu-input>
    <todu-list></todu-list>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToduInput from './components/TodoInput/index.vue'
import ToduList from './components/TodoList/index.vue'
export default defineComponent({
  name: 'App',
  components:{
      ToduInput,
      ToduList
  }
});
</script>
