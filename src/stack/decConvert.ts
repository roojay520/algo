/*
 * @Author: roojay
 * @Date: 2019-05-23 23:03:01
 * @Last Modified by: roojay
 * @Last Modified time: 2019-05-23 23:03:54
 * @Desc: 利用 stack 实现十进制转换为其他进制
*/
import Stack from './stack';

/**
 * @param decNumber 被转换的数字
 * @param base 进制的基数
 */
export default (decNumber: number, base: number) => {
  if (decNumber < 0) throw new Error('decNumber 不能为负数');
  if (decNumber === 0) return '0';
  // 余数
  let rem: number;
  // 被转换的数字
  let num = decNumber;
  let baseStr = '';
  const digits = '0123456789ABCDEF';
  const remStack = new Stack<number>();

  while (num > 0) {
    rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }
  while (!remStack.isEmpty()) {
    const index = remStack.pop() as number;
    baseStr += digits[index];
  }
  return baseStr;
};
