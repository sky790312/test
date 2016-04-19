"use strict";






(function(){
	var methodObj = {
		setting: {
			count: 12
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
						// show img
					});
					// methodObj.append();
	        methodObj.counter();
	    	}, 1000);
			}
		},
		// random create coordinate
		createCoord: function(callback) {
			var coordX = Math.floor(Math.random() * 4);
			var coordY = Math.floor(Math.random() * 3);
			if(methodObj.checkCoord(coordX, coordY)) {
				methodObj.createCoord();
				return;
			}
      // if (typeof callback === 'function') {
      //   callback();
      // }
		},
		// check coordinate exist or not
		checkCoord: function(x, y) {
			// check show class
		},
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