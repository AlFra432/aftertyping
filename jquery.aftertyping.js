(function(window, document, $){

	var checkOptions = function(options){
		if("number" === typeof options && options>0){
			return {
				'delay' : options
			};
		}else if("object" === typeof options){
			return options;
		}else{
			return {};
		}
	}

	$.fn.afterTyping = function(callback, options){
		if(typeof callback !== "function"){
			return;
		}

		var settings = $.extend(
			{}, { //defaults
				'delay' : 500,
				'executeCallbackOnInit' : true,
				'executeCallbackOnEnter' : true
			}, checkOptions(options));

		return this.each(function(){
			var $this = $(this),  
			initialValue = $this.val().trim(), 
			timeout,
			tempValue, 
			delay;

			if(settings.executeCallbackOnInit){
				callback($this.val().trim(), $this);
			}

			$this.on("keyup", function(e){
				if(initialValue !== (tempValue = $this.val().trim())
				|| (settings.executeCallbackOnEnter && e.keyCode === 13)
				){
					window.clearTimeout(timeout);
					delay = e.keyCode == 13
					? 0
					: settings.delay;
					timeout = window.setTimeout(function(){
						callback(tempValue, $this);
					}, delay);
				}
				initialValue = $this.val().trim();
			});
		});
	}

})(window, window.document, window.jQuery);