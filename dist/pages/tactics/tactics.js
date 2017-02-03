/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(63);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	'use strict';

	function tableDraw(ctx, screenWidth, borderColor, lineColor1, lineColor2, divideX, divideY, arry1, arry2) {
	    ctx.setStrokeStyle(borderColor);
	    ctx.strokeRect(0, 20, screenWidth, 120);
	    ctx.setFontSize(8);
	    var xInit = screenWidth / divideX;
	    var yDivide = 120 / divideY;
	    var textX = divideX > 2 ? screenWidth - 25 : screenWidth + 10;
	    for (var i = 0; i < divideY; i++) {
	        ctx.moveTo(0, 20 + yDivide * i);
	        ctx.lineTo(screenWidth, 20 + yDivide * i);
	        ctx.fillText(yDivide * i + '%', textX, 20 + yDivide * i + 8);
	    }
	    for (var j = 1; j < divideX; j++) {
	        ctx.moveTo(xInit * j, 20);
	        ctx.lineTo(xInit * j, 140);
	    }
	    ctx.stroke();
	    // 绘制走势线条
	    ctx.beginPath();
	    ctx.setStrokeStyle(lineColor1);
	    ctx.moveTo(0, 120);
	    for (var _i = 0; _i < arry1.length; _i++) {
	        ctx.lineTo(arry1[_i].x, arry1[_i].y);
	    }

	    ctx.stroke();
	    ctx.beginPath();
	    ctx.setStrokeStyle(lineColor2);
	    ctx.moveTo(0, 100);
	    for (var _i2 = 0; _i2 < arry2.length; _i2++) {
	        ctx.lineTo(arry2[_i2].x, arry2[_i2].y);
	    }
	    ctx.stroke();
	    // 绘制例样
	    ctx.beginPath();
	    ctx.setFillStyle(lineColor1);
	    ctx.fillRect(20, 5, 10, 10);
	    ctx.beginPath();
	    ctx.beginPath();
	    ctx.setFillStyle(lineColor2);
	    ctx.fillRect(80, 5, 10, 10);
	    ctx.beginPath();
	    ctx.setFillStyle(borderColor);
	    ctx.fillText('沪深300', 35, 14);
	    ctx.fillText('沪深300', 95, 14);
	    // 时间
	    ctx.beginPath();
	    ctx.setFillStyle(borderColor);
	    ctx.fillText('2015-01-01', 5, 150);
	    ctx.fillText('2017-01-01', screenWidth - 65, 150);

	    ctx.draw();
	}

	function trigonDraw(ctx) {
	    ctx.setStrokeStyle('#cccccc');
	    ctx.setFontSize(8);
	    ctx.setFillStyle('#666666');
	    var height = 0;
	    for (var i = 1; i < 6; i++) {
	        var _height = 10 * i;
	        var lineToX = _height * Math.sin(Math.PI / 3);
	        ctx.moveTo(100, 70 - _height);
	        ctx.lineTo(100 - lineToX, 70 + _height * 0.5);
	        ctx.lineTo(100 + lineToX, 70 + _height * 0.5);
	        ctx.lineTo(100, 70 - _height);
	        ctx.fillText(_height, 85, 75 - _height);
	    }
	    ctx.moveTo(100, 70);
	    ctx.lineTo(100, 20);
	    ctx.moveTo(100, 70);
	    ctx.lineTo(100 - 50 * Math.sin(Math.PI / 3), 95);
	    ctx.moveTo(100, 70);
	    ctx.lineTo(100 + 50 * Math.sin(Math.PI / 3), 95);
	    ctx.stroke();
	    ctx.beginPath();
	    ctx.setFillStyle('#666666');
	    ctx.fillText('财来啊一号', 5, 10);
	    ctx.fillText('财来啊二号', 5, 30);
	    ctx.fillText('月收益率', 90, 15);
	    ctx.fillText('胜率', 40, 110);
	    ctx.fillText('最大回测率', 140, 110);
	    ctx.beginPath();
	    ctx.setStrokeStyle('red');
	    ctx.moveTo(5, 15);
	    ctx.lineTo(15, 15);
	    ctx.stroke();
	    ctx.beginPath();
	    ctx.setStrokeStyle('green');
	    ctx.moveTo(5, 35);
	    ctx.lineTo(15, 35);
	    ctx.stroke();
	    ctx.draw();
	}

	module.exports.tableDraw = tableDraw;
	exports.trigonDraw = trigonDraw;

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(2);
	var ctx = wx.createCanvasContext('myCanvas');
	var ctx1 = wx.createCanvasContext('earningsCanvas2');
	var ctx2 = wx.createCanvasContext('myCanvas2');
	var screenWidth = 280;
	wx.getSystemInfo({
	    success: function success(res) {
	        return screenWidth = res.windowWidth;
	    }
	});

	Page({
	    data: {
	        date: 1,
	        detail: '下载财来啊APP 查看历史持仓记录',
	        shade: false,
	        arry1: [{ x: 20, y: 80 }, { x: 40, y: 90 }, { x: 90, y: 50 }, { x: 160, y: 50 }],
	        arry2: [{ x: 20, y: 30 }, { x: 40, y: 90 }, { x: 90, y: 110 }, { x: 160, y: 80 }]

	    },
	    onLoad: function onLoad() {

	        common.tableDraw(ctx, screenWidth - 20, '#cccccc', 'red', 'green', 7, 12, this.data.arry1, this.data.arry2);
	        common.tableDraw(ctx2, screenWidth - 80, '#cccccc', 'red', 'green', 2, 4, this.data.arry2, this.data.arry1);
	        common.trigonDraw(ctx1);
	    },
	    switchDate: function switchDate(e) {
	        var numStr = e.target.dataset.num;
	        var num = Number(numStr);
	        this.setData({
	            date: num,
	            arry1: [{ x: 20, y: 20 + num }, { x: 40, y: 110 + num }, { x: 90, y: 50 + num }, { x: 160, y: 50 + num }],
	            arry2: [{ x: 20, y: 30 + num }, { x: 40, y: 90 + num }, { x: 90, y: 110 + num }, { x: 160, y: 80 + num }]

	        });
	        common.tableDraw(ctx, screenWidth - 20, '#cccccc', 'red', 'green', 7, 12, this.data.arry1, this.data.arry2);
	        common.tableDraw(ctx2, screenWidth - 80, '#cccccc', 'red', 'green', 2, 4, this.data.arry2, this.data.arry1);
	    },
	    showShade: function showShade(e) {
	        var str = e.target.dataset.str;

	        this.setData({
	            detail: '\u4E0B\u8F7D\u8D22\u6765\u554AAPP \u67E5\u770B' + str,
	            shade: true
	        });
	    },
	    colseShade: function colseShade() {
	        this.setData({
	            shade: false
	        });
	    }
	});

/***/ }

/******/ });