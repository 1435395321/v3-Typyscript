import { SET_TODO } from "@/store/actionsType";
import { ITodo, TODO_STATUS } from "@/typings"
import { useStore } from "vuex"
// 数据方法类型
export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    setStatus: () => void;
    setDoing: () => void;
    removeTodo: () => void;
}
// 缓存方法类型
interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void
}
function useTodo(): IUseTodo {
    // 设置list的数据
    const store = useStore();
    const {setLocalList,getLocalList}:IUseLocalStorage = useLocalStorage();
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDD
        } 
        store.dispatch(SET_TODO, todo);
        setLocalList(store.state.list)
    }

    function setTodoList() {

    }

    function setStatus() {

    }
    function setDoing() {

    }
    function removeTodo() {

    }
    return {
        setTodo,
        setTodoList,
        setStatus,
        setDoing,
        removeTodo
    }
}
/**
 * 设置缓存
 * setLocalList
 * 取出缓存数据
 * getLocalList 
 * 
 */
function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }
    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    return {
        getLocalList,
        setLocalList
    }
}
export {
    useTodo,
}