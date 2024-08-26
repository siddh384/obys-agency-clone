function loadingAnimation(){
    let tl = gsap.timeline();
    tl.from('.line h1', {
        y:170,
        stagger:0.2,
        duration:0.6,
        delay:0.5,
    })

    tl.from('#line1-part1', {
        opacity:0,
        onstart:function(){
            let count = document.querySelector('#line1-part1 h5');
            let grow = 0;
            setInterval(function(){
            if(grow<100){
            count.innerHTML = grow++;
            }else{
            count.innerHTML = grow;
            }
            }, 35)
        }
    })

    tl.to('.line h2',{
        animationName: 'anime',
        opacity:1,
    })

    tl.to('#loader', {
        opacity:0,
        duration:0.2,
        delay:4,
    })

    tl.from('#page1', {
        delay:0.2,
        y:1600,
        opacity:0,
        duration:0.6,
        ease:'power4.out',
    })
    tl.to('#loader', {
        display:'none',
    })
    tl.from('#nav', {
        opacity:0,
    })
    tl.from('.liti h1', {
        y:120,
        stagger:0.1,
    })
}

// function crsrAnimation(){
//     document.addEventListener("mousemove", function(dets){
//         gsap.to('#crsr', {
//             left:dets.x,
//             top:dets.y,
//         })
//     })
//     Shery.makeMagnet("#nav-part2 h4",);
// }

loadingAnimation();
crsrAnimation();