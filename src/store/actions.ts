import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO } from "./actionsType";

interface ICtx {
    commit: Commit,
    state: IState
}
export default {
    SET_TODO({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    }
}