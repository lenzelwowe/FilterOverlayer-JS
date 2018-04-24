
var OverlayJS = function(canvasName, imageSrc, filterSrc, filterScale, filterAlpha){
    var stage = new createjs.Stage(canvasName);
    window.currentFilter = filterSrc
    window.currentImage = imageSrc
    init(imageSrc,filterSrc)
    /*var white = new Image();
        //ACTION: place white image here to have constant white background
        white.src = "white.jpg";
        white.onload = function() {
           	var whiteimg = event.target;
            var loadWhite = new createjs.Bitmap(whiteimg);
            loadWhite.x = 0
            loadWhite.y = 0 
            stage.addChild(loadWhite)
            stage.update()
    }*/
    function init(a,b){
        initUserImg(b)
        handleFilterLoad(a)
    }
    //initializes a new Image onto stage
    function initUserImg(imgsrc) {
    	userPic = stage.getChildByName("userPic")
    	stage.removeChild(userPic)
        var image = new Image();
        image.src = imgsrc;
        image.onload = handleDraggable;
    }

    //loads user image as a draggable/touch friendly
    function handleDraggable(event){
        var image = event.target;
        var bitmap = new createjs.Bitmap(image);
        bitmap.scaleX = bitmap.scaleY = stage.canvas.width/event.width
        var dragger = new createjs.Container();
        dragger.x = dragger.y = 0;
        dragger.name = "userPic"
        dragger.addChild(bitmap);
        stage.addChild(dragger);

        dragger.on('mousedown', function(evt){
            var posX = evt.stageX;
            var posY = evt.stageY;
            this.offset = {x: this.x - posX, y: this.y-posY};
        });

        dragger.on("pressmove",function(evt) {
            //evt.currentTarget.x = evt.stageX;
            //evt.currentTarget.y = evt.stageY;
            var posX = evt.stageX;
            var posY = evt.stageY;
            evt.currentTarget.x = posX + this.offset.x;
            evt.currentTarget.y = posY + this.offset.y;
            stage.removeChild(bitmap)
            stage.update();
        });

        dragger.on("pressup",function(evt){
            frame = stage.getChildByName("frame")
            stage.removeChild(frame)
            stage.update()
            handleFilterLoad(window.currentImage);
        })

        stage.update()
            regImg = stage.getChildByName("userPic")
            regImg.getBounds().height
            regImg.regX = regImg.getBounds().width/2
            regImg.regY = regImg.getBounds().height/2  
    }

    //loads image file onto stage
    function handleFilterLoad(e) {
        var image = new Image();
        image.src = e;
        var loadedImage = new createjs.Bitmap(image);
        loadedImage.name = "frame"
        loadedImage.scaleX = stage.canvas.width/(image.width)
        loadedImage.scaleY = stage.canvas.width/(image.width)
        loadedImage.x = 0
        loadedImage.y = 0 
        loadedImage.alpha = filterAlpha

        stage.addChild(loadedImage)
        stage.update()
    }

    //uploading function and stores uploaded into hidden photo element
    /*
    function uploadFile(){
        console.log(window.currentFilter)
    	var photoElm = document.querySelector('#photo')
    	var file = document.querySelector('input[type="file"]').files[0];
    	var reader = new FileReader();

    	reader.onload = function() {
    		photoElm.src = reader.result; //Store uploaded photo in element
    		initUserImg(reader.result)
            
            document.querySelector("#drag").style.display="block"
            $(document).ready(function(){
                $("#drag").fadeOut(1000)
            })



    		frame = stage.getChildByName("frame")
        	stage.removeChild(frame)
        	stage.update()
        	var filter = new Image();
            filter.src = window.currentFilter
           	filter.onload = handleFilterLoad;                
    	}

    	if(file){
    		reader.readAsDataURL(file);}
    	else { photoElm.src = "" }

    }

    //scales image based on slider
    function scaleImage(){
    	currentScale = document.getElementById("myRange").value
    	curImg = stage.getChildByName("userPic")
        curImg.setTransform(curImg.x,curImg.y,(currentScale*3)/100,(currentScale*3)/100)
    	frame = stage.getChildByName("frame")
    	stage.removeChild(frame)
        rotRight(numrotRight%4)
        rotLeft(numrotLeft%4)
    	stage.update()
    	var filter = new Image();
        filter.src = window.currentFilter
       	filter.onload = handleFilterLoad;
    }

    function rotRight(num){
        regImg = stage.getChildByName("userPic")
        regImg.regX = regImg.getBounds().width/2
        regImg.regY = regImg.getBounds().height/2
        regImg.rotation += num*90;
        numrotRight += 1
        stage.update()
    }
    function rotLeft(num){
        regImg = stage.getChildByName("userPic")
        regImg.regX = regImg.getBounds().width/2
        regImg.regY = regImg.getBounds().height/2
        regImg.rotation +=-90 * num;
        numrotLeft += 1
        stage.update()
    }



    //determines current slide and applies to global currentFilter
    function chooseSlide(){
        document.querySelector(".reveal").style.display = "none"
        document.querySelector("canvas").style.display = "block"
        var currentSlide = $('#slides').slick('slickCurrentSlide');

        switch(currentSlide) {
            case 0:
                window.currentFilter = "english.png"                    
                break;
            case 1:
                window.currentFilter = "spanish.png"                    
                break;
        }

        var filter = new Image();
        filter.src = window.currentFilter
        filter.onload = handleFilterLoad;
    }

    //save image to jPEG as a base64 datafile
    function saveImage(){
        if (window.currentFilter == "a"){
            alert("Please select a filter first.")
            return
        }
    	var dataURL = stage.toDataURL("ffffff","image/jpeg");
    	document.getElementById("saved").src = dataURL
    	document.querySelector("#imgControl").style.display= "none"
    	document.querySelector("canvas").style.display = "none"
    	document.querySelector("#saved").style.display= "block"
    	document.querySelector("#saveInstructions").style.display = "block"
    }*/

}
