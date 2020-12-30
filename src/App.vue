<template>
    <div>
        <h1>vue3typyscript</h1>
        <todu-input></todu-input>
        <todu-list :todoList="todoList"></todu-list>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { Store, useStore } from "vuex";
import ToduInput from "./components/TodoInput/index.vue";
import ToduList from "./components/TodoList/index.vue";
import { IUseTodo, useTodo } from "./hooks";
export default defineComponent({
    name: "App",
    components: {
        ToduInput,
        ToduList,
    },
    setup() {
        const { setTodoList }:IUseTodo = useTodo();
        const store:Store<any> = useStore();
        onMounted(() => {
            setTodoList();
        });
        const todoList = computed(()=>store.state.list)
        return{
            todoList
        }
    },
});
</script>
