<template>
    <div>
        <input
            type="checkbox"
            :checked="item.status == FINISHED"
            @click="setStatus(item.id)"
        />
        <span :class="item.status == FINISHED ? 'line-through' : ''">{{
            item.content
        }}</span>
        <button @click="removeTodo(item.id)">删除</button>
        <button
            v-if="item.status !== FINISHED"
            @click="setDoing(item.id)"
            :class="item.status === DOING ? 'doing' : 'willdd'"
        >
            {{ item.status === DOING ? "正在做..." : "马上做" }}
        </button>
    </div>
</template>

<script lang="ts">
import { ITodo, TODO_STATUS } from "@/typings";
import { defineComponent, PropType } from "vue";
interface IStatusState {
    DOING: TODO_STATUS;
    FINISHED: TODO_STATUS;
    WILLDD: TODO_STATUS;
}
export default defineComponent({
    name: "TodoItemt",
    props: {
        item: Object as PropType<ITodo>,
    },
    setup(props, { emit }) {
        const statusState = <IStatusState>{
            DOING: TODO_STATUS.DOING,
            FINISHED: TODO_STATUS.FINISHED,
            WILLDD: TODO_STATUS.WILLDD,
        };
        const setStatus = (id: number): void => {
            emit("setStatus", id);
        };
        const removeTodo = (id: number): void => {
            emit("removeTodo", id);
        };
        const setDoing = (id: number): void => {
            emit("setDoing", id);
        };
        return {
            ...statusState,
            setStatus,
            removeTodo,
            setDoing,
        };
    },
});
</script>

<style>
.line-through {
    text-decoration: line-through;
}
.doing {
    background: #bebebe;
    color: rgb(158, 158, 158);
}
.willdd {
    background: violet;
    color: #fff;
}
</style>