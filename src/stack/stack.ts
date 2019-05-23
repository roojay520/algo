/*
 * @Author: roojay
 * @Date: 2019-05-23 22:59:02
 * @Last Modified by: roojay
 * @Last Modified time: 2019-05-23 23:00:53
 * @Desc: 栈是一种遵从后进先出（LIFO）原则的有序集合。
 * 新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。
 * 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 */

export default class Stack<T> {
  private items: T[] = [];

  public constructor(initData: T[] = []) {
    this.items.push(...initData);
  }

  public push = (...item: T[]) => this.items.push(...item);

  public pop = () => this.items.pop();

  public peek = () => this.items.slice(-1)[0];

  public isEmpty = () => !this.items.length;

  public clear = () => {
    this.items = [];
  };

  public size = () => this.items.length;

  public print = () => console.log(this.items);
}
