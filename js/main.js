// NAV
$('.burgerIcon').hover(() => {
    TweenMax.to('.burgerLine:first-child',0.2,{x:-10})
    TweenMax.to('.burgerLine:last-child',0.2,{x:10})
}, () => {
    TweenMax.to('.burgerLine:first-child',0.2,{x:0})
    TweenMax.to('.burgerLine:last-child',0.2,{x:0})
})

var tlmenu = new TimelineMax({paused:true})

tlmenu
.to('nav',0.3,{autoAlpha:1,})
.staggerFromTo('nav li',0.5,{y:100,opacity:0},{y:0,opacity:1},0.15)

$('.burgerIcon').click(() => {
    tlmenu.play(0)
})
$('.closeButton').click(() => {
    tlmenu.reverse(0)
})

// HERO
TweenMax
.fromTo('#hero h1', 0.6, {y:80,opacity:0}, {y:0,opacity:1,delay:1})
TweenMax
.fromTo('#hero .learnMoreButton', 0.6, {y:80,opacity:0}, {y:0,opacity:1,delay:1.6,ease:Back.easeOut})

// Four Column
$('.fourColItem').hover(function() {
    TweenMax.to($(this),0.5,{y:-10,scale:1.1})
    TweenMax.to($(this),0.5,{boxShadow: "0 0 20px rgba(0,0,0,0.36)"})
}, function() {
    TweenMax.to($(this),0.5,{y:0,scale:1})
    TweenMax.to($(this),0.5,{boxShadow: "0 0 20px rgba(0,0,0,0.06)"})
})

// Services
TweenMax.set('.serviceBoxInner', {
    y:200,opacity:0
})

$('.serviceBox').hover(function() {
    TweenMax.to($(this).find('.serviceBoxInner'),0.5,{
        y:0,opacity:1,ease:Power2.easeOut
    })
}, function() {
    TweenMax.to($(this).find('.serviceBoxInner'),0.5,{
        y:200,opacity:0
    })
})

// Cog
TweenMax.to('.cogLeft',5,{rotation:360,repeat:-1,ease:Linear.easeNone})
TweenMax.to('.cogRight',5,{rotation:-360,repeat:-1,ease:Linear.easeNone})