import { describe, it } from 'mocha';
import { expect } from 'chai';

import Stack from '../src/stack/stack';

describe('栈方法', () => {
  const numStack = new Stack<number>();
  it('#push()', () => {
    numStack.push(1, 2, 3, 4);
    expect(numStack.size()).to.be.equal(4);
  });
  it('#pop()', () => {
    expect(numStack.pop()).to.be.equal(4);
  });
  it('#peek()', () => {
    expect(numStack.peek()).to.be.equal(3);
  });
  it('#isEmpty()', () => {
    expect(numStack.isEmpty()).to.not.be.ok;
  });
  it('#size()', () => {
    expect(numStack.size()).to.be.equal(3);
  });
  it('#clear()', () => {
    numStack.clear();
    expect(numStack.isEmpty()).to.be.ok;
  });
});
