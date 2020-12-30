<template>
    <div>
        <h1>Todo-list</h1>
        <todo-item
            v-for="item in todoList"
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
        ></todo-item>
    </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from "@/hooks";
import { ITodo } from "@/typings";
import { defineComponent, PropType } from "vue";
import TodoItem from "./item.vue";
export default defineComponent({
    name: "TodoList",
    props: {
        todoList: Array as PropType<ITodo[]>,
    },
    components: {
        TodoItem,
    },
    setup() {
        const { setStatus, setDoing, removeTodo }: IUseTodo = useTodo();
        return {
            setStatus, 
            setDoing, 
            removeTodo
        };
    },
});
</script>

<style>
</style>