import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS } from "@/store/actionsType";
import { ITodo, TODO_STATUS } from "@/typings"
import { useStore } from "vuex"

// 数据方法类型
export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
    removeTodo: (id: number) => void;
}

// 缓存方法类型
interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void
}

function useTodo(): IUseTodo {
    // 设置list的数据
    const store = useStore();
    const { setLocalList, getLocalList }: IUseLocalStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();
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
        // 从缓存中取出数组
        store.dispatch(SET_TODO_LIST, todoList);
    }

    function setStatus(id: number) {
        store.dispatch(SET_TODO_STATUS,id)
        setLocalList(store.state.list)
    }
    function setDoing(id: number) {

    }
    function removeTodo(id: number) {
        store.dispatch(REMOVE_TODO, id);
        setLocalList(store.state.list)
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