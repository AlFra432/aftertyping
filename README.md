#**jQuery.AfterTyping**
jQuery plugin that triggers callback function after user had stopped typing into an input element for a while.
>Plugin will not trigger callback function if trimmed input value remains the same throughout typing.

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
Callback function can optionally have two arguments. First argument represents trimmed value of an input element, and the second jquery object of the same sender element. 
>**value** is equivalent to **obj.val().trim()**

##**Plugin Settings**
+ `delay` - time in ms for plugin to wait for another key press. If no key is pressed during this time, plugin will execute callback function. Default value is **500**.
+ `executeCallbackOnInit` - If _true_: plugin will also execute callback function on initialization, else _false_. Default value is **true**
+ `executeCallbackOnEnter`- If _true_: plugin will also execute callback function immediately after ENTER key is pressed, else _false_. Default value is **true**

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
