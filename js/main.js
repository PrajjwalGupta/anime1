document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {  // 4 = seconds of duratin after image load ,, -as all animation do not starts at once so we have introduced -4 seconds offset to sync.
        y: -100,
        x: -150,
        ease: Power3.easeInOut // x, y are starting coordinates
    })
    .from('.section_1_02', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -80,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0, //means first section  hits , start animation
        offset: '300' //animation starts when 300 px has been covered in screen
    })
    .setTween(timeline)
    .setPin('.first-section') //do not pass first section without animation complete.
    .addTo(controller);


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let timeline2 = new TimelineMax();
    timeline2
    .to('.top .image-container', 4, {
        height: 0  //in css its height is 100, here changed to 0
    });

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'  //from 100 px from top animation will start
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 4, {
        y: -250,                /////////-250 moves images to top , positive values will move downward , 0 is stable
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'  //starts when 200 px from top
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let timeline4 = new TimelineMax();
    timeline4
    .to('.section_4_01', 4, {
        autoAlpha: 0  //used to change image opacity to 0
    })
    .from('.section_4_02', 4, {
        autoAlpha: 0         //it will change to 1 after scroll, as defined in css file
    }, '-=4')
    .from('.section_4_03', 4, {
        autoAlpha: 0
    })
    .from('.section_4_04', 4, {
        autoAlpha: 0
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);
})