if (window.innerWidth <= 768) {
  (function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [
      { name: "car_768_atlas_1", frames: [[770, 0, 224, 151], [0, 0, 768, 1910]] }
    ];


    (lib.AnMovieClip = function () {
      this.actionFrames = [];
      this.ignorePause = false;
      this.gotoAndPlay = function (positionOrLabel) {
        cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
      }
      this.play = function () {
        cjs.MovieClip.prototype.play.call(this);
      }
      this.gotoAndStop = function (positionOrLabel) {
        cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
      }
      this.stop = function () {
        cjs.MovieClip.prototype.stop.call(this);
      }
    }).prototype = p = new cjs.MovieClip();
    // symbols:



    (lib.CachedBmp_3 = function () {
      this.initialize(ss["car_768_atlas_1"]);
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.w768 = function () {
      this.initialize(ss["car_768_atlas_1"]);
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
      var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
      clone.gotoAndStop(this.currentFrame);
      clone.paused = this.paused;
      clone.framerate = this.framerate;
      return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
      var prototype = cjs.extend(symbol, cjs.MovieClip);
      prototype.clone = mc_symbol_clone;
      prototype.nominalBounds = nominalBounds;
      prototype.frameBounds = frameBounds;
      return prototype;
    }


    (lib.元件2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.w768();
      this.instance.setTransform(-384, -1910);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-384, -1910, 768, 1910), null);


    (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AouF5IAArxIRdAAIAALxg");
      mask.setTransform(55.925, 37.65);

      // 圖層_3
      this.instance = new lib.CachedBmp_3();
      this.instance.setTransform(0, 0, 0.5, 0.5);

      var maskedShapeInstanceList = [this.instance];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 111.9, 75.3), null);


    (lib.元件1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup();
      this.instance.setTransform(0, -37.7, 1, 1, 0, 0, 0, 55.9, 37.6);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-55.9, -75.3, 112, 75.5), null);


    (lib.元件3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // timeline functions:
      this.frame_59 = function () {
        this.stop()
      }

      // actions tween:
      this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

      // 圖層_2
      this.instance = new lib.元件1();
      this.instance.setTransform(-361.35, -1290.65, 1, 1, -7.6868);

      this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 0.1, regY: 0.1, rotation: -0.953, guide: { path: [-361.2, -1290.4, -310.2, -1284, -256.2, -1274] } }, 8).to({ regY: 0.2, scaleX: 0.9999, scaleY: 0.9999, rotation: 2.7395, guide: { path: [-256.2, -1274, -232.1, -1269.5, -207.5, -1264.4, -179, -1258.4, -154.5, -1252.4] } }, 8).to({ rotation: 8.0248, guide: { path: [-154.5, -1252.4, -103.1, -1239.6, -69.2, -1226.3] } }, 7).to({ regY: 0.3, rotation: 21.2786, guide: { path: [-69.1, -1226.3, -39.6, -1214.7, -23.3, -1202.7] } }, 4).to({ regX: 0.2, regY: 0.4, scaleX: 0.9998, scaleY: 0.9998, rotation: 32.6576, guide: { path: [-23.1, -1202.7, -15.3, -1197, -10.5, -1191.2, -0.7, -1179.4, 16.2, -1166.3] } }, 4).to({ regY: 0.3, rotation: 16.8296, guide: { path: [16.4, -1166.3, 31.6, -1154.6, 52.5, -1141.8, 72.6, -1129.7, 96, -1117.7] } }, 7).to({ regX: 0, regY: 0, scaleX: 1, scaleY: 1, rotation: -7.6868, guide: { path: [96, -1117.8, 120.8, -1105.1, 149.4, -1092.7, 203.7, -1069, 258.1, -1052.1, 314.4, -1034.6, 356.8, -1028.7] } }, 21).wait(1));

      // FlashAICB
      this.instance_1 = new lib.元件2();
      this.instance_1.setTransform(37.4, -955, 1, 1, 0, 0, 0, 0, -955);

      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

      this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-426.8, -1910, 848.2, 1910);


    // stage content:
    (lib.car768 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 元件_3
      this.instance = new lib.元件3();
      this.instance.setTransform(343.8, 955, 1, 1, 0, 0, 0, -2.8, -955);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

      this._renderFirstFrame();

    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(303.8, 995, 464.2, 915);
    // library properties:
    lib.properties = {
      id: 'AF44C0264AF7463681291D72EA880084',
      width: 768,
      height: 1990,
      fps: 24,
      color: "#FFFFFF",
      opacity: 1.00,
      manifest: [
        { src: "images/car_768_atlas_1.png?1663682715391", id: "car_768_atlas_1" }
      ],
      preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
      createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
      this.tickEnabled = autoPlay;
    }
    p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
      an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
      an.bootstrapListeners.push(fnCallback);
      if (an.bootcompsLoaded.length > 0) {
        for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
          fnCallback(an.bootcompsLoaded[i]);
        }
      }
    };

    an.compositions = an.compositions || {};
    an.compositions['AF44C0264AF7463681291D72EA880084'] = {
      getStage: function () { return exportRoot.stage; },
      getLibrary: function () { return lib; },
      getSpriteSheet: function () { return ss; },
      getImages: function () { return img; }
    };

    an.compositionLoaded = function (id) {
      an.bootcompsLoaded.push(id);
      for (var j = 0; j < an.bootstrapListeners.length; j++) {
        an.bootstrapListeners[j](id);
      }
    }

    an.getComposition = function (id) {
      return an.compositions[id];
    }


    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers, stage) {
      var lastW, lastH, lastS = 1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih = window.innerHeight;
        var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
        if (isResp) {
          if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
            sRatio = lastS;
          }
          else if (!isScale) {
            if (iw < w || ih < h)
              sRatio = Math.min(xRatio, yRatio);
          }
          else if (scaleType == 1) {
            sRatio = Math.min(xRatio, yRatio);
          }
          else if (scaleType == 2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        domContainers[0].width = w * pRatio * sRatio;
        domContainers[0].height = h * pRatio * sRatio;
        domContainers.forEach(function (container) {
          container.style.width = w * sRatio + 'px';
          container.style.height = h * sRatio + 'px';
        });
        stage.scaleX = pRatio * sRatio;
        stage.scaleY = pRatio * sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
      }
    }
    an.handleSoundStreamOnTick = function (event) {
      if (!event.paused) {
        var stageChild = stage.getChildAt(0);
        if (!stageChild.paused || stageChild.ignorePause) {
          stageChild.syncStreamSounds();
        }
      }
    }
    an.handleFilterCache = function (event) {
      if (!event.paused) {
        var target = event.target;
        if (target) {
          if (target.filterCacheList) {
            for (var index = 0; index < target.filterCacheList.length; index++) {
              var cacheInst = target.filterCacheList[index];
              if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
              }
            }
          }
        }
      }
    }


  })(createjs = createjs || {}, AdobeAn = AdobeAn || {});
  var createjs, AdobeAn;
} else {
  (function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [
      { name: "car3_atlas_1", frames: [[0, 1174, 1347, 461], [0, 0, 2021, 627], [0, 629, 1773, 543]] },
      { name: "car3_atlas_2", frames: [[1052, 434, 229, 140], [0, 434, 1050, 160], [1283, 501, 60, 67], [1052, 576, 235, 100], [0, 0, 1394, 432], [44, 635, 37, 32], [0, 596, 42, 47], [44, 596, 37, 37], [0, 645, 42, 47], [1283, 434, 76, 65]] }
    ];


    (lib.AnMovieClip = function () {
      this.actionFrames = [];
      this.ignorePause = false;
      this.gotoAndPlay = function (positionOrLabel) {
        cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
      }
      this.play = function () {
        cjs.MovieClip.prototype.play.call(this);
      }
      this.gotoAndStop = function (positionOrLabel) {
        cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
      }
      this.stop = function () {
        cjs.MovieClip.prototype.stop.call(this);
      }
    }).prototype = p = new cjs.MovieClip();
    // symbols:



    (lib.CachedBmp_119 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_118 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_117 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_116 = function () {
      this.initialize(ss["car3_atlas_1"]);
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_115 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_114 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_113 = function () {
      this.initialize(ss["car3_atlas_1"]);
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_112 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_111 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_110 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_109 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_108 = function () {
      this.initialize(ss["car3_atlas_2"]);
      this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_107 = function () {
      this.initialize(ss["car3_atlas_1"]);
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_106 = function () {
      this.initialize(img.CachedBmp_106);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2918, 922);// helper functions:

    function mc_symbol_clone() {
      var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
      clone.gotoAndStop(this.currentFrame);
      clone.paused = this.paused;
      clone.framerate = this.framerate;
      return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
      var prototype = cjs.extend(symbol, cjs.MovieClip);
      prototype.clone = mc_symbol_clone;
      prototype.nominalBounds = nominalBounds;
      prototype.frameBounds = frameBounds;
      return prototype;
    }


    (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ao7FdIAAq5IR3AAIAAK5g");
      mask.setTransform(57.175, 34.925);

      // 圖層_3
      this.instance = new lib.CachedBmp_119();
      this.instance.setTransform(-0.05, 0, 0.5, 0.5);

      var maskedShapeInstanceList = [this.instance];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 114.4, 69.9), null);


    (lib.ClipGroup_40 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AiKB/IAAj9IEVAAIAAD9g");
      mask.setTransform(13.875, 12.7);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("ABpB/QgTgCgVgFQgngJgjgWQgZgRgWgVQgmglgUgpQgMgYgFgXIgFgYQgDgPADgIQABgEADgBQAHgCAFALQADAGACAKQAeBSBRA7QA+AvBDAQQAHACACACQAGAFgCAFQgCAKgXAAIgIAAg");
      this.shape.setTransform(13.8843, 12.7161);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0.1, 0, 27.7, 25.4), null);


    (lib.ClipGroup_39 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AipCqIAAlTIFTAAIAAFTg");
      mask.setTransform(17.025, 17.025);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("Ah3B5QgygyAAhHQAAhFAygyQAxgyBGAAQBGAAAyAyQAyAyAABFQAABHgyAyQgyAxhGAAQhGAAgxgxg");
      this.shape.setTransform(17.025, 17.025);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0, 0, 34.1, 34.1), null);


    (lib.ClipGroup_38 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AlCFDIAAqFIKFAAIAAKFg");
      mask.setTransform(32.325, 32.325);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AjjDkQhfheAAiGQAAiFBfhfQBeheCFAAQCGAABfBeQBeBfAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
      this.shape.setTransform(32.325, 32.325);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0, 0, 64.7, 64.7), null);


    (lib.ClipGroup_37 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AllFlIAArKILKAAIAALKg");
      mask.setTransform(35.75, 35.75);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("Aj8D9QhphpAAiUQAAiTBphpQBphpCTAAQCUAABpBpQBoBpAACTQAACUhoBpQhpBoiUAAQiTAAhphog");
      this.shape.setTransform(35.75, 35.75);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0, 0, 71.5, 71.5), null);


    (lib.ClipGroup_36 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AigCiIAAlDIFBAAIAAFDg");
      mask.setTransform(16.125, 16.15);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AhxByQgvgvAAhDQAAhCAvgvQAvgwBCAAQBDAAAvAwQAvAvAABCQAABDgvAvQgvAwhDAAQhCAAgvgwg");
      this.shape.setTransform(16.125, 16.15);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0, 0, 32.3, 32.3), null);


    (lib.ClipGroup_35 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag4A5IAAhxIBxAAIAABxg");
      mask.setTransform(5.7, 5.7);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AgoAoQgQgRAAgXQAAgXAQgRQASgQAWAAQAYAAAQAQQARARAAAXQAAAXgRARQgQARgYAAQgWAAgSgRg");
      this.shape.setTransform(5.7, 5.725);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


    (lib.ClipGroup_34 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag4A5IAAhxIBxAAIAABxg");
      mask.setTransform(5.7, 5.7);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AgoAoQgQgQAAgYQAAgWAQgSQASgQAWAAQAYAAAQAQQARASAAAWQAAAYgRAQQgQARgYAAQgWAAgSgRg");
      this.shape.setTransform(5.7, 5.7);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


    (lib.ClipGroup_33 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag1A2IAAhrIBrAAIAABrg");
      mask.setTransform(5.35, 5.375);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
      this.shape.setTransform(5.35, 5.375);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0, 0, 10.7, 10.8), null);


    (lib.ClipGroup_32 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhtBuIAAjbIDbAAIAADbg");
      mask.setTransform(11, 11);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AhNBNQgggfAAguQAAgtAgggQAhggAsAAQAuAAAfAgQAhAgAAAtQAAAughAfQgfAhguAAQgsAAghghg");
      this.shape.setTransform(11, 11);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0, 0, 22, 22), null);


    (lib.ClipGroup_31 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ah3B4IAAjvIDvAAIAADvg");
      mask.setTransform(12, 12);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AhUBVQgjgjAAgyQAAgwAjgkQAkgjAwAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgwAAgkgjg");
      this.shape.setTransform(12, 12);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0, 0, 24, 24), null);


    (lib.ClipGroup_30 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag1A2IAAhrIBrAAIAABrg");
      mask.setTransform(5.35, 5.35);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
      this.shape.setTransform(5.35, 5.35);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(0, 0, 10.7, 10.7), null);


    (lib.ClipGroup_29 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhvBwIAAjfIDfAAIAADfg");
      mask.setTransform(11.175, 11.2);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AhOBQQghgiAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAiQghAgguAAQgtAAghggg");
      this.shape.setTransform(11.175, 11.2);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0, 0, 22.4, 22.4), null);


    (lib.ClipGroup_28 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag2A3IAAhtIBsAAIAABtg");
      mask.setTransform(5.45, 5.475);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AglAnQgQgQgBgXQABgWAQgQQAPgQAWAAQAWAAAQAQQARAQgBAWQABAXgRAQQgQAQgWAAQgWAAgPgQg");
      this.shape.setTransform(5.45, 5.475);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0, 0, 10.9, 11), null);


    (lib.ClipGroup_27 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag2A3IAAhtIBtAAIAABtg");
      mask.setTransform(5.475, 5.475);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
      this.shape.setTransform(5.475, 5.475);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0, 0, 11, 11), null);


    (lib.ClipGroup_26 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag6A7IAAh1IB1AAIAAB1g");
      mask.setTransform(5.9, 5.9);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AgoAqQgSgSAAgYQAAgXASgSQARgRAXAAQAZAAARARQARASAAAXQAAAYgRASQgRARgZAAQgXAAgRgRg");
      this.shape.setTransform(5.875, 5.9);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0, 0, 11.8, 11.8), null);


    (lib.ClipGroup_25 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag4A5IAAhxIBxAAIAABxg");
      mask.setTransform(5.7, 5.7);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AgoAoQgQgQAAgYQAAgWAQgSQASgQAWAAQAYAAAQAQQARASAAAWQAAAYgRAQQgQARgYAAQgWAAgSgRg");
      this.shape.setTransform(5.7, 5.7);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


    (lib.ClipGroup_24 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ag+A/IAAh9IB9AAIAAB9g");
      mask.setTransform(6.275, 6.275);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EBEDFD").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTg");
      this.shape.setTransform(6.275, 6.275);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0, 0, 12.6, 12.6), null);


    (lib.ClipGroup_23 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhZBSIAAikICzAAIAACkg");
      mask.setTransform(9, 8.25);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AAqBPQgagGgWgPQgOgJgQgPQgYgYgOgbQgGgNgFgRQgGgYADgHQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAFgBADAHIAEAKQATA1A0AmQAnAeAtAMIAGACQADADAAADQgCAGgOAAQgMAAgUgDg");
      this.shape.setTransform(9.0145, 8.247);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0, 0, 18, 16.5), null);


    (lib.ClipGroup_22 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhuBvIAAjdIDdAAIAADdg");
      mask.setTransform(11.05, 11.05);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AhNBOQghggAAguQAAgtAhggQAgghAtAAQAuAAAgAhQAhAgAAAtQAAAughAgQggAhguAAQgtAAggghg");
      this.shape.setTransform(11.075, 11.075);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0, 0, 22.1, 22.1), null);


    (lib.ClipGroup_21 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
      mask.setTransform(21, 21);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");
      this.shape.setTransform(21, 21);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0, 0, 42, 42), null);


    (lib.ClipGroup_20 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AjnDoIAAnPIHPAAIAAHPg");
      mask.setTransform(23.225, 23.225);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AijCkQhEhEAAhgQAAhfBEhEQBEhEBfgBQBgABBEBEQBEBEAABfQAABghEBEQhEBFhgAAQhfAAhEhFg");
      this.shape.setTransform(23.225, 23.25);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0, 0, 46.5, 46.5), null);


    (lib.ClipGroup_19 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhgBZIAAixIDBAAIAACxg");
      mask.setTransform(9.725, 8.925);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AAuBUQgbgFgZgRQgRgLgQgPQgZgYgQgfQgHgQgFgRQgGgZADgIIADgDQAFgCADAIIAEALQAVA6A4ApQArAgAwAMIAHADQADADgBAEQgCAHgPAAQgNAAgVgFg");
      this.shape.setTransform(9.7387, 8.9718);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0, 0, 19.5, 17.9), null);


    (lib.ClipGroup_18 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ah3B4IAAjvIDvAAIAADvg");
      mask.setTransform(11.95, 11.95);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AhTBVQgkgkAAgxQAAgxAkgiQAigkAxAAQAxAAAkAkQAiAiABAxQgBAxgiAkQgkAigxABQgxgBgigig");
      this.shape.setTransform(11.95, 11.95);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0, 0, 23.9, 23.9), null);


    (lib.ClipGroup_17 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AjiDjIAAnFIHFAAIAAHFg");
      mask.setTransform(22.725, 22.7);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AigChQhChDAAheQAAhdBChCQBDhDBdAAQBeAABDBDQBCBCAABdQAABehCBDQhDBCheAAQhdAAhDhCg");
      this.shape.setTransform(22.725, 22.7);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0, 0, 45.5, 45.4), null);


    (lib.ClipGroup_16 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Aj6D7IAAn1IH1AAIAAH1g");
      mask.setTransform(25.125, 25.125);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AixCyQhJhKAAhoQAAhnBJhKQBKhJBnAAQBoAABKBJQBJBKAABnQAABohJBKQhKBJhoAAQhnAAhKhJg");
      this.shape.setTransform(25.125, 25.125);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0, 0, 50.3, 50.3), null);


    (lib.ClipGroup_15 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhoBgIAAi/IDRAAIAAC/g");
      mask.setTransform(10.5, 9.6);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("ABPBgQgQgBgOgEQgegGgagSQgSgMgRgQQgdgcgPgfQgJgSgEgRIgEgSQgCgMACgGQABgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAGgBADAIIAEANQAXA9A9AsQAuAjAzAOQAGABACACQADADAAAEQgCAHgSAAIgGAAg");
      this.shape.setTransform(10.521, 9.5995);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0.1, 0, 20.9, 19.2), null);


    (lib.ClipGroup_14 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AiACBIAAkBIEBAAIAAEBg");
      mask.setTransform(12.875, 12.875);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AhaBbQgmglAAg2QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA2gmAlQglAmg2AAQg0AAgmgmg");
      this.shape.setTransform(12.875, 12.875);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0, 0, 25.8, 25.8), null);


    (lib.ClipGroup_13 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Aj0D0IAAnoIHoAAIAAHog");
      mask.setTransform(24.45, 24.45);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AisCtQhIhHAAhmQAAhkBIhIQBIhIBkAAQBmAABHBIQBHBIAABkQAABmhHBHQhHBHhmAAQhkAAhIhHg");
      this.shape.setTransform(24.45, 24.45);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0, 0, 48.9, 48.9), null);


    (lib.ClipGroup_12 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AkOEOIAAocIIcAAIAAIcg");
      mask.setTransform(27.05, 27.05);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("Ai+C/QhQhPAAhwQAAhvBQhPQBPhQBvAAQBwAABPBQQBPBPAABvQAABwhPBPQhPBQhwgBQhvABhPhQg");
      this.shape.setTransform(27.05, 27.05);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0, 0, 54.1, 54.1), null);


    (lib.ClipGroup_11 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AhgBZIAAixIDBAAIAACxg");
      mask.setTransform(9.675, 8.85);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AAtBUQgcgGgXgQQgTgMgOgOQgagagOgdQgJgSgDgOQgHgZADgIQABgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAFgCAEAIIADALQAVA5A4ApQArAgAvAMIAHADQAEADgCADQgBAIgQAAQgMAAgWgFg");
      this.shape.setTransform(9.6731, 8.8893);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0, 0, 19.4, 17.7), null);


    (lib.ClipGroup_10 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ah2B3IAAjtIDtAAIAADtg");
      mask.setTransform(11.875, 11.875);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AhTBUQgjgjAAgxQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjg");
      this.shape.setTransform(11.875, 11.875);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0, 0, 23.8, 23.8), null);


    (lib.ClipGroup_9 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AjhDiIAAnDIHCAAIAAHDg");
      mask.setTransform(22.55, 22.575);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AifCfQhChCAAhdQAAhcBChCQBDhCBcAAQBdAABDBCQBCBCgBBcQABBdhCBCQhDBDhdAAQhcAAhDhDg");
      this.shape.setTransform(22.55, 22.6);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0, 0.1, 45.1, 45.1), null);


    (lib.ClipGroup_8 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Aj5D5IAAnxIHyAAIAAHxg");
      mask.setTransform(24.95, 24.925);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBKBKgBBmQABBnhKBJQhJBKhngBQhmABhKhKg");
      this.shape.setTransform(24.95, 24.95);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0, 0, 49.9, 49.9), null);


    (lib.ClipGroup_7 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ai1CmIAAlMIFrAAIAAFMg");
      mask.setTransform(18.2, 16.65);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("ABWCeQg0gLgugfQgggVgegcQgvgugdg5QgOgegJgfIgGgfQgEgUAFgLQACgFADgBQAJgDAHAOQADAIAEAOQAnBqBpBOQBPA8BbAYQAJACADADQAHAFgBAHQgEAOgdAAQgYAAgngJg");
      this.shape.setTransform(18.1998, 16.6564);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0, 0, 36.4, 33.3), null);


    (lib.ClipGroup_6 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AjeDfIAAm9IG9AAIAAG9g");
      mask.setTransform(22.325, 22.325);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AidCeQhBhCAAhcQAAhcBBhBQBChBBbAAQBdAABBBBQBBBBAABcQAABchBBCQhBBBhdAAQhbAAhChBg");
      this.shape.setTransform(22.325, 22.35);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0, 0.1, 44.7, 44.6), null);


    (lib.ClipGroup_5 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AmnGoIAAtPINPAAIAANPg");
      mask.setTransform(42.4, 42.375);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#D0DFEA").s().p("AkrEsQh8h8AAiwQAAivB8h8QB9h8CuAAQCvAAB9B8QB8B8AACvQAACwh8B8Qh9B8ivAAQiuAAh9h8g");
      this.shape.setTransform(42.4, 42.375);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0, 0, 84.8, 84.8), null);


    (lib.ClipGroup_4 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("AnUHVIAAupIOpAAIAAOpg");
      mask.setTransform(46.9, 46.875);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#FFFFFF").s().p("AlKFMQiKiKAAjCQAAjBCKiJQCJiKDBAAQDDAACICKQCKCJAADBQAADCiKCKQiICJjDAAQjBAAiJiJg");
      this.shape.setTransform(46.9, 46.875);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0, 0, 93.8, 93.8), null);


    (lib.ClipGroup_3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("Ego/AGQIAAsgMBR/AAAIAAMgg");
      mask.setTransform(262.425, 40.05);

      // 圖層_3
      this.instance = new lib.CachedBmp_118();
      this.instance.setTransform(0, 0, 0.5, 0.5);

      var maskedShapeInstanceList = [this.instance];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0, 0, 524.9, 80), null);


    (lib.ClipGroup_2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("EhqtA/mMAAAh/LMDVbAAAMAAAB/Lg");
      mask.setTransform(683, 407.025);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.lf(["#FFFFFF", "#C8D9D6"], [0, 1], 0, 407, 0, -407).s().p("EhqtA/mMAAAh/LMDVbAAAMAAAB/Lg");
      this.shape.setTransform(683, 407.025);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0, 0, 1366, 814.1), null);


    (lib.ClipGroup_1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("EhqtBKwMAAAiVcQCEABJDgCQGkgCEJAAQUnAARWAsQYdA9WhCaUA7QAGWAvcAQYMAAAB6ug");
      mask.setTransform(683, 478.425);

      // 圖層_3
      this.shape = new cjs.Shape();
      this.shape.graphics.lf(["#FFFFFF", "#B9CFA1"], [0, 1], 0, 478.4, 0, -478.4).s().p("EhqtBKwMAAAiVfMDVbAAAMAAACVfg");
      this.shape.setTransform(683, 478.425);

      var maskedShapeInstanceList = [this.shape];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0, 0, 1366, 956.9), null);


    (lib.元件2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup();
      this.instance.setTransform(-0.05, -34.85, 1, 1, 0, 0, 0, 57.1, 35);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-57.2, -69.8, 114.5, 70), null);


    (lib.Group_37 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_3();
      this.instance.setTransform(262.4, 40.1, 1, 1, 0, 0, 0, 262.4, 40.1);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0, 0, 525, 80.1), null);


    (lib.Group_36 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_4();
      this.instance.setTransform(46.9, 46.9, 1, 1, 0, 0, 0, 46.9, 46.9);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0, 0, 93.8, 93.8), null);


    (lib.Group_35 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_5();
      this.instance.setTransform(42.4, 42.4, 1, 1, 0, 0, 0, 42.4, 42.4);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0, 0, 84.8, 84.8), null);


    (lib.Group_34 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_6();
      this.instance.setTransform(22.3, 22.3, 1, 1, 0, 0, 0, 22.3, 22.3);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0, 0, 44.7, 44.7), null);


    (lib.Group_33 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_7();
      this.instance.setTransform(18.2, 16.6, 1, 1, 0, 0, 0, 18.2, 16.6);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0, 0, 36.4, 33.3), null);


    (lib.Group_32 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_8();
      this.instance.setTransform(24.9, 24.9, 1, 1, 0, 0, 0, 24.9, 24.9);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0, 0, 49.9, 49.9), null);


    (lib.Group_31 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_9();
      this.instance.setTransform(22.6, 22.6, 1, 1, 0, 0, 0, 22.6, 22.6);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0, 0, 45.1, 45.2), null);


    (lib.Group_30 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_10();
      this.instance.setTransform(11.8, 11.8, 1, 1, 0, 0, 0, 11.8, 11.8);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0, 0, 23.8, 23.8), null);


    (lib.Group_29 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_11();
      this.instance.setTransform(9.7, 8.8, 1, 1, 0, 0, 0, 9.7, 8.8);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0, 0, 19.4, 17.8), null);


    (lib.Group_28 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_12();
      this.instance.setTransform(27.1, 27.1, 1, 1, 0, 0, 0, 27.1, 27.1);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0, 0, 54.1, 54.1), null);


    (lib.Group_27 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_13();
      this.instance.setTransform(24.4, 24.4, 1, 1, 0, 0, 0, 24.4, 24.4);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0, 0, 48.9, 48.9), null);


    (lib.Group_26 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_14();
      this.instance.setTransform(12.8, 12.8, 1, 1, 0, 0, 0, 12.8, 12.8);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0, 0, 25.8, 25.8), null);


    (lib.Group_25 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_15();
      this.instance.setTransform(10.5, 9.6, 1, 1, 0, 0, 0, 10.5, 9.6);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0, 0, 21, 19.2), null);


    (lib.Group_24 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_16();
      this.instance.setTransform(25.1, 25.1, 1, 1, 0, 0, 0, 25.1, 25.1);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0, 0, 50.3, 50.3), null);


    (lib.Group_23 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_17();
      this.instance.setTransform(22.7, 22.7, 1, 1, 0, 0, 0, 22.7, 22.7);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0, 0, 45.5, 45.4), null);


    (lib.Group_22 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_18();
      this.instance.setTransform(12, 12, 1, 1, 0, 0, 0, 12, 12);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0, 0, 23.9, 23.9), null);


    (lib.Group_21 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_19();
      this.instance.setTransform(9.7, 9, 1, 1, 0, 0, 0, 9.7, 9);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0, 0, 19.5, 17.9), null);


    (lib.Group_20 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_20();
      this.instance.setTransform(23.2, 23.2, 1, 1, 0, 0, 0, 23.2, 23.2);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0, 0, 46.5, 46.5), null);


    (lib.Group_19 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_21();
      this.instance.setTransform(21, 21, 1, 1, 0, 0, 0, 21, 21);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0, 0, 42, 42), null);


    (lib.Group_18 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_22();
      this.instance.setTransform(11.1, 11.1, 1, 1, 0, 0, 0, 11.1, 11.1);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0, 0, 22.2, 22.2), null);


    (lib.Group_17 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_23();
      this.instance.setTransform(9, 8.2, 1, 1, 0, 0, 0, 9, 8.2);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0, 0, 18, 16.5), null);


    (lib.Group_16 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_24();
      this.instance.setTransform(6.2, 6.2, 1, 1, 0, 0, 0, 6.2, 6.2);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0, 0, 12.6, 12.6), null);


    (lib.Group_15 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_25();
      this.instance.setTransform(5.7, 5.7, 1, 1, 0, 0, 0, 5.7, 5.7);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


    (lib.Group_14 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_26();
      this.instance.setTransform(5.9, 5.9, 1, 1, 0, 0, 0, 5.9, 5.9);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0, 0, 11.8, 11.8), null);


    (lib.Group_13 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_27();
      this.instance.setTransform(5.5, 5.5, 1, 1, 0, 0, 0, 5.5, 5.5);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0, 0, 11, 11), null);


    (lib.Group_12 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_28();
      this.instance.setTransform(5.5, 5.5, 1, 1, 0, 0, 0, 5.5, 5.5);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0, 0, 10.9, 11), null);


    (lib.Group_11 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_29();
      this.instance.setTransform(11.2, 11.2, 1, 1, 0, 0, 0, 11.2, 11.2);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0, 0, 22.4, 22.4), null);


    (lib.Group_10 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_30();
      this.instance.setTransform(5.4, 5.4, 1, 1, 0, 0, 0, 5.4, 5.4);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0, 0, 10.7, 10.7), null);


    (lib.Group_9 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_31();
      this.instance.setTransform(12, 12, 1, 1, 0, 0, 0, 12, 12);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0, 0, 24, 24), null);


    (lib.Group_8 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_32();
      this.instance.setTransform(11, 11, 1, 1, 0, 0, 0, 11, 11);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0, 0, 22, 22), null);


    (lib.Group_7 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_33();
      this.instance.setTransform(5.4, 5.4, 1, 1, 0, 0, 0, 5.4, 5.4);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0, 0, 10.7, 10.8), null);


    (lib.Group_6 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_34();
      this.instance.setTransform(5.7, 5.7, 1, 1, 0, 0, 0, 5.7, 5.7);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


    (lib.Group_5 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_35();
      this.instance.setTransform(5.7, 5.7, 1, 1, 0, 0, 0, 5.7, 5.7);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0, 0, 11.4, 11.5), null);


    (lib.Group_4 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_36();
      this.instance.setTransform(16.1, 16.1, 1, 1, 0, 0, 0, 16.1, 16.1);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0, 0, 32.3, 32.3), null);


    (lib.Group_3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_37();
      this.instance.setTransform(35.8, 35.8, 1, 1, 0, 0, 0, 35.8, 35.8);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0, 0, 71.5, 71.5), null);


    (lib.Group_2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_38();
      this.instance.setTransform(32.3, 32.3, 1, 1, 0, 0, 0, 32.3, 32.3);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0, 0, 64.7, 64.7), null);


    (lib.Group_1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_39();
      this.instance.setTransform(17, 17, 1, 1, 0, 0, 0, 17, 17);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 34.1, 34.1), null);


    (lib.Group = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_40();
      this.instance.setTransform(13.8, 12.7, 1, 1, 0, 0, 0, 13.8, 12.7);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 27.8, 25.5), null);


    (lib.ClipGroup_0 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("EhqtB7cMAAAj23MDVbAAAMAAAD23g");
      mask.setTransform(728, 790);

      // 圖層_3
      this.instance = new lib.Group();
      this.instance.setTransform(37.55, 175.5, 1, 1, 0, 0, 0, 13.8, 12.7);
      this.instance.alpha = 0.8008;

      this.instance_1 = new lib.CachedBmp_117();
      this.instance_1.setTransform(51.2, 132.1, 0.5, 0.5);

      this.instance_2 = new lib.Group_1();
      this.instance_2.setTransform(42.4, 165.8, 1, 1, 0, 0, 0, 17, 17);
      this.instance_2.alpha = 0.6016;

      this.instance_3 = new lib.Group_2();
      this.instance_3.setTransform(52.1, 159.55, 1, 1, 0, 0, 0, 32.3, 32.3);
      this.instance_3.alpha = 0.3984;

      this.instance_4 = new lib.Group_3();
      this.instance_4.setTransform(52.2, 159.6, 1, 1, 0, 0, 0, 35.8, 35.8);
      this.instance_4.alpha = 0.8984;

      this.instance_5 = new lib.CachedBmp_116();
      this.instance_5.setTransform(398.1, 177.9, 0.5, 0.5);

      this.instance_6 = new lib.Group_4();
      this.instance_6.setTransform(415.15, 362.85, 1, 1, 0, 0, 0, 16.1, 16.1);
      this.instance_6.alpha = 0.6016;

      this.instance_7 = new lib.Group_5();
      this.instance_7.setTransform(928.75, 317.15, 1, 1, 0, 0, 0, 5.7, 5.7);
      this.instance_7.alpha = 0.6016;

      this.instance_8 = new lib.Group_6();
      this.instance_8.setTransform(913.5, 301.25, 1, 1, 0, 0, 0, 5.7, 5.7);
      this.instance_8.alpha = 0.6016;

      this.instance_9 = new lib.CachedBmp_115();
      this.instance_9.setTransform(955.8, 214.7, 0.5, 0.5);

      this.instance_10 = new lib.Group_7();
      this.instance_10.setTransform(1052.15, 209.85, 1, 1, 0, 0, 0, 5.4, 5.4);
      this.instance_10.alpha = 0.6016;

      this.instance_11 = new lib.Group_8();
      this.instance_11.setTransform(454.65, 325, 1, 1, 0, 0, 0, 11, 11);
      this.instance_11.alpha = 0.6016;

      this.instance_12 = new lib.Group_9();
      this.instance_12.setTransform(998.75, 392.3, 1, 1, 0, 0, 0, 12, 12);
      this.instance_12.alpha = 0.6016;

      this.instance_13 = new lib.Group_10();
      this.instance_13.setTransform(705.95, 402.15, 1, 1, 0, 0, 0, 5.4, 5.4);
      this.instance_13.alpha = 0.6016;

      this.instance_14 = new lib.Group_11();
      this.instance_14.setTransform(566.7, 190.15, 1, 1, 0, 0, 0, 11.2, 11.2);
      this.instance_14.alpha = 0.6016;

      this.instance_15 = new lib.Group_12();
      this.instance_15.setTransform(663.95, 287.6, 1, 1, 0, 0, 0, 5.5, 5.5);
      this.instance_15.alpha = 0.6016;

      this.instance_16 = new lib.Group_13();
      this.instance_16.setTransform(545.85, 379.05, 1, 1, 0, 0, 0, 5.5, 5.5);
      this.instance_16.alpha = 0.6016;

      this.instance_17 = new lib.Group_14();
      this.instance_17.setTransform(1064.35, 367.3, 1, 1, 0, 0, 0, 5.9, 5.9);
      this.instance_17.alpha = 0.6016;

      this.instance_18 = new lib.Group_15();
      this.instance_18.setTransform(744.75, 201.45, 1, 1, 0, 0, 0, 5.7, 5.7);
      this.instance_18.alpha = 0.6016;

      this.instance_19 = new lib.CachedBmp_114();
      this.instance_19.setTransform(381.6, 186.6, 0.5, 0.5);

      this.instance_20 = new lib.Group_16();
      this.instance_20.setTransform(878.05, 206.4, 1, 1, 0, 0, 0, 6.2, 6.2);
      this.instance_20.alpha = 0.6016;

      this.instance_21 = new lib.CachedBmp_113();
      this.instance_21.setTransform(191.25, 59.85, 0.5, 0.5);

      this.instance_22 = new lib.Group_17();
      this.instance_22.setTransform(1244.9, 131.7, 1, 1, 0, 0, 0, 9, 8.2);
      this.instance_22.alpha = 0.8008;

      this.instance_23 = new lib.CachedBmp_112();
      this.instance_23.setTransform(1253.7, 103.55, 0.5, 0.5);

      this.instance_24 = new lib.Group_18();
      this.instance_24.setTransform(1248.05, 125.5, 1, 1, 0, 0, 0, 11.1, 11.1);
      this.instance_24.alpha = 0.6016;

      this.instance_25 = new lib.Group_19();
      this.instance_25.setTransform(1254.35, 121.4, 1, 1, 0, 0, 0, 21, 21);
      this.instance_25.alpha = 0.3984;

      this.instance_26 = new lib.Group_20();
      this.instance_26.setTransform(1254.3, 121.35, 1, 1, 0, 0, 0, 23.2, 23.2);
      this.instance_26.alpha = 0.8984;

      this.instance_27 = new lib.Group_21();
      this.instance_27.setTransform(852.15, 122.9, 1, 1, 0, 0, 0, 9.7, 9);
      this.instance_27.alpha = 0.8008;

      this.instance_28 = new lib.CachedBmp_111();
      this.instance_28.setTransform(861.7, 92.3, 0.5, 0.5);

      this.instance_29 = new lib.Group_22();
      this.instance_29.setTransform(855.6, 116.1, 1, 1, 0, 0, 0, 12, 12);
      this.instance_29.alpha = 0.6016;

      this.instance_30 = new lib.Group_23();
      this.instance_30.setTransform(862.35, 111.65, 1, 1, 0, 0, 0, 22.7, 22.7);
      this.instance_30.alpha = 0.3984;

      this.instance_31 = new lib.Group_24();
      this.instance_31.setTransform(862.35, 111.6, 1, 1, 0, 0, 0, 25.1, 25.1);
      this.instance_31.alpha = 0.8984;

      this.instance_32 = new lib.Group_25();
      this.instance_32.setTransform(412.1, 76.2, 1, 1, 0, 0, 0, 10.5, 9.6);
      this.instance_32.alpha = 0.8008;

      this.instance_33 = new lib.CachedBmp_110();
      this.instance_33.setTransform(425.75, 43.7, 0.5, 0.5);

      this.instance_34 = new lib.Group_26();
      this.instance_34.setTransform(420.35, 70.2, 1, 1, 0, 0, 0, 12.8, 12.8);
      this.instance_34.alpha = 0.6016;

      this.instance_35 = new lib.Group_27();
      this.instance_35.setTransform(423.05, 64.1, 1, 1, 0, 0, 0, 24.4, 24.4);
      this.instance_35.alpha = 0.3984;

      this.instance_36 = new lib.Group_28();
      this.instance_36.setTransform(423.15, 64.2, 1, 1, 0, 0, 0, 27.1, 27.1);
      this.instance_36.alpha = 0.8984;

      this.instance_37 = new lib.Group_29();
      this.instance_37.setTransform(219.2, 318.75, 1, 1, 0, 0, 0, 9.7, 8.8);
      this.instance_37.alpha = 0.8008;

      this.instance_38 = new lib.CachedBmp_109();
      this.instance_38.setTransform(228.65, 288.5, 0.5, 0.5);

      this.instance_39 = new lib.Group_30();
      this.instance_39.setTransform(222.45, 312, 1, 1, 0, 0, 0, 11.8, 11.8);
      this.instance_39.alpha = 0.6016;

      this.instance_40 = new lib.Group_31();
      this.instance_40.setTransform(229.35, 307.7, 1, 1, 0, 0, 0, 22.6, 22.6);
      this.instance_40.alpha = 0.3984;

      this.instance_41 = new lib.Group_32();
      this.instance_41.setTransform(229.25, 307.65, 1, 1, 0, 0, 0, 24.9, 24.9);
      this.instance_41.alpha = 0.8984;

      this.instance_42 = new lib.Group_33();
      this.instance_42.setTransform(1381.3, 359.95, 1, 1, 0, 0, 0, 18.2, 16.6);
      this.instance_42.alpha = 0.8008;

      this.instance_43 = new lib.CachedBmp_108();
      this.instance_43.setTransform(1399.1, 303.05, 0.5, 0.5);

      this.instance_44 = new lib.Group_34();
      this.instance_44.setTransform(1387.55, 347.25, 1, 1, 0, 0, 0, 22.3, 22.3);
      this.instance_44.alpha = 0.6016;

      this.instance_45 = new lib.Group_35();
      this.instance_45.setTransform(1400.35, 339.1, 1, 1, 0, 0, 0, 42.4, 42.4);
      this.instance_45.alpha = 0.3984;

      this.instance_46 = new lib.Group_36();
      this.instance_46.setTransform(1400.35, 339.1, 1, 1, 0, 0, 0, 46.9, 46.9);
      this.instance_46.alpha = 0.8984;

      this.instance_47 = new lib.CachedBmp_107();
      this.instance_47.setTransform(451.95, 425.6, 0.5, 0.5);

      this.instance_48 = new lib.Group_37();
      this.instance_48.setTransform(1161.65, 574.1, 1, 1, 0, 0, 0, 262.4, 40.1);
      this.instance_48.alpha = 0.1992;

      this.instance_49 = new lib.CachedBmp_106();
      this.instance_49.setTransform(0, 476.85, 0.5, 0.5);

      var maskedShapeInstanceList = [this.instance, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16, this.instance_17, this.instance_18, this.instance_19, this.instance_20, this.instance_21, this.instance_22, this.instance_23, this.instance_24, this.instance_25, this.instance_26, this.instance_27, this.instance_28, this.instance_29, this.instance_30, this.instance_31, this.instance_32, this.instance_33, this.instance_34, this.instance_35, this.instance_36, this.instance_37, this.instance_38, this.instance_39, this.instance_40, this.instance_41, this.instance_42, this.instance_43, this.instance_44, this.instance_45, this.instance_46, this.instance_47, this.instance_48, this.instance_49];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_49 }, { t: this.instance_48 }, { t: this.instance_47 }, { t: this.instance_46 }, { t: this.instance_45 }, { t: this.instance_44 }, { t: this.instance_43 }, { t: this.instance_42 }, { t: this.instance_41 }, { t: this.instance_40 }, { t: this.instance_39 }, { t: this.instance_38 }, { t: this.instance_37 }, { t: this.instance_36 }, { t: this.instance_35 }, { t: this.instance_34 }, { t: this.instance_33 }, { t: this.instance_32 }, { t: this.instance_31 }, { t: this.instance_30 }, { t: this.instance_29 }, { t: this.instance_28 }, { t: this.instance_27 }, { t: this.instance_26 }, { t: this.instance_25 }, { t: this.instance_24 }, { t: this.instance_23 }, { t: this.instance_22 }, { t: this.instance_21 }, { t: this.instance_20 }, { t: this.instance_19 }, { t: this.instance_18 }, { t: this.instance_17 }, { t: this.instance_16 }, { t: this.instance_15 }, { t: this.instance_14 }, { t: this.instance_13 }, { t: this.instance_12 }, { t: this.instance_11 }, { t: this.instance_10 }, { t: this.instance_9 }, { t: this.instance_8 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(45, 37.1, 1366, 900.8), null);


    (lib.ClipGroup_41 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_2 (mask)
      var mask_1 = new cjs.Shape();
      mask_1._off = true;
      mask_1.graphics.p("Ehx/B7cMAAAj23MDj+AAAMAAAD23g");
      mask_1.setTransform(729.55, 790);

      // 圖層_3
      this.instance_1 = new lib.ClipGroup_0();
      this.instance_1.setTransform(729.6, 790, 1, 1, 0, 0, 0, 729.6, 790);

      this.instance_2 = new lib.ClipGroup_1();
      this.instance_2.setTransform(728, 940.1, 1, 1, 0, 0, 0, 683, 478.4);

      this.instance_3 = new lib.ClipGroup_2();
      this.instance_3.setTransform(728, 407, 1, 1, 0, 0, 0, 683, 407);

      var maskedShapeInstanceList = [this.instance_1, this.instance_2, this.instance_3];

      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
      }

      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0, 0, 1459, 1580), null);


    (lib.元件1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // 圖層_1
      this.instance = new lib.ClipGroup_41();
      this.instance.setTransform(1.6, -628.55, 1, 1, 0, 0, 0, 729.6, 790);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-728, -1418.5, 1459.1, 1580), null);


    (lib.元件3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      // timeline functions:
      this.frame_89 = function () {
        this.stop()
      }

      // actions tween:
      this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

      // FlashAICB
      this.instance = new lib.元件2();
      this.instance.setTransform(-672.8, -937.65);

      this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 0.1, regY: 0.1, rotation: 14.9992, guide: { path: [-672.7, -937.6, -668.1, -937.4, -663.2, -937.2, -628, -935.8, -577.6, -932.4, -462.8, -924.8, -364.2, -912.4, -274.2, -901.1, -206.2, -886.8] } }, 29).to({ regX: 0.2, rotation: 44.9994, guide: { path: [-206, -886.8, -169.8, -879.2, -139.9, -870.8, -39.1, -842.3, -15.4, -805.7] } }, 13).to({ regX: 0, regY: 0, rotation: 0, guide: { path: [-15.3, -805.6, -13.7, -803.2, -12.5, -800.7, 7.8, -760.1, 93.1, -716, 167.4, -677.6, 280.8, -641.4, 381.6, -609.2, 486.3, -587.1, 556, -572.3, 606, -566.4] } }, 47).wait(1));

      // FlashAICB
      this.instance_1 = new lib.元件1();
      this.instance_1.setTransform(48.6, -628.6, 1, 1, 0, 0, 0, 1.6, -628.6);

      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

      this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-730, -1418.5, 1508.1, 1580);


    // stage content:
    (lib.car3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = false; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);

      this.actionFrames = [89];
      // timeline functions:
      this.frame_89 = function () {
        this.stop()
      }

      // actions tween:
      this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

      // 圖層_1
      this.instance = new lib.元件3();
      this.instance.setTransform(660.1, 789.95, 1, 1, 0, 0, 0, 24.1, -628.6);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({ y: 582.2 }, 23).wait(22));

      this._renderFirstFrame();

    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(589, 582.3, 825.0999999999999, 997.7);
    // library properties:
    lib.properties = {
      id: '702BBA55E5D144039384E6E63386C6F3',
      width: 1366,
      height: 1580,
      fps: 30,
      color: "#FFFFFF",
      opacity: 1.00,
      manifest: [
        { src: "images/CachedBmp_106.png?1663744344339", id: "CachedBmp_106" },
        { src: "images/car3_atlas_1.png?1663744344265", id: "car3_atlas_1" },
        { src: "images/car3_atlas_2.png?1663744344265", id: "car3_atlas_2" }
      ],
      preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
      createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
      this.tickEnabled = autoPlay;
    }
    p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
      an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
      an.bootstrapListeners.push(fnCallback);
      if (an.bootcompsLoaded.length > 0) {
        for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
          fnCallback(an.bootcompsLoaded[i]);
        }
      }
    };

    an.compositions = an.compositions || {};
    an.compositions['702BBA55E5D144039384E6E63386C6F3'] = {
      getStage: function () { return exportRoot.stage; },
      getLibrary: function () { return lib; },
      getSpriteSheet: function () { return ss; },
      getImages: function () { return img; }
    };

    an.compositionLoaded = function (id) {
      an.bootcompsLoaded.push(id);
      for (var j = 0; j < an.bootstrapListeners.length; j++) {
        an.bootstrapListeners[j](id);
      }
    }

    an.getComposition = function (id) {
      return an.compositions[id];
    }


    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers, stage) {
      var lastW, lastH, lastS = 1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih = window.innerHeight;
        var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
        if (isResp) {
          if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
            sRatio = lastS;
          }
          else if (!isScale) {
            if (iw < w || ih < h)
              sRatio = Math.min(xRatio, yRatio);
          }
          else if (scaleType == 1) {
            sRatio = Math.min(xRatio, yRatio);
          }
          else if (scaleType == 2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        domContainers[0].width = w * pRatio * sRatio;
        domContainers[0].height = h * pRatio * sRatio;
        domContainers.forEach(function (container) {
          container.style.width = w * sRatio + 'px';
          container.style.height = h * sRatio + 'px';
        });
        stage.scaleX = pRatio * sRatio;
        stage.scaleY = pRatio * sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
      }
    }
    an.handleSoundStreamOnTick = function (event) {
      if (!event.paused) {
        var stageChild = stage.getChildAt(0);
        if (!stageChild.paused || stageChild.ignorePause) {
          stageChild.syncStreamSounds();
        }
      }
    }
    an.handleFilterCache = function (event) {
      if (!event.paused) {
        var target = event.target;
        if (target) {
          if (target.filterCacheList) {
            for (var index = 0; index < target.filterCacheList.length; index++) {
              var cacheInst = target.filterCacheList[index];
              if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
              }
            }
          }
        }
      }
    }


  })(createjs = createjs || {}, AdobeAn = AdobeAn || {});
  var createjs, AdobeAn;
}

$(window).resize(function () {
  if (window.innerWidth <= 768) {
    (function (cjs, an) {

      var p; // shortcut to reference prototypes
      var lib = {}; var ss = {}; var img = {};
      lib.ssMetadata = [
        { name: "car_768_atlas_1", frames: [[770, 0, 224, 151], [0, 0, 768, 1910]] }
      ];


      (lib.AnMovieClip = function () {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function (positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function () {
          cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function (positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function () {
          cjs.MovieClip.prototype.stop.call(this);
        }
      }).prototype = p = new cjs.MovieClip();
      // symbols:



      (lib.CachedBmp_3 = function () {
        this.initialize(ss["car_768_atlas_1"]);
        this.gotoAndStop(0);
      }).prototype = p = new cjs.Sprite();



      (lib.w768 = function () {
        this.initialize(ss["car_768_atlas_1"]);
        this.gotoAndStop(1);
      }).prototype = p = new cjs.Sprite();
      // helper functions:

      function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
      }

      function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
      }


      (lib.元件2 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.w768();
        this.instance.setTransform(-384, -1910);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-384, -1910, 768, 1910), null);


      (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AouF5IAArxIRdAAIAALxg");
        mask.setTransform(55.925, 37.65);

        // 圖層_3
        this.instance = new lib.CachedBmp_3();
        this.instance.setTransform(0, 0, 0.5, 0.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 111.9, 75.3), null);


      (lib.元件1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup();
        this.instance.setTransform(0, -37.7, 1, 1, 0, 0, 0, 55.9, 37.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-55.9, -75.3, 112, 75.5), null);


      (lib.元件3 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_59 = function () {
          this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

        // 圖層_2
        this.instance = new lib.元件1();
        this.instance.setTransform(-361.35, -1290.65, 1, 1, -7.6868);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 0.1, regY: 0.1, rotation: -0.953, guide: { path: [-361.2, -1290.4, -310.2, -1284, -256.2, -1274] } }, 8).to({ regY: 0.2, scaleX: 0.9999, scaleY: 0.9999, rotation: 2.7395, guide: { path: [-256.2, -1274, -232.1, -1269.5, -207.5, -1264.4, -179, -1258.4, -154.5, -1252.4] } }, 8).to({ rotation: 8.0248, guide: { path: [-154.5, -1252.4, -103.1, -1239.6, -69.2, -1226.3] } }, 7).to({ regY: 0.3, rotation: 21.2786, guide: { path: [-69.1, -1226.3, -39.6, -1214.7, -23.3, -1202.7] } }, 4).to({ regX: 0.2, regY: 0.4, scaleX: 0.9998, scaleY: 0.9998, rotation: 32.6576, guide: { path: [-23.1, -1202.7, -15.3, -1197, -10.5, -1191.2, -0.7, -1179.4, 16.2, -1166.3] } }, 4).to({ regY: 0.3, rotation: 16.8296, guide: { path: [16.4, -1166.3, 31.6, -1154.6, 52.5, -1141.8, 72.6, -1129.7, 96, -1117.7] } }, 7).to({ regX: 0, regY: 0, scaleX: 1, scaleY: 1, rotation: -7.6868, guide: { path: [96, -1117.8, 120.8, -1105.1, 149.4, -1092.7, 203.7, -1069, 258.1, -1052.1, 314.4, -1034.6, 356.8, -1028.7] } }, 21).wait(1));

        // FlashAICB
        this.instance_1 = new lib.元件2();
        this.instance_1.setTransform(37.4, -955, 1, 1, 0, 0, 0, 0, -955);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

        this._renderFirstFrame();

      }).prototype = p = new cjs.MovieClip();
      p.nominalBounds = new cjs.Rectangle(-426.8, -1910, 848.2, 1910);


      // stage content:
      (lib.car768 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 元件_3
        this.instance = new lib.元件3();
        this.instance.setTransform(343.8, 955, 1, 1, 0, 0, 0, -2.8, -955);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

        this._renderFirstFrame();

      }).prototype = p = new lib.AnMovieClip();
      p.nominalBounds = new cjs.Rectangle(303.8, 995, 464.2, 915);
      // library properties:
      lib.properties = {
        id: 'AF44C0264AF7463681291D72EA880084',
        width: 768,
        height: 1990,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
          { src: "images/car_768_atlas_1.png?1663682715391", id: "car_768_atlas_1" }
        ],
        preloads: []
      };



      // bootstrap callback support:

      (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
      }).prototype = p = new createjs.Stage();

      p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
      }
      p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
      p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
      p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
      p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

      p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

      an.bootcompsLoaded = an.bootcompsLoaded || [];
      if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
      }

      an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
          for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
          }
        }
      };

      an.compositions = an.compositions || {};
      an.compositions['AF44C0264AF7463681291D72EA880084'] = {
        getStage: function () { return exportRoot.stage; },
        getLibrary: function () { return lib; },
        getSpriteSheet: function () { return ss; },
        getImages: function () { return img; }
      };

      an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
          an.bootstrapListeners[j](id);
        }
      }

      an.getComposition = function (id) {
        return an.compositions[id];
      }


      an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers, stage) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
          var w = lib.properties.width, h = lib.properties.height;
          var iw = window.innerWidth, ih = window.innerHeight;
          var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
          if (isResp) {
            if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
              sRatio = lastS;
            }
            else if (!isScale) {
              if (iw < w || ih < h)
                sRatio = Math.min(xRatio, yRatio);
            }
            else if (scaleType == 1) {
              sRatio = Math.min(xRatio, yRatio);
            }
            else if (scaleType == 2) {
              sRatio = Math.max(xRatio, yRatio);
            }
          }
          domContainers[0].width = w * pRatio * sRatio;
          domContainers[0].height = h * pRatio * sRatio;
          domContainers.forEach(function (container) {
            container.style.width = w * sRatio + 'px';
            container.style.height = h * sRatio + 'px';
          });
          stage.scaleX = pRatio * sRatio;
          stage.scaleY = pRatio * sRatio;
          lastW = iw; lastH = ih; lastS = sRatio;
          stage.tickOnUpdate = false;
          stage.update();
          stage.tickOnUpdate = true;
        }
      }
      an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
          var stageChild = stage.getChildAt(0);
          if (!stageChild.paused || stageChild.ignorePause) {
            stageChild.syncStreamSounds();
          }
        }
      }
      an.handleFilterCache = function (event) {
        if (!event.paused) {
          var target = event.target;
          if (target) {
            if (target.filterCacheList) {
              for (var index = 0; index < target.filterCacheList.length; index++) {
                var cacheInst = target.filterCacheList[index];
                if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                  cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                }
              }
            }
          }
        }
      }


    })(createjs = createjs || {}, AdobeAn = AdobeAn || {});
    var createjs, AdobeAn;
  } else {
    (function (cjs, an) {

      var p; // shortcut to reference prototypes
      var lib = {}; var ss = {}; var img = {};
      lib.ssMetadata = [
        { name: "car3_atlas_1", frames: [[0, 1174, 1347, 461], [0, 0, 2021, 627], [0, 629, 1773, 543]] },
        { name: "car3_atlas_2", frames: [[1052, 434, 229, 140], [0, 434, 1050, 160], [1283, 501, 60, 67], [1052, 576, 235, 100], [0, 0, 1394, 432], [44, 635, 37, 32], [0, 596, 42, 47], [44, 596, 37, 37], [0, 645, 42, 47], [1283, 434, 76, 65]] }
      ];


      (lib.AnMovieClip = function () {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function (positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function () {
          cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function (positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function () {
          cjs.MovieClip.prototype.stop.call(this);
        }
      }).prototype = p = new cjs.MovieClip();
      // symbols:



      (lib.CachedBmp_119 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(0);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_118 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(1);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_117 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(2);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_116 = function () {
        this.initialize(ss["car3_atlas_1"]);
        this.gotoAndStop(0);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_115 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(3);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_114 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(4);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_113 = function () {
        this.initialize(ss["car3_atlas_1"]);
        this.gotoAndStop(1);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_112 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(5);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_111 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(6);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_110 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(7);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_109 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(8);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_108 = function () {
        this.initialize(ss["car3_atlas_2"]);
        this.gotoAndStop(9);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_107 = function () {
        this.initialize(ss["car3_atlas_1"]);
        this.gotoAndStop(2);
      }).prototype = p = new cjs.Sprite();



      (lib.CachedBmp_106 = function () {
        this.initialize(img.CachedBmp_106);
      }).prototype = p = new cjs.Bitmap();
      p.nominalBounds = new cjs.Rectangle(0, 0, 2918, 922);// helper functions:

      function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
      }

      function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
      }


      (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ao7FdIAAq5IR3AAIAAK5g");
        mask.setTransform(57.175, 34.925);

        // 圖層_3
        this.instance = new lib.CachedBmp_119();
        this.instance.setTransform(-0.05, 0, 0.5, 0.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 114.4, 69.9), null);


      (lib.ClipGroup_40 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiKB/IAAj9IEVAAIAAD9g");
        mask.setTransform(13.875, 12.7);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ABpB/QgTgCgVgFQgngJgjgWQgZgRgWgVQgmglgUgpQgMgYgFgXIgFgYQgDgPADgIQABgEADgBQAHgCAFALQADAGACAKQAeBSBRA7QA+AvBDAQQAHACACACQAGAFgCAFQgCAKgXAAIgIAAg");
        this.shape.setTransform(13.8843, 12.7161);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0.1, 0, 27.7, 25.4), null);


      (lib.ClipGroup_39 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AipCqIAAlTIFTAAIAAFTg");
        mask.setTransform(17.025, 17.025);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("Ah3B5QgygyAAhHQAAhFAygyQAxgyBGAAQBGAAAyAyQAyAyAABFQAABHgyAyQgyAxhGAAQhGAAgxgxg");
        this.shape.setTransform(17.025, 17.025);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0, 0, 34.1, 34.1), null);


      (lib.ClipGroup_38 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AlCFDIAAqFIKFAAIAAKFg");
        mask.setTransform(32.325, 32.325);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AjjDkQhfheAAiGQAAiFBfhfQBeheCFAAQCGAABfBeQBeBfAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
        this.shape.setTransform(32.325, 32.325);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0, 0, 64.7, 64.7), null);


      (lib.ClipGroup_37 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AllFlIAArKILKAAIAALKg");
        mask.setTransform(35.75, 35.75);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Aj8D9QhphpAAiUQAAiTBphpQBphpCTAAQCUAABpBpQBoBpAACTQAACUhoBpQhpBoiUAAQiTAAhphog");
        this.shape.setTransform(35.75, 35.75);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0, 0, 71.5, 71.5), null);


      (lib.ClipGroup_36 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AigCiIAAlDIFBAAIAAFDg");
        mask.setTransform(16.125, 16.15);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AhxByQgvgvAAhDQAAhCAvgvQAvgwBCAAQBDAAAvAwQAvAvAABCQAABDgvAvQgvAwhDAAQhCAAgvgwg");
        this.shape.setTransform(16.125, 16.15);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0, 0, 32.3, 32.3), null);


      (lib.ClipGroup_35 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag4A5IAAhxIBxAAIAABxg");
        mask.setTransform(5.7, 5.7);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AgoAoQgQgRAAgXQAAgXAQgRQASgQAWAAQAYAAAQAQQARARAAAXQAAAXgRARQgQARgYAAQgWAAgSgRg");
        this.shape.setTransform(5.7, 5.725);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


      (lib.ClipGroup_34 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag4A5IAAhxIBxAAIAABxg");
        mask.setTransform(5.7, 5.7);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AgoAoQgQgQAAgYQAAgWAQgSQASgQAWAAQAYAAAQAQQARASAAAWQAAAYgRAQQgQARgYAAQgWAAgSgRg");
        this.shape.setTransform(5.7, 5.7);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


      (lib.ClipGroup_33 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag1A2IAAhrIBrAAIAABrg");
        mask.setTransform(5.35, 5.375);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
        this.shape.setTransform(5.35, 5.375);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0, 0, 10.7, 10.8), null);


      (lib.ClipGroup_32 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhtBuIAAjbIDbAAIAADbg");
        mask.setTransform(11, 11);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AhNBNQgggfAAguQAAgtAgggQAhggAsAAQAuAAAfAgQAhAgAAAtQAAAughAfQgfAhguAAQgsAAghghg");
        this.shape.setTransform(11, 11);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0, 0, 22, 22), null);


      (lib.ClipGroup_31 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ah3B4IAAjvIDvAAIAADvg");
        mask.setTransform(12, 12);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AhUBVQgjgjAAgyQAAgwAjgkQAkgjAwAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgwAAgkgjg");
        this.shape.setTransform(12, 12);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0, 0, 24, 24), null);


      (lib.ClipGroup_30 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag1A2IAAhrIBrAAIAABrg");
        mask.setTransform(5.35, 5.35);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
        this.shape.setTransform(5.35, 5.35);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(0, 0, 10.7, 10.7), null);


      (lib.ClipGroup_29 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhvBwIAAjfIDfAAIAADfg");
        mask.setTransform(11.175, 11.2);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AhOBQQghgiAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAiQghAgguAAQgtAAghggg");
        this.shape.setTransform(11.175, 11.2);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0, 0, 22.4, 22.4), null);


      (lib.ClipGroup_28 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag2A3IAAhtIBsAAIAABtg");
        mask.setTransform(5.45, 5.475);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AglAnQgQgQgBgXQABgWAQgQQAPgQAWAAQAWAAAQAQQARAQgBAWQABAXgRAQQgQAQgWAAQgWAAgPgQg");
        this.shape.setTransform(5.45, 5.475);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0, 0, 10.9, 11), null);


      (lib.ClipGroup_27 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag2A3IAAhtIBtAAIAABtg");
        mask.setTransform(5.475, 5.475);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
        this.shape.setTransform(5.475, 5.475);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0, 0, 11, 11), null);


      (lib.ClipGroup_26 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag6A7IAAh1IB1AAIAAB1g");
        mask.setTransform(5.9, 5.9);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AgoAqQgSgSAAgYQAAgXASgSQARgRAXAAQAZAAARARQARASAAAXQAAAYgRASQgRARgZAAQgXAAgRgRg");
        this.shape.setTransform(5.875, 5.9);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0, 0, 11.8, 11.8), null);


      (lib.ClipGroup_25 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag4A5IAAhxIBxAAIAABxg");
        mask.setTransform(5.7, 5.7);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AgoAoQgQgQAAgYQAAgWAQgSQASgQAWAAQAYAAAQAQQARASAAAWQAAAYgRAQQgQARgYAAQgWAAgSgRg");
        this.shape.setTransform(5.7, 5.7);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


      (lib.ClipGroup_24 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ag+A/IAAh9IB9AAIAAB9g");
        mask.setTransform(6.275, 6.275);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EBEDFD").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTg");
        this.shape.setTransform(6.275, 6.275);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0, 0, 12.6, 12.6), null);


      (lib.ClipGroup_23 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhZBSIAAikICzAAIAACkg");
        mask.setTransform(9, 8.25);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAqBPQgagGgWgPQgOgJgQgPQgYgYgOgbQgGgNgFgRQgGgYADgHQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAFgBADAHIAEAKQATA1A0AmQAnAeAtAMIAGACQADADAAADQgCAGgOAAQgMAAgUgDg");
        this.shape.setTransform(9.0145, 8.247);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0, 0, 18, 16.5), null);


      (lib.ClipGroup_22 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhuBvIAAjdIDdAAIAADdg");
        mask.setTransform(11.05, 11.05);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AhNBOQghggAAguQAAgtAhggQAgghAtAAQAuAAAgAhQAhAgAAAtQAAAughAgQggAhguAAQgtAAggghg");
        this.shape.setTransform(11.075, 11.075);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0, 0, 22.1, 22.1), null);


      (lib.ClipGroup_21 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
        mask.setTransform(21, 21);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");
        this.shape.setTransform(21, 21);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0, 0, 42, 42), null);


      (lib.ClipGroup_20 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjnDoIAAnPIHPAAIAAHPg");
        mask.setTransform(23.225, 23.225);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AijCkQhEhEAAhgQAAhfBEhEQBEhEBfgBQBgABBEBEQBEBEAABfQAABghEBEQhEBFhgAAQhfAAhEhFg");
        this.shape.setTransform(23.225, 23.25);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0, 0, 46.5, 46.5), null);


      (lib.ClipGroup_19 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhgBZIAAixIDBAAIAACxg");
        mask.setTransform(9.725, 8.925);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAuBUQgbgFgZgRQgRgLgQgPQgZgYgQgfQgHgQgFgRQgGgZADgIIADgDQAFgCADAIIAEALQAVA6A4ApQArAgAwAMIAHADQADADgBAEQgCAHgPAAQgNAAgVgFg");
        this.shape.setTransform(9.7387, 8.9718);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0, 0, 19.5, 17.9), null);


      (lib.ClipGroup_18 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ah3B4IAAjvIDvAAIAADvg");
        mask.setTransform(11.95, 11.95);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AhTBVQgkgkAAgxQAAgxAkgiQAigkAxAAQAxAAAkAkQAiAiABAxQgBAxgiAkQgkAigxABQgxgBgigig");
        this.shape.setTransform(11.95, 11.95);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0, 0, 23.9, 23.9), null);


      (lib.ClipGroup_17 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjiDjIAAnFIHFAAIAAHFg");
        mask.setTransform(22.725, 22.7);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AigChQhChDAAheQAAhdBChCQBDhDBdAAQBeAABDBDQBCBCAABdQAABehCBDQhDBCheAAQhdAAhDhCg");
        this.shape.setTransform(22.725, 22.7);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0, 0, 45.5, 45.4), null);


      (lib.ClipGroup_16 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aj6D7IAAn1IH1AAIAAH1g");
        mask.setTransform(25.125, 25.125);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AixCyQhJhKAAhoQAAhnBJhKQBKhJBnAAQBoAABKBJQBJBKAABnQAABohJBKQhKBJhoAAQhnAAhKhJg");
        this.shape.setTransform(25.125, 25.125);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0, 0, 50.3, 50.3), null);


      (lib.ClipGroup_15 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhoBgIAAi/IDRAAIAAC/g");
        mask.setTransform(10.5, 9.6);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ABPBgQgQgBgOgEQgegGgagSQgSgMgRgQQgdgcgPgfQgJgSgEgRIgEgSQgCgMACgGQABgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAGgBADAIIAEANQAXA9A9AsQAuAjAzAOQAGABACACQADADAAAEQgCAHgSAAIgGAAg");
        this.shape.setTransform(10.521, 9.5995);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0.1, 0, 20.9, 19.2), null);


      (lib.ClipGroup_14 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiACBIAAkBIEBAAIAAEBg");
        mask.setTransform(12.875, 12.875);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AhaBbQgmglAAg2QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA2gmAlQglAmg2AAQg0AAgmgmg");
        this.shape.setTransform(12.875, 12.875);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0, 0, 25.8, 25.8), null);


      (lib.ClipGroup_13 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aj0D0IAAnoIHoAAIAAHog");
        mask.setTransform(24.45, 24.45);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AisCtQhIhHAAhmQAAhkBIhIQBIhIBkAAQBmAABHBIQBHBIAABkQAABmhHBHQhHBHhmAAQhkAAhIhHg");
        this.shape.setTransform(24.45, 24.45);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0, 0, 48.9, 48.9), null);


      (lib.ClipGroup_12 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AkOEOIAAocIIcAAIAAIcg");
        mask.setTransform(27.05, 27.05);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ai+C/QhQhPAAhwQAAhvBQhPQBPhQBvAAQBwAABPBQQBPBPAABvQAABwhPBPQhPBQhwgBQhvABhPhQg");
        this.shape.setTransform(27.05, 27.05);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0, 0, 54.1, 54.1), null);


      (lib.ClipGroup_11 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhgBZIAAixIDBAAIAACxg");
        mask.setTransform(9.675, 8.85);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAtBUQgcgGgXgQQgTgMgOgOQgagagOgdQgJgSgDgOQgHgZADgIQABgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAFgCAEAIIADALQAVA5A4ApQArAgAvAMIAHADQAEADgCADQgBAIgQAAQgMAAgWgFg");
        this.shape.setTransform(9.6731, 8.8893);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0, 0, 19.4, 17.7), null);


      (lib.ClipGroup_10 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ah2B3IAAjtIDtAAIAADtg");
        mask.setTransform(11.875, 11.875);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AhTBUQgjgjAAgxQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjg");
        this.shape.setTransform(11.875, 11.875);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0, 0, 23.8, 23.8), null);


      (lib.ClipGroup_9 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjhDiIAAnDIHCAAIAAHDg");
        mask.setTransform(22.55, 22.575);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AifCfQhChCAAhdQAAhcBChCQBDhCBcAAQBdAABDBCQBCBCgBBcQABBdhCBCQhDBDhdAAQhcAAhDhDg");
        this.shape.setTransform(22.55, 22.6);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0, 0.1, 45.1, 45.1), null);


      (lib.ClipGroup_8 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aj5D5IAAnxIHyAAIAAHxg");
        mask.setTransform(24.95, 24.925);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBKBKgBBmQABBnhKBJQhJBKhngBQhmABhKhKg");
        this.shape.setTransform(24.95, 24.95);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0, 0, 49.9, 49.9), null);


      (lib.ClipGroup_7 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ai1CmIAAlMIFrAAIAAFMg");
        mask.setTransform(18.2, 16.65);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ABWCeQg0gLgugfQgggVgegcQgvgugdg5QgOgegJgfIgGgfQgEgUAFgLQACgFADgBQAJgDAHAOQADAIAEAOQAnBqBpBOQBPA8BbAYQAJACADADQAHAFgBAHQgEAOgdAAQgYAAgngJg");
        this.shape.setTransform(18.1998, 16.6564);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0, 0, 36.4, 33.3), null);


      (lib.ClipGroup_6 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjeDfIAAm9IG9AAIAAG9g");
        mask.setTransform(22.325, 22.325);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AidCeQhBhCAAhcQAAhcBBhBQBChBBbAAQBdAABBBBQBBBBAABcQAABchBBCQhBBBhdAAQhbAAhChBg");
        this.shape.setTransform(22.325, 22.35);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0, 0.1, 44.7, 44.6), null);


      (lib.ClipGroup_5 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AmnGoIAAtPINPAAIAANPg");
        mask.setTransform(42.4, 42.375);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0DFEA").s().p("AkrEsQh8h8AAiwQAAivB8h8QB9h8CuAAQCvAAB9B8QB8B8AACvQAACwh8B8Qh9B8ivAAQiuAAh9h8g");
        this.shape.setTransform(42.4, 42.375);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0, 0, 84.8, 84.8), null);


      (lib.ClipGroup_4 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AnUHVIAAupIOpAAIAAOpg");
        mask.setTransform(46.9, 46.875);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AlKFMQiKiKAAjCQAAjBCKiJQCJiKDBAAQDDAACICKQCKCJAADBQAADCiKCKQiICJjDAAQjBAAiJiJg");
        this.shape.setTransform(46.9, 46.875);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0, 0, 93.8, 93.8), null);


      (lib.ClipGroup_3 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ego/AGQIAAsgMBR/AAAIAAMgg");
        mask.setTransform(262.425, 40.05);

        // 圖層_3
        this.instance = new lib.CachedBmp_118();
        this.instance.setTransform(0, 0, 0.5, 0.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0, 0, 524.9, 80), null);


      (lib.ClipGroup_2 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhqtA/mMAAAh/LMDVbAAAMAAAB/Lg");
        mask.setTransform(683, 407.025);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "#C8D9D6"], [0, 1], 0, 407, 0, -407).s().p("EhqtA/mMAAAh/LMDVbAAAMAAAB/Lg");
        this.shape.setTransform(683, 407.025);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0, 0, 1366, 814.1), null);


      (lib.ClipGroup_1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhqtBKwMAAAiVcQCEABJDgCQGkgCEJAAQUnAARWAsQYdA9WhCaUA7QAGWAvcAQYMAAAB6ug");
        mask.setTransform(683, 478.425);

        // 圖層_3
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "#B9CFA1"], [0, 1], 0, 478.4, 0, -478.4).s().p("EhqtBKwMAAAiVfMDVbAAAMAAACVfg");
        this.shape.setTransform(683, 478.425);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0, 0, 1366, 956.9), null);


      (lib.元件2 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup();
        this.instance.setTransform(-0.05, -34.85, 1, 1, 0, 0, 0, 57.1, 35);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-57.2, -69.8, 114.5, 70), null);


      (lib.Group_37 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_3();
        this.instance.setTransform(262.4, 40.1, 1, 1, 0, 0, 0, 262.4, 40.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0, 0, 525, 80.1), null);


      (lib.Group_36 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_4();
        this.instance.setTransform(46.9, 46.9, 1, 1, 0, 0, 0, 46.9, 46.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0, 0, 93.8, 93.8), null);


      (lib.Group_35 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_5();
        this.instance.setTransform(42.4, 42.4, 1, 1, 0, 0, 0, 42.4, 42.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0, 0, 84.8, 84.8), null);


      (lib.Group_34 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_6();
        this.instance.setTransform(22.3, 22.3, 1, 1, 0, 0, 0, 22.3, 22.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0, 0, 44.7, 44.7), null);


      (lib.Group_33 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_7();
        this.instance.setTransform(18.2, 16.6, 1, 1, 0, 0, 0, 18.2, 16.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0, 0, 36.4, 33.3), null);


      (lib.Group_32 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_8();
        this.instance.setTransform(24.9, 24.9, 1, 1, 0, 0, 0, 24.9, 24.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0, 0, 49.9, 49.9), null);


      (lib.Group_31 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_9();
        this.instance.setTransform(22.6, 22.6, 1, 1, 0, 0, 0, 22.6, 22.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0, 0, 45.1, 45.2), null);


      (lib.Group_30 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_10();
        this.instance.setTransform(11.8, 11.8, 1, 1, 0, 0, 0, 11.8, 11.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0, 0, 23.8, 23.8), null);


      (lib.Group_29 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_11();
        this.instance.setTransform(9.7, 8.8, 1, 1, 0, 0, 0, 9.7, 8.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0, 0, 19.4, 17.8), null);


      (lib.Group_28 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_12();
        this.instance.setTransform(27.1, 27.1, 1, 1, 0, 0, 0, 27.1, 27.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0, 0, 54.1, 54.1), null);


      (lib.Group_27 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_13();
        this.instance.setTransform(24.4, 24.4, 1, 1, 0, 0, 0, 24.4, 24.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0, 0, 48.9, 48.9), null);


      (lib.Group_26 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_14();
        this.instance.setTransform(12.8, 12.8, 1, 1, 0, 0, 0, 12.8, 12.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0, 0, 25.8, 25.8), null);


      (lib.Group_25 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_15();
        this.instance.setTransform(10.5, 9.6, 1, 1, 0, 0, 0, 10.5, 9.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0, 0, 21, 19.2), null);


      (lib.Group_24 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_16();
        this.instance.setTransform(25.1, 25.1, 1, 1, 0, 0, 0, 25.1, 25.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0, 0, 50.3, 50.3), null);


      (lib.Group_23 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_17();
        this.instance.setTransform(22.7, 22.7, 1, 1, 0, 0, 0, 22.7, 22.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0, 0, 45.5, 45.4), null);


      (lib.Group_22 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_18();
        this.instance.setTransform(12, 12, 1, 1, 0, 0, 0, 12, 12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0, 0, 23.9, 23.9), null);


      (lib.Group_21 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_19();
        this.instance.setTransform(9.7, 9, 1, 1, 0, 0, 0, 9.7, 9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0, 0, 19.5, 17.9), null);


      (lib.Group_20 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_20();
        this.instance.setTransform(23.2, 23.2, 1, 1, 0, 0, 0, 23.2, 23.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0, 0, 46.5, 46.5), null);


      (lib.Group_19 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_21();
        this.instance.setTransform(21, 21, 1, 1, 0, 0, 0, 21, 21);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0, 0, 42, 42), null);


      (lib.Group_18 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_22();
        this.instance.setTransform(11.1, 11.1, 1, 1, 0, 0, 0, 11.1, 11.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0, 0, 22.2, 22.2), null);


      (lib.Group_17 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_23();
        this.instance.setTransform(9, 8.2, 1, 1, 0, 0, 0, 9, 8.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0, 0, 18, 16.5), null);


      (lib.Group_16 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_24();
        this.instance.setTransform(6.2, 6.2, 1, 1, 0, 0, 0, 6.2, 6.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0, 0, 12.6, 12.6), null);


      (lib.Group_15 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_25();
        this.instance.setTransform(5.7, 5.7, 1, 1, 0, 0, 0, 5.7, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


      (lib.Group_14 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_26();
        this.instance.setTransform(5.9, 5.9, 1, 1, 0, 0, 0, 5.9, 5.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0, 0, 11.8, 11.8), null);


      (lib.Group_13 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_27();
        this.instance.setTransform(5.5, 5.5, 1, 1, 0, 0, 0, 5.5, 5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0, 0, 11, 11), null);


      (lib.Group_12 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_28();
        this.instance.setTransform(5.5, 5.5, 1, 1, 0, 0, 0, 5.5, 5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0, 0, 10.9, 11), null);


      (lib.Group_11 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_29();
        this.instance.setTransform(11.2, 11.2, 1, 1, 0, 0, 0, 11.2, 11.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0, 0, 22.4, 22.4), null);


      (lib.Group_10 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_30();
        this.instance.setTransform(5.4, 5.4, 1, 1, 0, 0, 0, 5.4, 5.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0, 0, 10.7, 10.7), null);


      (lib.Group_9 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_31();
        this.instance.setTransform(12, 12, 1, 1, 0, 0, 0, 12, 12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0, 0, 24, 24), null);


      (lib.Group_8 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_32();
        this.instance.setTransform(11, 11, 1, 1, 0, 0, 0, 11, 11);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0, 0, 22, 22), null);


      (lib.Group_7 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_33();
        this.instance.setTransform(5.4, 5.4, 1, 1, 0, 0, 0, 5.4, 5.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0, 0, 10.7, 10.8), null);


      (lib.Group_6 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_34();
        this.instance.setTransform(5.7, 5.7, 1, 1, 0, 0, 0, 5.7, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0, 0, 11.4, 11.4), null);


      (lib.Group_5 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_35();
        this.instance.setTransform(5.7, 5.7, 1, 1, 0, 0, 0, 5.7, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0, 0, 11.4, 11.5), null);


      (lib.Group_4 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_36();
        this.instance.setTransform(16.1, 16.1, 1, 1, 0, 0, 0, 16.1, 16.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0, 0, 32.3, 32.3), null);


      (lib.Group_3 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_37();
        this.instance.setTransform(35.8, 35.8, 1, 1, 0, 0, 0, 35.8, 35.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0, 0, 71.5, 71.5), null);


      (lib.Group_2 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_38();
        this.instance.setTransform(32.3, 32.3, 1, 1, 0, 0, 0, 32.3, 32.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0, 0, 64.7, 64.7), null);


      (lib.Group_1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_39();
        this.instance.setTransform(17, 17, 1, 1, 0, 0, 0, 17, 17);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 34.1, 34.1), null);


      (lib.Group = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_40();
        this.instance.setTransform(13.8, 12.7, 1, 1, 0, 0, 0, 13.8, 12.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 27.8, 25.5), null);


      (lib.ClipGroup_0 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhqtB7cMAAAj23MDVbAAAMAAAD23g");
        mask.setTransform(728, 790);

        // 圖層_3
        this.instance = new lib.Group();
        this.instance.setTransform(37.55, 175.5, 1, 1, 0, 0, 0, 13.8, 12.7);
        this.instance.alpha = 0.8008;

        this.instance_1 = new lib.CachedBmp_117();
        this.instance_1.setTransform(51.2, 132.1, 0.5, 0.5);

        this.instance_2 = new lib.Group_1();
        this.instance_2.setTransform(42.4, 165.8, 1, 1, 0, 0, 0, 17, 17);
        this.instance_2.alpha = 0.6016;

        this.instance_3 = new lib.Group_2();
        this.instance_3.setTransform(52.1, 159.55, 1, 1, 0, 0, 0, 32.3, 32.3);
        this.instance_3.alpha = 0.3984;

        this.instance_4 = new lib.Group_3();
        this.instance_4.setTransform(52.2, 159.6, 1, 1, 0, 0, 0, 35.8, 35.8);
        this.instance_4.alpha = 0.8984;

        this.instance_5 = new lib.CachedBmp_116();
        this.instance_5.setTransform(398.1, 177.9, 0.5, 0.5);

        this.instance_6 = new lib.Group_4();
        this.instance_6.setTransform(415.15, 362.85, 1, 1, 0, 0, 0, 16.1, 16.1);
        this.instance_6.alpha = 0.6016;

        this.instance_7 = new lib.Group_5();
        this.instance_7.setTransform(928.75, 317.15, 1, 1, 0, 0, 0, 5.7, 5.7);
        this.instance_7.alpha = 0.6016;

        this.instance_8 = new lib.Group_6();
        this.instance_8.setTransform(913.5, 301.25, 1, 1, 0, 0, 0, 5.7, 5.7);
        this.instance_8.alpha = 0.6016;

        this.instance_9 = new lib.CachedBmp_115();
        this.instance_9.setTransform(955.8, 214.7, 0.5, 0.5);

        this.instance_10 = new lib.Group_7();
        this.instance_10.setTransform(1052.15, 209.85, 1, 1, 0, 0, 0, 5.4, 5.4);
        this.instance_10.alpha = 0.6016;

        this.instance_11 = new lib.Group_8();
        this.instance_11.setTransform(454.65, 325, 1, 1, 0, 0, 0, 11, 11);
        this.instance_11.alpha = 0.6016;

        this.instance_12 = new lib.Group_9();
        this.instance_12.setTransform(998.75, 392.3, 1, 1, 0, 0, 0, 12, 12);
        this.instance_12.alpha = 0.6016;

        this.instance_13 = new lib.Group_10();
        this.instance_13.setTransform(705.95, 402.15, 1, 1, 0, 0, 0, 5.4, 5.4);
        this.instance_13.alpha = 0.6016;

        this.instance_14 = new lib.Group_11();
        this.instance_14.setTransform(566.7, 190.15, 1, 1, 0, 0, 0, 11.2, 11.2);
        this.instance_14.alpha = 0.6016;

        this.instance_15 = new lib.Group_12();
        this.instance_15.setTransform(663.95, 287.6, 1, 1, 0, 0, 0, 5.5, 5.5);
        this.instance_15.alpha = 0.6016;

        this.instance_16 = new lib.Group_13();
        this.instance_16.setTransform(545.85, 379.05, 1, 1, 0, 0, 0, 5.5, 5.5);
        this.instance_16.alpha = 0.6016;

        this.instance_17 = new lib.Group_14();
        this.instance_17.setTransform(1064.35, 367.3, 1, 1, 0, 0, 0, 5.9, 5.9);
        this.instance_17.alpha = 0.6016;

        this.instance_18 = new lib.Group_15();
        this.instance_18.setTransform(744.75, 201.45, 1, 1, 0, 0, 0, 5.7, 5.7);
        this.instance_18.alpha = 0.6016;

        this.instance_19 = new lib.CachedBmp_114();
        this.instance_19.setTransform(381.6, 186.6, 0.5, 0.5);

        this.instance_20 = new lib.Group_16();
        this.instance_20.setTransform(878.05, 206.4, 1, 1, 0, 0, 0, 6.2, 6.2);
        this.instance_20.alpha = 0.6016;

        this.instance_21 = new lib.CachedBmp_113();
        this.instance_21.setTransform(191.25, 59.85, 0.5, 0.5);

        this.instance_22 = new lib.Group_17();
        this.instance_22.setTransform(1244.9, 131.7, 1, 1, 0, 0, 0, 9, 8.2);
        this.instance_22.alpha = 0.8008;

        this.instance_23 = new lib.CachedBmp_112();
        this.instance_23.setTransform(1253.7, 103.55, 0.5, 0.5);

        this.instance_24 = new lib.Group_18();
        this.instance_24.setTransform(1248.05, 125.5, 1, 1, 0, 0, 0, 11.1, 11.1);
        this.instance_24.alpha = 0.6016;

        this.instance_25 = new lib.Group_19();
        this.instance_25.setTransform(1254.35, 121.4, 1, 1, 0, 0, 0, 21, 21);
        this.instance_25.alpha = 0.3984;

        this.instance_26 = new lib.Group_20();
        this.instance_26.setTransform(1254.3, 121.35, 1, 1, 0, 0, 0, 23.2, 23.2);
        this.instance_26.alpha = 0.8984;

        this.instance_27 = new lib.Group_21();
        this.instance_27.setTransform(852.15, 122.9, 1, 1, 0, 0, 0, 9.7, 9);
        this.instance_27.alpha = 0.8008;

        this.instance_28 = new lib.CachedBmp_111();
        this.instance_28.setTransform(861.7, 92.3, 0.5, 0.5);

        this.instance_29 = new lib.Group_22();
        this.instance_29.setTransform(855.6, 116.1, 1, 1, 0, 0, 0, 12, 12);
        this.instance_29.alpha = 0.6016;

        this.instance_30 = new lib.Group_23();
        this.instance_30.setTransform(862.35, 111.65, 1, 1, 0, 0, 0, 22.7, 22.7);
        this.instance_30.alpha = 0.3984;

        this.instance_31 = new lib.Group_24();
        this.instance_31.setTransform(862.35, 111.6, 1, 1, 0, 0, 0, 25.1, 25.1);
        this.instance_31.alpha = 0.8984;

        this.instance_32 = new lib.Group_25();
        this.instance_32.setTransform(412.1, 76.2, 1, 1, 0, 0, 0, 10.5, 9.6);
        this.instance_32.alpha = 0.8008;

        this.instance_33 = new lib.CachedBmp_110();
        this.instance_33.setTransform(425.75, 43.7, 0.5, 0.5);

        this.instance_34 = new lib.Group_26();
        this.instance_34.setTransform(420.35, 70.2, 1, 1, 0, 0, 0, 12.8, 12.8);
        this.instance_34.alpha = 0.6016;

        this.instance_35 = new lib.Group_27();
        this.instance_35.setTransform(423.05, 64.1, 1, 1, 0, 0, 0, 24.4, 24.4);
        this.instance_35.alpha = 0.3984;

        this.instance_36 = new lib.Group_28();
        this.instance_36.setTransform(423.15, 64.2, 1, 1, 0, 0, 0, 27.1, 27.1);
        this.instance_36.alpha = 0.8984;

        this.instance_37 = new lib.Group_29();
        this.instance_37.setTransform(219.2, 318.75, 1, 1, 0, 0, 0, 9.7, 8.8);
        this.instance_37.alpha = 0.8008;

        this.instance_38 = new lib.CachedBmp_109();
        this.instance_38.setTransform(228.65, 288.5, 0.5, 0.5);

        this.instance_39 = new lib.Group_30();
        this.instance_39.setTransform(222.45, 312, 1, 1, 0, 0, 0, 11.8, 11.8);
        this.instance_39.alpha = 0.6016;

        this.instance_40 = new lib.Group_31();
        this.instance_40.setTransform(229.35, 307.7, 1, 1, 0, 0, 0, 22.6, 22.6);
        this.instance_40.alpha = 0.3984;

        this.instance_41 = new lib.Group_32();
        this.instance_41.setTransform(229.25, 307.65, 1, 1, 0, 0, 0, 24.9, 24.9);
        this.instance_41.alpha = 0.8984;

        this.instance_42 = new lib.Group_33();
        this.instance_42.setTransform(1381.3, 359.95, 1, 1, 0, 0, 0, 18.2, 16.6);
        this.instance_42.alpha = 0.8008;

        this.instance_43 = new lib.CachedBmp_108();
        this.instance_43.setTransform(1399.1, 303.05, 0.5, 0.5);

        this.instance_44 = new lib.Group_34();
        this.instance_44.setTransform(1387.55, 347.25, 1, 1, 0, 0, 0, 22.3, 22.3);
        this.instance_44.alpha = 0.6016;

        this.instance_45 = new lib.Group_35();
        this.instance_45.setTransform(1400.35, 339.1, 1, 1, 0, 0, 0, 42.4, 42.4);
        this.instance_45.alpha = 0.3984;

        this.instance_46 = new lib.Group_36();
        this.instance_46.setTransform(1400.35, 339.1, 1, 1, 0, 0, 0, 46.9, 46.9);
        this.instance_46.alpha = 0.8984;

        this.instance_47 = new lib.CachedBmp_107();
        this.instance_47.setTransform(451.95, 425.6, 0.5, 0.5);

        this.instance_48 = new lib.Group_37();
        this.instance_48.setTransform(1161.65, 574.1, 1, 1, 0, 0, 0, 262.4, 40.1);
        this.instance_48.alpha = 0.1992;

        this.instance_49 = new lib.CachedBmp_106();
        this.instance_49.setTransform(0, 476.85, 0.5, 0.5);

        var maskedShapeInstanceList = [this.instance, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16, this.instance_17, this.instance_18, this.instance_19, this.instance_20, this.instance_21, this.instance_22, this.instance_23, this.instance_24, this.instance_25, this.instance_26, this.instance_27, this.instance_28, this.instance_29, this.instance_30, this.instance_31, this.instance_32, this.instance_33, this.instance_34, this.instance_35, this.instance_36, this.instance_37, this.instance_38, this.instance_39, this.instance_40, this.instance_41, this.instance_42, this.instance_43, this.instance_44, this.instance_45, this.instance_46, this.instance_47, this.instance_48, this.instance_49];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_49 }, { t: this.instance_48 }, { t: this.instance_47 }, { t: this.instance_46 }, { t: this.instance_45 }, { t: this.instance_44 }, { t: this.instance_43 }, { t: this.instance_42 }, { t: this.instance_41 }, { t: this.instance_40 }, { t: this.instance_39 }, { t: this.instance_38 }, { t: this.instance_37 }, { t: this.instance_36 }, { t: this.instance_35 }, { t: this.instance_34 }, { t: this.instance_33 }, { t: this.instance_32 }, { t: this.instance_31 }, { t: this.instance_30 }, { t: this.instance_29 }, { t: this.instance_28 }, { t: this.instance_27 }, { t: this.instance_26 }, { t: this.instance_25 }, { t: this.instance_24 }, { t: this.instance_23 }, { t: this.instance_22 }, { t: this.instance_21 }, { t: this.instance_20 }, { t: this.instance_19 }, { t: this.instance_18 }, { t: this.instance_17 }, { t: this.instance_16 }, { t: this.instance_15 }, { t: this.instance_14 }, { t: this.instance_13 }, { t: this.instance_12 }, { t: this.instance_11 }, { t: this.instance_10 }, { t: this.instance_9 }, { t: this.instance_8 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(45, 37.1, 1366, 900.8), null);


      (lib.ClipGroup_41 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_2 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("Ehx/B7cMAAAj23MDj+AAAMAAAD23g");
        mask_1.setTransform(729.55, 790);

        // 圖層_3
        this.instance_1 = new lib.ClipGroup_0();
        this.instance_1.setTransform(729.6, 790, 1, 1, 0, 0, 0, 729.6, 790);

        this.instance_2 = new lib.ClipGroup_1();
        this.instance_2.setTransform(728, 940.1, 1, 1, 0, 0, 0, 683, 478.4);

        this.instance_3 = new lib.ClipGroup_2();
        this.instance_3.setTransform(728, 407, 1, 1, 0, 0, 0, 683, 407);

        var maskedShapeInstanceList = [this.instance_1, this.instance_2, this.instance_3];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0, 0, 1459, 1580), null);


      (lib.元件1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 圖層_1
        this.instance = new lib.ClipGroup_41();
        this.instance.setTransform(1.6, -628.55, 1, 1, 0, 0, 0, 729.6, 790);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

      }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-728, -1418.5, 1459.1, 1580), null);


      (lib.元件3 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_89 = function () {
          this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

        // FlashAICB
        this.instance = new lib.元件2();
        this.instance.setTransform(-672.8, -937.65);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 0.1, regY: 0.1, rotation: 14.9992, guide: { path: [-672.7, -937.6, -668.1, -937.4, -663.2, -937.2, -628, -935.8, -577.6, -932.4, -462.8, -924.8, -364.2, -912.4, -274.2, -901.1, -206.2, -886.8] } }, 29).to({ regX: 0.2, rotation: 44.9994, guide: { path: [-206, -886.8, -169.8, -879.2, -139.9, -870.8, -39.1, -842.3, -15.4, -805.7] } }, 13).to({ regX: 0, regY: 0, rotation: 0, guide: { path: [-15.3, -805.6, -13.7, -803.2, -12.5, -800.7, 7.8, -760.1, 93.1, -716, 167.4, -677.6, 280.8, -641.4, 381.6, -609.2, 486.3, -587.1, 556, -572.3, 606, -566.4] } }, 47).wait(1));

        // FlashAICB
        this.instance_1 = new lib.元件1();
        this.instance_1.setTransform(48.6, -628.6, 1, 1, 0, 0, 0, 1.6, -628.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

        this._renderFirstFrame();

      }).prototype = p = new cjs.MovieClip();
      p.nominalBounds = new cjs.Rectangle(-730, -1418.5, 1508.1, 1580);


      // stage content:
      (lib.car3 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = false; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        this.actionFrames = [89];
        // timeline functions:
        this.frame_89 = function () {
          this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

        // 圖層_1
        this.instance = new lib.元件3();
        this.instance.setTransform(660.1, 789.95, 1, 1, 0, 0, 0, 24.1, -628.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({ y: 582.2 }, 23).wait(22));

        this._renderFirstFrame();

      }).prototype = p = new lib.AnMovieClip();
      p.nominalBounds = new cjs.Rectangle(589, 582.3, 825.0999999999999, 997.7);
      // library properties:
      lib.properties = {
        id: '702BBA55E5D144039384E6E63386C6F3',
        width: 1366,
        height: 1580,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
          { src: "images/CachedBmp_106.png?1663744344339", id: "CachedBmp_106" },
          { src: "images/car3_atlas_1.png?1663744344265", id: "car3_atlas_1" },
          { src: "images/car3_atlas_2.png?1663744344265", id: "car3_atlas_2" }
        ],
        preloads: []
      };



      // bootstrap callback support:

      (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
      }).prototype = p = new createjs.Stage();

      p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
      }
      p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
      p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
      p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
      p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

      p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

      an.bootcompsLoaded = an.bootcompsLoaded || [];
      if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
      }

      an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
          for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
          }
        }
      };

      an.compositions = an.compositions || {};
      an.compositions['702BBA55E5D144039384E6E63386C6F3'] = {
        getStage: function () { return exportRoot.stage; },
        getLibrary: function () { return lib; },
        getSpriteSheet: function () { return ss; },
        getImages: function () { return img; }
      };

      an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
          an.bootstrapListeners[j](id);
        }
      }

      an.getComposition = function (id) {
        return an.compositions[id];
      }


      an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers, stage) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
          var w = lib.properties.width, h = lib.properties.height;
          var iw = window.innerWidth, ih = window.innerHeight;
          var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
          if (isResp) {
            if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
              sRatio = lastS;
            }
            else if (!isScale) {
              if (iw < w || ih < h)
                sRatio = Math.min(xRatio, yRatio);
            }
            else if (scaleType == 1) {
              sRatio = Math.min(xRatio, yRatio);
            }
            else if (scaleType == 2) {
              sRatio = Math.max(xRatio, yRatio);
            }
          }
          domContainers[0].width = w * pRatio * sRatio;
          domContainers[0].height = h * pRatio * sRatio;
          domContainers.forEach(function (container) {
            container.style.width = w * sRatio + 'px';
            container.style.height = h * sRatio + 'px';
          });
          stage.scaleX = pRatio * sRatio;
          stage.scaleY = pRatio * sRatio;
          lastW = iw; lastH = ih; lastS = sRatio;
          stage.tickOnUpdate = false;
          stage.update();
          stage.tickOnUpdate = true;
        }
      }
      an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
          var stageChild = stage.getChildAt(0);
          if (!stageChild.paused || stageChild.ignorePause) {
            stageChild.syncStreamSounds();
          }
        }
      }
      an.handleFilterCache = function (event) {
        if (!event.paused) {
          var target = event.target;
          if (target) {
            if (target.filterCacheList) {
              for (var index = 0; index < target.filterCacheList.length; index++) {
                var cacheInst = target.filterCacheList[index];
                if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                  cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                }
              }
            }
          }
        }
      }


    })(createjs = createjs || {}, AdobeAn = AdobeAn || {});
    var createjs, AdobeAn;
  }
})
