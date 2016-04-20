"use strict";


/*

	padding -
	1. drop
	2. random move

 */



(function(){
	var methodObj = {
		setting: {
			count: 12
		},
		utils: {
			hasClass: function(element, checkClass) {
				return (' ' + element.className + ' ').indexOf(' ' + checkClass + ' ') > -1;
			},
			findCoord: function(x, y) {
				var imgArray = document.querySelectorAll('.img');

				for(var i = 0, j = imgArray.length; i < j; i += 1) {
						// find this (x.y) img
						if(x === imgArray[i].dataset.coorx && y === imgArray[i].dataset.coory) {
							return imgArray[i];
						}
				}
			}
		},
		// counter
		counter: function() {
			var countdownid;
			if(methodObj.setting.count == 0) {
				console.log("倒數結束");
				clearTimeout(countdownid);
			} else {
				methodObj.setting.count--;
				countdownid = setTimeout(function () {
					methodObj.createCoord(function(){

					});
					// methodObj.append();
	        methodObj.counter();
	    	}, 1000);
			}
		},
		// random create coordinate
		createCoord: function(callback) {
			var coordX = Math.floor(Math.random() * 4).toString();
			var coordY = Math.floor(Math.random() * 3).toString();
			var thisEle = methodObj.utils.findCoord(coordX, coordY);

			if(methodObj.utils.hasClass(thisEle, 'show')) {
				methodObj.createCoord();
				return;
			}

			thisEle.className += ' show img' + methodObj.setting.count;

      if (typeof callback === 'function') {
        callback();
      }
		},
		// check coordinate exist or not
		// checkCoord: function(x, y) {
		// 	// check show class
		// 	var thisEle = methodObj.utils.findCoord(x, y);

		// 	return (methodObj.utils.hasClass(thisEle, 'show')) ? false : true;
		// },
		// append: function() {
		// 	var target = document.querySelector(".section");
		// 	var str = '<div class="img"> \
		// 							<img src="images/' + methodObj.setting.count + '.png"> \
		// 						</div>';
		// 	target.innerHTML += str;
		// },
		init: function() {
			// init map
			var target = document.querySelector(".section");

			for(var k = 0, l = 3; k < l; k += 1){
				for(var i = 0, j = 4; i < j; i += 1){
					var item = '<div class="img" data-coorx="' + i + '" data-coory="' + k +'"></div>';
					target.innerHTML += item;
				}
			}
			methodObj.counter();
		}
	};
	methodObj.init();
})();