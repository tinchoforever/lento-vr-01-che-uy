var u_time = 0;
var plano01_ent;
var plano02_ent;
var plano03_ent;

var fotos;
var fotos_ent = [];

document.addEventListener("DOMContentLoaded", function() {
    var fotos = document.getElementsByClassName("foto");
    console.log(fotos);
    console.log(fotos.length);

    for (var i = 0; i < fotos.length; i++) {
        fotos_ent.push(fotos[i]);
    }
    render();
});

var radio = 2;
var scene_opacity = 0;

function render(){
    requestAnimationFrame(render);
    u_time++;
    //----------------------------------------------------------//

    if(u_time>4300 && u_time<5700){

        for (var i = 0; i < fotos_ent.length; i++) {
            fotos_ent[i].setAttribute('visible', true);



            if(u_time>4300 && u_time<4500){
                scene_opacity = scene_opacity + 0.005;
                fotos_ent[i].setAttribute('opacity', scene_opacity);
            }

            if(u_time>5500 && u_time<5700){
                scene_opacity = scene_opacity - 0.005;
                fotos_ent[i].setAttribute('opacity', scene_opacity);
            }

        }



    }else{
        for (var i = 0; i < fotos_ent.length; i++) {
            fotos_ent[i].setAttribute('visible', false);
        }
    }





    for (var i = 0; i < fotos_ent.length; i++) {
        fotos_ent[i].setAttribute('position', {
            x: Math.sin(u_time*0.001+i*10)*radio,
            // y: 1.60,
            y: 1.60+Math.sin(u_time*0.01+i+10)*0.4,
            z: Math.cos(u_time*0.001+i*10)*radio + Math.sin(u_time*0.01+i*10)*0.4
        });
        fotos_ent[i].setAttribute('look-at', {x:0,y:1.6,z:0});
    }
}

var createPlayerFor = function(selector){
    var playSelector = selector + 'Play';
    var audioToPlay = document.querySelector('#' + selector);
    var playerAnimationTrigger = document.querySelector('#' + playSelector);
    var mainEventPlay = function(){
        audioToPlay.emit('play' + selector);

    };
    playerAnimationTrigger.addEventListener('animationend',mainEventPlay);
}



var players = ['first'];
for (var i = 0; i < players.length; i++) {
    createPlayerFor(players[i]);
};

