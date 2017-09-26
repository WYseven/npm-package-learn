let m = require('mirrarray')




module.exports = mirrarray;

/*

用来将传入的数组转成一个对象，对象的key和value为数组的每一项
每一项的类型为：
	string
	number
	undefined
	null
	boolean
 */
// 验证是否key符合类型要求
function isValidKey(key){
	return ['string', 'number', 'undefined', 'boolean'].includes(typeof key) || key === null;
}

function hasValueSame (key){

	let typeBefore = keysSeen[''+key];
	let type = key === null ? 'null' : typeof key;
	if(typeBefore){
		return typeBefore !== type;
	}else{
		keysSeen[''+key] = type;
		return false;
	}


}

let keysSeen;

function mirrarray(arr){
	keysSeen = {};
	if(!Array.isArray(arr)){
		throw new TypeError('传入的不是数组')
	}

	return arr.reduce((obj, item) => {
		// 验证是否key符合类型要求
		 
		if(!isValidKey(item)){
			throw new TypeError('传入的不是指定的类型')
		}

		// 不能传入相同值，不同类型的，因为作为key值会覆盖
		if(hasValueSame(item)){
			throw new Error('传入的有值相同了')
		}

		obj[item] = item;
		return obj;
	}, {})
}
console.log(mirrarray([1,2,3,"a",null,true, true,null]))
console.log(m.default([1,2,3,"a",null,true, true,null]))