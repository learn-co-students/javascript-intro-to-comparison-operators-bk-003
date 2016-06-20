'use strict';

function testFalseLooseEqualityComparison() {
	var zero = 0;
	var one = 1;
	return zero == one;
}

function testTrueLooseNonEqualityComparison() {
	var zero = 0;
	var one = 1;
	return zero != one;
}

function testTrueLooseEqualityComparison() {
	var a = '1';
	var one = "1";
	return a == one;
}

function testFalseStrictEqualityComparison() {
	var a = 1;
	var one = "1";
	return a === one;
}

function testTrueStrictEqualityComparison() {
	var a = 1;
	var one = "1";
	return a === parseInt(one);
}