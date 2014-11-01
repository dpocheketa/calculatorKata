describe('Calculator', function(){

	it('should be defined', function(){
		expect(calculator).toBeDefined();
	});

	describe('add:', function(){
		it('should be function', function(){
			expect(calculator.add).toEqual(jasmine.any(Function));
		});

		describe('when input string is undefined', function(){
			it('should return 0', function(){
				expect(calculator.add()).toEqual(0);
			})
		});

		describe('when input is empty string', function(){
			it('should return 0', function(){
				expect(calculator.add('')).toEqual(0);
			})
		});

		describe('when input string is "1"', function(){
			it('should return "1"', function(){
				expect(calculator.add('1')).toEqual(1);
			})
		});

		describe('when input single number', function(){
			it('should return that number', function(){
				expect(calculator.add('5')).toEqual(5);
			});
		});

		describe('when input string is "1,2"', function(){
			it('should return 3', function(){
				expect(calculator.add('1,2')).toEqual(3);
			});
		});

		describe('when input string is two numbers', function(){
			it('should return their sum', function(){
				expect(calculator.add('4,5')).toEqual(9);
			});
		});

		describe('when input string is three numbers', function(){
			it('should return their sum', function(){
				expect(calculator.add('4,5,5')).toEqual(14);
			});
		});

		describe('when input string is more than two numbers', function(){
			it('should return their sum', function(){
				expect(calculator.add('4,5,5')).toEqual(14);
			});
		});

		describe('when input string contain "\\n" it should work ok', function(){
			it('should return sum of numbers', function(){
				expect(calculator.add('4,5\n6')).toEqual(15);
			});
		});

		describe('when input string contain ",\\n" it is not ok', function(){
			it('should throw exeption', function(){
				expect(function(){calculator.add('4,5,\n6')}).toThrow();
			});
		});

		describe('custom delimiters', function(){
			it('should use ";" as a delimiter', function(){
				expect(calculator.add('//;\n1;2')).toEqual(3);
			});
		});

		describe('when input negative numbers should be exeption', function(){
			it('should throw exeption', function(){
				expect(function(){calculator.add('-2')}).toThrow(new Error('Negative numbers are not allowed'))
			});
		});
	});

});