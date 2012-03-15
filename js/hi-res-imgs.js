function hi_res_init() {
	// Feature detect for hi-res devices
	var hi_res_device = window.devicePixelRatio > 1 ? true : false;
	
	// If device is hi res
	if (hi_res_device) {

		// Create cookie func
		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		}
		
		// Read cookie func
		function readCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}

		// Read hi-res cookie
		var hi_res_cookie = readCookie('hi_res');

		// Set hi_res_set to true if cookie is set
		var hi_res_set = hi_res_cookie === "true" ? true : false;
		
		// If hi res device, and hi res cookie not set, replace img src
		if (!hi_res_set) {
			// Replace imgs with hi-res version .hi-res class is detected
			var els = jQuery(".hi-res").get();
			for(var i = 0; i < els.length; i++) {
				var src = els[i].src
				//alert(src);
				src = src.replace(".jpg", "@2x.jpg");
				src = src.replace(".png", "@2x.png");
				src = src.replace(".gif", "@2x.gif");
				els[i].src = src;
			}
			
		}// Close if !hi_res_set
		
		// Create hi-res cookie
		createCookie('hi_res','true',30);
		
	}// Close hi_res_device

}// Close hi_res_init