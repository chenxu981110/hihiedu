(function (doc) {

    var $ = function (el) {
        try {
            var item = doc.querySelectorAll(el);
            return item.length == 1 ? item[0] : item;
        } catch (err) {
            console.log(err)
        }
    }







    var demo1Container = $('.demo1 >.container'),
        demo1FirstSlideW = demo1Container.children[0].offsetWidth;
    var empile1 = new Empile(demo1Container, {
        waitForTransition: true,
        navigation: {
            nextEl: $('.demo1 .btn-right'),
            prevEl: $('.demo1 .btn-left'),
        },
        css: function (coord, absCoord) {
            var zIndex = 100 - absCoord,
                translateX = 'translateX(' + (demo1FirstSlideW + 20) * coord + 'px)';
            var transform = translateX;
            return {
                'z-index': zIndex,
                transform: transform,
            }
        },
    });



    var demo2Container = $('.demo2 >.container'),
        demo2FirstSlideW = demo2Container.children[0].offsetWidth;
    var empile2 = new Empile(demo2Container, {
        waitForTransition: true,
        navigation: {
            nextEl: $('.demo2 .btn-right'),
            prevEl: $('.demo2 .btn-left'),
        },
        css: function (coord, absCoord) {
            var zIndex = 100 - absCoord,
                translateX = 'translateX(' + (demo2FirstSlideW + 20) * coord + 'px)';
            var transform = translateX;
            return {
                'z-index': zIndex,
                transform: transform,
            }
        },
    });





    var demo3Container = $('.demo3 >.container'),
        demo3FirstSlideW = demo3Container.children[0].offsetWidth;
    var empile3 = new Empile(demo3Container, {
        waitForTransition: true,
        navigation: {
            nextEl: $('.demo3 .btn-right'),
            prevEl: $('.demo3 .btn-left'),
        },
        css: function (coord, absCoord) {
            var zIndex = 100 - absCoord,
                translateX = 'translateX(' + (demo2FirstSlideW + 20) * coord + 'px)';
            var transform = translateX;
            return {
                'z-index': zIndex,
                transform: transform,
            }
        },
    });


    var demo4Container = $('.demo4 >.container'),
        demo4FirstSlideW = demo4Container.children[0].offsetWidth;
    var empile4 = new Empile(demo4Container, {
        waitForTransition: true,
        navigation: {
            nextEl: $('.demo4 .btn-right'),
            prevEl: $('.demo4 .btn-left'),
        },
        css: function (coord, absCoord) {
            var zIndex = 100 - absCoord,
                translateX = 'translateX(' + (demo4FirstSlideW + 20) * coord + 'px)';
            var transform = translateX;
            return {
                'z-index': zIndex,
                transform: transform,
            }
        },
    });





    var demo5Container = $('.demo5 >.container'),
        demo5FirstSlideW = demo5Container.children[0].offsetWidth;
    var empile5 = new Empile(demo5Container, {
        waitForTransition: true,
        navigation: {
            nextEl: $('.demo5 .btn-right'),
            prevEl: $('.demo5 .btn-left'),
        },
        css: function (coord, absCoord) {
            var zIndex = 100 - absCoord,
                translateX = 'translateX(' + (demo5FirstSlideW + 20) * coord + 'px)';
            var transform = translateX;
            return {
                'z-index': zIndex,
                transform: transform,
            }
        },
    });

})(document);