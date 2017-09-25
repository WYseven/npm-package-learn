let assert = require('assert');
let f = require('./');

describe('测试扁平化数组函数', () => {
	describe('测试flatten函数', () => {
		it('扁平化一个数组', () => {
			var result = f.flatten([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10])
			assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
		})

		it('测试参数不是一个数组', () => {
			assert.throws(() => {
				// 不抛出错误，断言失败
				// flatten([123])
				f.flatten('test')
			}, TypeError, '参数为数组')
		})
	});
	describe('测试flattenDepth函数', () => {
		it('指定扁平的层级1级', () => {
			let res = f.flattenDepth([1,2,3,["a",["b"]]], 1);
			assert.deepEqual(res, [1,2,3,'a',['b']])
		})
		it('指定扁平的层级2级', () => {
			let res = f.flattenDepth([1,2,3,["a",["b"]]], 2);
			assert.deepEqual(res, [1,2,3,'a','b'])
		})
		it('指定扁平的层级3级', () => {
			let res = f.flattenDepth([1,2,3,["a",["b"]]], 3);
			assert.deepEqual(res, [1,2,3,'a','b'])
		})
		it('指定不是数组', () => {
			assert.throws(() => {
				f.flattenDepth('test')
			}, /Expected/, '必须填写数组')
		})
	})
})