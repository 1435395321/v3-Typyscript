import { IState } from "@/typings";

export default <IState>{
    list: []
}
/**
 * list 推论 ->ITodo
 *      listItem:{
 *          id: 设置成时间戳 new Date().getTime : number;
 *          context: string;
 *          status: Finished Doing Willdo -> 枚举
 *      }
 * 
 * type 类型 interface 接口 对于对象用interface定义类型
 */