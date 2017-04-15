/**
 * action函数对应的常量
 * 1.所有mutations的名称在这里定义为常量,便于查看和区别(全大写,代码组织的一个约束)
 * 2.再在mutation module里通过常量来命名mutation函数,在actions里导入该常量后即可访问到对应函数
 */

 //
export const LOG_IN = 'LOG_IN' // 登入
export const LOG_OUT = 'LOG_OUT' // 登出
