var wtyjzx = {
	
	chunk : function  (array,size){ //n个一组剪切数组
		
		var ary = []
		for (var i = 0; i < array.length; i +=size) {
			ary.push(array.slice(i , i + size))
		}
		return ary
	}
	




	
	
	compact : function (array){ // 筛选出数组中true 的值
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (array[i]) {
				result.push(array[i])
			}
		}
		return result
	}



 1.	difference : function(array){ // 与参数对比找出不同项
		let result = arguments[0].slice()
		for(i = 1;i < arguments.length; i ++){
			for(let val of arguments[i]){
				if (result.indexOf(val) != -1) {
					result.splice(r1esult.indexOf(val), 1)
				}
			}
		}

	}

 2. difference : function (array,...value){
 	var filtr = value.reduce(function(a,b){
 		return a.concat(b)
 	})
 	for(var i = 0 ;i <filtr.length;i++){
 		var sub = array.indexOf(filtr[i])
 		if (sub >= 0) {
 			array.splice(sub,1)
 		}
 	}
 	return array
 }

	difference :function (array,...exc){
	var marker = new Array(array.length).fill(true)
	var res = []
	exc.forEach(function(val, index){
		for(var i= 0 ;i < val.length; i++){
			if (array.indexOf(val[i]) > -1) {
				marker[array.indexOf(val[i])] = false 
			}
		}
	})
	marker.forEach(function(val,index){
		if (val) {
			res.push(array[index])
		}
	})
	return res 
}


	difference : function (ary, ...values){
	var result = []
	for(var i = 0 ; i < ary.length ; i ++){
		if (values.every(value =>{
			if (value.includes(ary[i])) {
				return false
			} else {
				return true
			}
		})) {

			result.push(ary[i])
		}
	}
	return result
}






										
	drop :function (array, [n = 1]){ // 从数组左边减去n个数，保留右边
		return  array.slice(n)
	}
	


	

	dropRight :  function(array,[n = 1]){ // 同上，从右边开始
		if (n > array.length) {
			return []
		}
		var ary = array.splice(n,array.length - n)
		return  ary

	}

	dropRightWhile: function(array,predicate){
		const iterator = ineratee(predicate)
		const loop = array.length
		let endPoint = loop
		for(let i = loop - 1; i>=0; i--){
			if (iterator(array[i])) endPoint-- 
				else break
		}
	return  array.slice(0,endPoint)
	}


	dropRightWhile : function(array , f){
		let newArr = array.slice()
		f = this.iteratee(f)
		for(let i = newArr.length - 1 ; i > -1; i --){
			if (!f(newArr[i])) {
				break
			} else {
				newArr.pop()
			}
		}
		return newArr
	}

	dropWhile: function(array,predicate){
		const iterator = iteratee(predicate)
		const loop = array.length
		let startPoint = 0
		for(let i = 0; i < loop; i++){
			if (iterator(array[i])) 
				startPoint ++
			else break
		}
	return array.slice(startPoint)
	}


	// 填充
	fill : function (array,value ,start = 0 ,end = array.length){
		for(i = start ; i < end ; i++){
			array [i] = value
 		}
 		return array
	}



	findLastIndex: function()



	flatten: function(array){ // 展开数组（一层）
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (Array.isArray(array[i])) {
				for(let val of array[i]) {
					result.push(val)
				}
			} else {
				result.push(array[i])
			}
		}
		return result
	}

	flatten : function(array){
		var newary = array.reduce(function(value1,value2){
			return value1.concat(value2)
		},[])
		return newary
	}


	flattenDeep : function(array){ // 展开数组，深层
		let result =[]
		for(var i = 0; i < array.length; i ++){
			if (Array.isArray(array[i])) {
				for(let val of array[i]){
					result.push(val)
				}
			} else {
				result.push(array[i])
			}
		}
		for(let val of result){
			if (Array.isArray(val)) {
				return flattenDeep(result)
			}
		}
		return result
	}

	flattenDeep : function(array,result = []){
		array.forEach(sub =>{
			if (Array.isArray(sub)) {
				flattenDeep(sub,result)
			} else {
				result.push(sub)
			}
		})
		return result
	}

	falttenDepth(array,depth = 1){  //  按depth展开数组
		var result = []
		for(var i = 0 ; i < array.length ; i++){
			if (Array.isArray(array[i])) {
				for(let val of array[i]){
					result.push(val)
				}
			} else {
				 result.push(array[i])
			}
		}
		depth --
		if (depth == 0) {
			return result
		}
		return falttenDepth(result,depth)
	}

	falttenDepth :function (array,depth = 1){
		var result =array
		for(let i =0 ; i< depth ; i++){
			result = this.faltten(result)
		}
		return result
	}

	falttenDepth :function (array, depth = 1){
		var faltten = function(ary){
			return [].concat(...ary);
		}
		for (var i =0 ; i< depth; i ++) {
			array = flatten(array)
		}
		return array
	}

	falttenDepth : function (array, depth =1){
		if (depth === 0) {
			return array
		}
		return falttenDepth(array.reduce(function(pre,curr){
			return pre.concat(curr)
		},[]),--depth)
	}



	fromPairs : function (pairs){ // 将数组成对放入对象
		result = {}
		for(i = 0 ; i < pairs.length; i++){
			result[pairs[i][0]]= pairs[i][1]

		}
		return result
	}

	fromPairs : function (pairs) {
		var obj = {}
		for(var item of pairs){
			obj[item[0]] = item[1]
		}
		return obj 
	}


	head : function (array)  { 
	    if (array.length === 0) {
	    	return undefined
	    }                             // 返回数组第一项
		return array[0]
	}

	indexOf : function (array ,value ,fromIndex = 0){
		if (fromIndex < 0) {              // 按照value查找下标
			fromIndex += array.length
		}
		for(i = fromIndex; i < array.length; i ++){
			if (array[i] === value) {
				return i 
			}
		}
		return -1
	}

	initial: function ( array) {
		result = array.slice()
		if (result.length !== 0) {
			result.length = result.length -1 
		}
		return result
	}

	initial : function(array ) {  // 去除最后一项
		return array.slice(0,array.length -1 )
	}




    intersection: function(arrays){ // 交差点
   		var result = []
   		for (var i = Things.length - 1; i >= 0; i--) {
   			for (var i = Things.length - 1; i >= 0; i--) {
   				
   			}
   		}
   }



   join : function (array,separator = '.') { 
   				  // 数组每个元素之间插入符号

   		return array.reduce(function(pre,next){
   			return pre += '' + separator + next
   		})

   }


   last : function (array){		// 数组最后一项
   	return array[array.length - 1]
   }



   lastIndexOf(array,value , fromIndex = array.length -1) {
   	if (Math.abs(fromIndex) >= array.length ) {
   		return -1 
   	}
   	for ( i = fromIndex ; i > 0;  i --){
   		if (array[i] == value ) {
   			return i 
   		}
   	}
   }    //  从后往前找

   nth : function(array, n =0){  //返回第n项的值
   	return n >= 0? array[n] : array[array.length + n]
   }

   pull : function(array,...values) {  // 取出值为value的项
   	for(var i = 0 ; i < values.length;i ++){
   		for(var j = 0 ; j < array.length; j++){
   			if (array[j] === values[i]) {
   				array.splice(j,1)
   			}
   		}
   	}
   	return array
   }

   pullAll : function (array,values ){
   	array = array.filter(it => values.indexOf(it) < 0)
   	return array
   }

   reverse : function(array) {  // 倒转数组
   	var result=[]
   	for(var i = array.length- 1; i >= 0; i --){
   		result.push(array[i])
   	}
   	return result
   }

   sortedIndex : function (array,value){
   	if (value <= array[0]) {
   		return 0
   	}
   	if (value > array[array.length - 1 ]) {
   		return array.length 
   	}
   	for(var i= 0 ; i < array.length ; i ++ ){
   		if (array[i] >= value) {
   			return i 
   		}
   	}
   }


   tail : function (array) { // 去除第一项得到新数组
   	return array.slice( 1)
   }

   take : function (array,n = 1){ // 从开头取出n项，取出部分作为新数组
   	return array.slice(0, n)
   }


   takeRight: function ( array, n =1 ){
   	if (n >= array.length ) {  // 从末尾取出n项，取出部分为新数组

   		return array
   	}
   	return array.slice(array.length - n )
   }



   union : function ( ...arrays) {
   	

   }

   unionBy : function ( array ,)



   uniq : function (array) {  // 重复值保留一个
   	var  result = []
   	for(var  i = 0; i < array.length; i ++ ){
   		if (array.indexOf(array[i]) == [i]) {
   			result.push(array[i])
   		}
   	}
   	return result
   }


   unzip : function (array){
   	var result = []
   	for(var i = 0 ; i < array[0].length; i ++){
   		result[i] = []
   	}
   	for(var i = 0; i< array.length; i++){
   		for(var j = 0 ; j < array[i].length; j++){
   			result[j][i] = array[i][j]
   		}
   	}
   	return result
   }


   	without : function (array,...val){
   	var res = []
   	for(var i = 0 ; i < array.length; i++){
   		if (val.indexOf(array[i] < 0)) {
   			res.push(array[i])
   		}
   		
   	}
   	return res
	}

   	without : function (array , ...val) {
   		return array.filter(function(item) {
   			return !val.includes(item)
   		})
   	}

   	xor : function (...arrays) { // 取出两个数组的不同项
   		var result = arrays.reduce((a,b) => a.concat(b))
   		return result.filter((item, index) => result.indexOf(item) === result.lastIndexOf(item))
   	}
   	

   	zip : function (...arys){
   		var result =[]
   		for (var i = 0; i < arys.length; i++) {
   			if () {}
   		}
   	}


   	zipObject : function(props,values) {
   		var result= {}
   		for(var start in props) {
   			result[props[start]] = values[start]
   		}
   		return result
   	}


   	every : function(collection , [predicate=_identity]){
   		predicate = _.iteratee(predicate)
   		if(Array.isArray(collection)){
   			for(let item of collection) {
   				if (!predicate(item)) {
   					return false
   				}
   			}
   		}
   		if (typeof collection === 'object') {
   			for(let prop in collection){
   				if (!predicate(collection[prop])) {
   					return false 
   				}
   			}
   			
   		}
   		return true 
   	}

   	filter : function (collection,[predicate=_identity]){
   		predicate = _.iteratee(predicate)
   		var filted 
   		if (Array.isArray(collection)) {
   			filted = []
   			for(let item of collection){
   				if (predicate(item)) {
   					filted.push(item)
   				}
   			}
   		} else {
   			filted = {}
   			for(let pro in  collection){
   				if (predicate(collection[pro])) {
   					filted[pro] = collection[pro]
   				}
   			}
   		}
   		return filted

   	}


   	find : function (collection,[predicate=_identity] , [fromIndex=0]){
   		predicate = _iteratee(predicate)
   		var col 
   		for(let item of collection){
   			if (predicate(item)) {
   				return item
   			}
   		}
   	}


   	flatMap : function (collection,[iteratee=_._identity]){

   	}

   	forEach : function (collection,iteratee){
   		for(let item in collection){
   			 iteratee(collection[item],item,collection)
   		}
   		return collection
   	}

   	forEachRight : function(collection,iteratee){
   		var len = collection.length -1
   		for(var i = length; i >=0; i--){
   			iteratee(collection[i],i,collection)
   		}
   		return collection
   	}


   	reduce : function(collection,[iteratee=_identity],[accumulator]){
   		
   	}

   	isArgumengts : function(value){
   		if (value ===null || value === undefined) {
   			return false 
   		}
   		if (typeof(value.callee) === 'function') {
   			return true
   		}
   		return false
   	}

    isArray : module.exports = Array.isArray || function(arr){
   		return Object.prototype.toString.call(arr) == '[Object Array]';
   }

   isArrayBuffer : function(array){
   		return object.prototype.toString.call(array) == '[Object ArrayBuffer]'
   }

   isArrayLikeObject : function(value){
   	if (typeof(value) !=='function' && value.length >=0) {
   		return true
   	}
   	return false
   }


   isBoolean: function(value){
   	return object.prototype.toString.call(value) == '[object Boolean]'
   }

   isDate : function(value){
   	return object.prototype.toString.call(value) == '[object Date]'
   }

   isElement : function(value){
   	return object.prototype.toString.call(value) == '[object HTMLBodyElement]'
   }
   
   isEmpty : function(value){
   	if (value === null || value === true) {
   		return true
   	} else if (value === 1) {
   		return true
   	} 
   		return false 
   	
   }

   isEqual : function(value,other){
   	if (value === other) {
   		return false
   	}else if (typeof(value) === typeof(other)) {
   		return true
   	}
   }


   isError : function(value){
   	return value instanceof Error
   }


   isFinite : function(value){
   	return Number.isFinite(value)
   }

   isFunction : function(value){
   	return 	return object.prototype.toString.call(value) == '[object Function]'
   }

   isInteger : function(value){
   	return Number.isInteger(value)
   }

   isLength : function(value){
   	return Number.isInteger(value)
   }

   isMap : function(value){
   	return value instanceof Map 
   }

   isMatch : function(object, source){
   	for(var resl in source) {
   		if(!this.isEqual(object[resl],source[resl])){
   			return false
   		}
   	}
   	return true
   }

   isNaN : function(value){
   	return value + '' === 'NaN'
   }

   isNaN : function(value){
   	if (typeof value === 'object') {
   		value = value.valueOf()
   	}
   	if (val !== val ) {
   		return true
   	}
   	return false
   }

   isNil : function(value){
   	return value == null || value == undefined
   }

   isNull : function(value){
   	return object.prototype.toString.call(value) == '[object Null]'
   }

   isNumber : function(value){
   	return typeof(value) === 'number'
   }

   isNumber : function(value){
   	if (object.prototype.toString.call(value) == '[object Number]') {
   		return true
   	} else {
   		return false 
   	}
   }


   isObject : function(value){
   	if (value !== null && value !== undefined) {
   		return true
   	} else {
   		return false
   	}
   }

   isRegExp : function(value){
   	return value instanceof RegExp
   }

   isSet : function(value){
   	return value instanceof Set 
   }
   isSet : function(value){
   	return getType(value) === 'Set'
   }

   isString : function(value){
   	return	object.prototype.toString.call(value) == '[object String]'
   }

   isSymbol : function(value){
   	return typeof value === 'symbol'
   }

   isUndefined : function(value){
   	return value === undefined
   }

   isWeakMap : function(value){
   	return value instanceof WeakMap
   }

   It : function(value,other){
   	return value < other
   }

   Ite : function(value,other){
   	return value <= other 
   }


   toArray : function(value){
   	let depval = this.getType(value)
   	if (depval === 'Object') {
   		return this.values(value)
   	}
   	if (depval === 'Array') {
   		return value
   	}
   	if (depval === 'String') {
   		return value.split('')
   	}
   	return []
   }

   toNumber : function(value){
   	return Number(value)
   }

   add : function(augend,addend){
   	return augend + addend
   }

   divide : function(divide,divisor){
   	return divide / divisor
   }

   floor : function(number,[precision=0]){
   	return	
   }

   max : function(array){
   	if (array.length == 0) {
   		return undefined
   	}else {
   		return array.reduce((a,b) => Math.max(a,b))
   	}
   }

   mean : function(array){

   }

   min : function(array){
   	if (array.length == 0) {
   		return undefined
   	}else {
   		return array.reduce((a,b) => Math.min(a,b))
   	}
   }

   multiply : function(multiplier,multipicand){
   	return multiplier * multipicand
   }

   subtract : function(minuend, subtrahend){
   	return minuend - subtrahend
   }

   sum : function(array){
   	return array.reduce((a,b) => a + b)
   }

   sumBy : function(array,[iteratee=_identity]){
   	if () {}
   }

   clamp : function(number,[lower],upper){
   	if (number < lower) {
   		return lower
   	}else if (number > upper) {
   		return upper
   	}
   	return number
   }

   isRange : function(number,[start=0],end){
   	if (end === undefined) {
   		end = start
   		start = 0
   	}
   	if (start > end) {
   		[]
   	}
   }

   random : function([lower=0],[upper=1],[floating]){

   }

   assignIn : function(object,...source){
   	if (source) {
   		source.forEach((item) =>{
   			if () {}
   		})
   	}
   }

   at : function(object,[paths]){

   }

   
   


    isPrime : function(n) {
   	if (n === 1) {
    return false
  	}
  	var m = Math.sqrt(n)
  	for(var i = 2; i <= m ;i++) {
    	if (n % i == 0) {
      	return false
    	}
  	}
  	return true
	}

   


