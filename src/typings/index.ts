// 定义接口类型
/**
 * ITodo : 定义list类型
 * status: 有三种类型 完成 未完成 正在做  需要枚举
 */
interface ITodo {
    id: number,
    content: string,
    status: TODO_STATUS
}
interface IState {
    list: ITodo[]
}
enum TODO_STATUS {
    WILLDD = "willdd",
    DOING = "doing",
    FINISHED = "finished"
}
export {
    ITodo, IState, TODO_STATUS
}