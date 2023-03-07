window.onload = function () {

  function carMain() {
    if (window.innerWidth <= 768) {
      var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
      init()
      function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp = AdobeAn.getComposition("AF44C0264AF7463681291D72EA880084");
        var lib = comp.getLibrary();
        createjs.MotionGuidePlugin.install();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
      }
      function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
      }
      function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        exportRoot = new lib.car768();
        stage = new lib.Stage(canvas);



        exportRoot.stop()
        exportRoot.instance.instance.stop()
        // console.log(exportRoot.instance)
        $(window).scroll(function () {
          var scrollTop = $(window).scrollTop();
          var docHeight = $(document).height();
          var winHeight = $(window).height();
          var canvasTop = $(".world").offset().top | 0;
          var frame = (scrollTop - canvasTop) / (docHeight - winHeight) * 59 | 0;
          // console.log('docHeight', docHeight)
          exportRoot.instance.gotoAndStop(frame)
          exportRoot.instance.instance.gotoAndStop(frame)
        });
        $(window).scroll();
        $(window).resize(function () {
          $(window).scroll()
        });


        //Registers the "tick" event listener.
        fnStartAnimation = function () {
          stage.addChild(exportRoot);
          createjs.Ticker.framerate = lib.properties.fps;
          createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        AdobeAn.makeResponsive(true, 'width', true, 2, [canvas, anim_container, dom_overlay_container], stage);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
      }
    } else {
      var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
      init()
      function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp = AdobeAn.getComposition("702BBA55E5D144039384E6E63386C6F3");
        var lib = comp.getLibrary();
        createjs.MotionGuidePlugin.install();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
      }
      function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
      }
      function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        exportRoot = new lib.car3();
        stage = new lib.Stage(canvas);

        exportRoot.stop()
        // exportRoot.instance.stop()
        // exportRoot.instance.instance.stop()
        // console.log('exportRoot.instance',exportRoot.instance)

        const docHeight = $(document).height();
        $(window).scroll(function () {
          var scrollTop = $(window).scrollTop();
          var winHeight = $(window).height();
          var canvasTop = $(".world").offset().top | 0;
          var frame = (scrollTop - canvasTop) / (docHeight - winHeight) * 89 | 0;
          // console.log('scrollTop', scrollTop)
          // console.log('docHeight', docHeight)
          // console.log('winHeight', winHeight)
          // console.log('canvasTop', canvasTop)
          // console.log(`${scrollTop} - ${ canvasTop} / ${docHeight} - ${winHeight} = ${frame}`)
          // console.log('frame', frame)
          exportRoot.gotoAndStop(frame)
          exportRoot.instance.gotoAndStop(frame)

        });


        $(window).scroll();
        $(window).resize(function () {
          $(window).scroll()
        });

        //Registers the "tick" event listener.
        fnStartAnimation = function () {
          stage.addChild(exportRoot);
          createjs.Ticker.framerate = lib.properties.fps;
          createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        AdobeAn.makeResponsive(true, 'width', true, 2, [canvas, anim_container, dom_overlay_container], stage);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
      }
    }

  }
  carMain()

  $(window).resize(function () {

    carMain()
  })

}
