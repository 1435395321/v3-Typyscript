import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { REMOVE_TODO, SET_TODO_STATUS, SET_TODO, SET_TODO_LIST } from "./actionsType";

interface ICtx {
    commit: Commit,
    state: IState
}
export default {
    // 设置input传入的值
    [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    },
    // 设置todolist 列表
    [SET_TODO_LIST]({commit,state}:ICtx, todoList:ITodo[]):void {
        commit(SET_TODO_LIST,todoList);
    },
    [REMOVE_TODO]({commit,state}:ICtx, id:number){
        commit(REMOVE_TODO,id);
    },
    [SET_TODO_STATUS]({commit,state}:ICtx, id:number){
        commit(SET_TODO_STATUS,id);
    }
}