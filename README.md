#**jQuery.AfterTyping**
jQuery plugin that triggers callback function after user had stopped typing into input element for a while.
>Plugin will not trigger callback function if trimmed input value remains the same throughout typing

##**Installation**
Clone the repo:	`git clone https://github.com/AlFra432/aftertyping.git "aftertyping"` 

##**Callback function**
```javascript
//Example
var callback = function(value, obj){
	//do something
}

$(selector).afterTyping(callback);
```
Callback function can optionally have two arguments. First represents trimmed value of input element, and second is jquery object of the same sender element. 
>**value** is equivalent to **obj.val().trim()**

##**Plugin Settings**
+ `delay` - time in ms for plugin to wait for another key press. After that time, if no key is pressed, plugin executes callback function. Default value is **500**.
+ `executeCallbackOnInit` - if _true_ plugin also executes callback function on initialization, if _false_ it does not. Default is **true**
+ `executeCallbackOnEnter`- if _true_  plugin executes callback function immediately after ENTER is pressed, if _false_ it does not. Default is **true**

##[**Simple Example**](https://github.com/AlFra432/aftertyping/blob/master/examples/example1.html)
```html
<!doctype html>
<html>
	<head>
		<title>Example1</title>
	</head>
	<body>
		<div>
			<label for="input1">Write something here: </label><input id="input1" autocomplete="off" value="testvalue">
		</div>
		<div>
			<label for="text">Output: </label><span id="text"></span>
		</div>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="../jquery.aftertyping.js"></script>
		<script>
			var settings = {
				'delay' : 700,
				'executeCallbackOnInit' : true, 
				'executeCallbackOnEnter' : true
			}

			$('#input1').afterTyping(function(value, obj){
				$('#text').html(value);
			}, settings);
		</script>
	</body>
</html>
```

##**License**
[MIT](https://github.com/AlFra432/aftertyping/blob/master/LICENSE.txt)
