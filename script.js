"use strict";
var output = 0;
var calculation = 0;
var calculationDoneRecently = false;

$(document).ready(function() {
	$("#result").val(output);
});

// quadratic equation
$("#xsqr").click(function() {
	calculationDoneRecently = true;
 	output = Math.pow(output, 2);
 	$("#result").val(output);
});

// Random number generator
$("#Rand").click(function() {
	calculationDoneRecently = true;
	output = Math.random().toFixed(5);
	$("#result").val(output);
});

// clear button
$("#Clear").click(function() {
	calculationDoneRecently = false;
	output = 0;
	$("#result").val(output);
});

// number buttons
$("#0, #1, #2, #3, #4, #5, #6, #7, #8, #9").click(function() {
	if(calculationDoneRecently) {
		output = 0;
		calculationDoneRecently = false;
	}
	
	if (output === 0) {
		output = $(this).text();
	}
	else {
		output = output + $(this).text();
	}
	$("#result").val(output);
});

// decimal button
$("#decimal").click(function() {
	if(calculationDoneRecently) {
		output = 0;
		calculationDoneRecently = false;
	}
	
	if (output == 0) {
		output = "0.";
	}
	else {
		output = output + ".";
	}
	$("#result").val(output);
})

// operator buttons
$("#division, #multiply, #subtract, #plus").click(function() {
	if(calculationDoneRecently) {
		calculationDoneRecently = false;
	}
	output = output + " " + $(this).text() + " ";
	$("#result").val(output);
});

// equals button
$("#equals").click(function() {
	try {
		calculation = eval(output);
		output = calculation;
		$("#result").val(calculation);
		calculationDoneRecently = true;
	}
	catch (err) {
		alert("Invalid expression. Please enter a new mathematically correct expression.");
	}
});