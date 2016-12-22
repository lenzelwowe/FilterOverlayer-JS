# FilterOverlayer-JS
A javascript filter overlayer to uploaded images(draggable) using Canvas. 

## Code Use
Include in HTML: 
```
<script src="https://code.createjs.com/easeljs-0.8.2.min.js"></script>
<script src="https://code.createjs.com/tweenjs-0.6.2.min.js"></script>
<script src="pathto/overlay.js"></script>
```

Create a \<canvas> tag with any id and specified width and height.

Use the following in a script tag.
```
OverlayJS(canvasID,filtersource,imagesource,scale,opacity)
```

## Code Example
```
//js
OverlayJS("myCanvas",filtsrc,igsrc,1,1)

//HTML
<canvas id="myCanvas" width="1000px" height="1000px"></canvas>
```
