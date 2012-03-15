Hi-Res-Images is a simple JS file I threw together along with some PHP to help display hi-res images on capable devices. It started out as a proof of concept and then ended up working rather well. I believe there is room for improvement on this technique, so feel free to fork/edit/update. I'd love to see it rolled into another responsive image script.

## How it works

On initial load, there is a JS feature detect [1](http://briancray.com/2011/05/05/detect-retina-displays-with-javascript/) to see if the Device Pixel Ratio is greater than 1.
If this is true, it updates the src attribute on all images with a hi-res class on them with @2x. [2](http://flowz.com/2010/07/css-image-replacement-for-iphone-4-high-dpi-retina-display/)

So if your img name is "jpg-img.jpg". On a hi-res device, it will replace the img src to "jpg-img@2x.jpg"

After it replaces the images with JS, it writes a cookie, currently set for 30 days, indicating the device is a hi-res device.

With this cookie, PHP can now read this on subsequent page loads and we can adjust the img src tag with PHP on other pages/current page if the user reloads it/comes back to it within 30 days.

## About this technique

Purely server-side solutions or purely client-side solutions both have their own issues when trying to solve how to handle displaying hi-res images on capable devices. This method tries to find a compromise between the server-side and client-side technologies to provide a suitable/"least bad" solution.

On intial page load on a hi-res device, the user will unfortunetly load 2 imgs, the default resolution image and then the image that will replace the default resolution image. On subsequent page loads, the user will only load the hi-res image, if they have cookies turned on. Cookies could possibly be replaced with a different solution, though this is what I'm currently using.

This concept is really just a mix of code/ideas other people have already come up with, so I take no credit in the concept, just piecing things together.

[View Demo](http://brettjankord.com/projects/hi-res-images/)

Hat tip to [Matt Wilcox](http://mattwilcox.net/), [Brian Cray](http://briancray.com/), [Mike Wille](http://flowz.com/2010/07/css-image-replacement-for-iphone-4-high-dpi-retina-display/comment-page-1/), [Peter-Paul Koch](http://quirksmode.org/) and everyone who's worked on responsive/hi-res image solutions before.



