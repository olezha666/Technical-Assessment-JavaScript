function search(a){ // функция поиска возможных последовательностей прогрессий
	// создадим массив, в который будем заносить данные о найденых прогрессиях
	var result = [], clearResult;

	// проверяем в цикле все числа
	for(var start=0; start<a.length; start++){
		for(var i=start+1; i<a.length; i++){

			// вычисляем предпологаемый шаг прогрессии
			var step = a[i]-a[start];

			// и проверяем его.

			// создаем массив, в который складываем
			// числа предполагаемой прогрессии
			var list = [ a[start], a[i] ];

			// смотрим в цикле следующие числа
			for(var j = i+1; j< a.length; j++){
				// если следующее число - шаг прогрессии равно
				// последнему занесенному в массив list
				// то добавляем его в массив list
				if( a[j]-step == list[list.length-1]){
					list.push(a[j]);
				}
			}

			// если в массиве 3 элемента или более, то считаем что
			// еще одна прогрессия найдена и запоминаем ее в
			// массиве с результатами

			result.push(list);

		}
	}

	clearResult = result.map(item=>item.length)
	clearResult = clearResult.indexOf(Math.max(...clearResult));


	// получаем массив результатов
	// возвращаем массив с самой большой последовательностью

	return result[clearResult];
}


function quickSort(arr) { //алгоритм быстрой осртировки для оптимизации сортировки в случае, если массив данных будет значительным
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function floatN(n){//функция округления чисел при вычислении  рациональных чисел
  let i=0;
  if(n%1 != 0){
    do {
      n= n*10;
      i++;
    } while (n%1 != 0);
  }
  return i;
}

function checkMassiv(arr){ //функция поиска пропущенного числа в массиве
    let kk = quickSort(arr)// испульзую алгоритмы быстрой сортировки т.к он быстрее .sort()
    let src = search(arr), step;
    if(kk[0]-kk[1]==-1){ //проверка прогресси на 1
        step = 1
    }else{
        step = src[0]-src[1]
    }

    if(Math.sign(step)== -1){ //в зависимости от знака арифметической прогресси выполняем тот или иной поиск
        for(let i=0, j = kk[0]; i<arr.length; i++, j -= step ){
        if(kk[i]!=j){return j }
    }
    }{
        for(let i=0, j = kk[0]; i<arr.length; i++, j+=step){
        if((kk[i].toFixed(floatN(step)))!=j.toFixed(floatN(step))){ return j.toFixed(floatN(step))}
    }
    }

}

console.log(checkMassiv( [10, 11, 7, 9, 12]))
console.log(checkMassiv([-0.2, -0.1,   -0.6, -0.4, -0.3])) // -0.5
console.log(checkMassiv([0.02, 0.01,   0.06, 0.04, 0.03, 0])) // -0.5
console.log(checkMassiv([-0.00000989, -0.00000988,-0.00000990, -0.00000986])) // -0.5
console.log(checkMassiv([1, 2,   4, 5, 6, 0])) // -0.5
console.log(checkMassiv([-3, -2, -1, 1, 2, 3, 4])) // -0.5
console.log(checkMassiv([-3, -2, 0, 1, 2, 3, 4])) // -0.5
console.log(checkMassiv([993,  995, 996, 997, 998, 999])) // -0.5
