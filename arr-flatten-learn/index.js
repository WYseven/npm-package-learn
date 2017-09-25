'use strict'

module.exports.flatten = flatten
module.exports.flattenDepth = flattenDepth

function flattenDepth(arr,depth){
	// 判断传入的是否是数组
	if( !Array.isArray(arr) ){
		throw new TypeError('Expected value to be an array')
	}

	return flatDepth(arr,[],depth)	
}


function flatten(arr){
	// 判断传入的是否是数组
	if( !Array.isArray(arr) ){
		throw new TypeError('Expected value to be an array')
	}
	return flat(arr, [])	
}

function flat(arr, res){
	let i = 0, cur,len = arr.length;

	for(; i < len; i++ ){
		cur = arr[i];
		Array.isArray(cur) ? flat(cur, res)	: res.push(cur);
	}	

	return res;
}

function flatDepth(arr, res, depth){
	depth--
	let i = 0, cur,len = arr.length;

	for(; i < len; i++ ){
		cur = arr[i];
		Array.isArray(cur) && depth > -1 ? flatDepth(cur, res, depth) : res.push(cur);
	}	

	return res;
}
