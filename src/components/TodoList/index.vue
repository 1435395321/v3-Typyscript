<template>
    <div>
        <h1>Todo-list</h1>
        <todu-item></todu-item>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToduItem from './item.vue'
export default defineComponent({
    name: "TodoList",
    components:{
        ToduItem
    }
});
</script>

<style>
</style>