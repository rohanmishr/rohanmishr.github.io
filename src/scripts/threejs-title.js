import * as THREE from 'https://unpkg.com/three@0.150.0/build/three.module.js';
//import { FontLoader } from 'https://unpkg.com/three@0.150.0/examples/jsm/loaders/FontLoader.js';
import { FontLoader } from '../altered-threejs/FontLoader.js';
//import { TextGeometry } from 'https://unpkg.com/three@0.150.0/examples/jsm/geometries/TextGeometry.js';
import { TextGeometry } from '../altered-threejs/TextGeometry.js';
//import { OrbitControls } from 'https://unpkg.com/three@0.150.0/examples/jsm/controls/OrbitControls.js';
import { OrbitControls } from '../altered-threejs/OrbitControls.js';
import Color3 from '../classes/Color3.js';

console.log("script loaded");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.x = 0;
camera.position.y = 10;
camera.position.z = 200;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style = "";
document.getElementById("threejs-target").appendChild( renderer.domElement );

const loader = new FontLoader();

var mesh;
var controls;
loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
    const g = new TextGeometry( 'rohanmishra', {
        font: font,
        size: 40,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 1,
        bevelSegments: 5
    } );
    const material = new THREE.MeshBasicMaterial( { 
        color: 0x7aceff,
    } );
    mesh = new THREE.Mesh( g, material );
    mesh.position.x -= 140;
    mesh.castShadow = true;
    scene.add( mesh );
    console.log('added text');
    console.log(scene);
} );

controls = new OrbitControls( camera, renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

//COLORS --------------------------------------------------------------------------------------------------------------

function* rainbowColGen() {
    let hue = 20; 
    const hueIncrement = 0.5; 

    while (true) {
        yield hslToRgb(hue, 100, 50);
        hue = (hue + hueIncrement) % 360; 
    }
}

function* purplePulseColGen() {
    const baseHue = 270; // purple
    const saturationMin = 0; // gray
    const saturationMax = 110; // purple
    const saturationIncrement = 0.5;

    let saturation = saturationMin;
    let increasing = true;

    while (true) {
        const color = hslToRgb(baseHue, saturation, 50);
        yield color;

        if (increasing) {
            saturation += saturationIncrement;
            if (saturation >= saturationMax) {
                increasing = false;
            }
        } else {
            saturation -= saturationIncrement;
            if (saturation <= saturationMin) {
                increasing = true;
            }
        }
    }
}

function* fireColGen() {
    const minHue = 29;
    const maxHue = 60;
    const hueIncrement = 0.5;
    
    let hue = minHue;
    let increasing = true;

    while (true) {
        const color = hslToRgb(hue, 100, 50);
        yield color;

        if (increasing) {
            hue += hueIncrement;
            if (hue >= maxHue) {
                increasing = false;
            }
        } else {
            hue -= hueIncrement;
            if (hue <= minHue) {
                increasing = true;
            }
        }
    }
}

function* randomColGen() {
    while (true) {
        const color = hslToRgb(Math.random() * 360, 100, 50);
        yield color;
    }
}

function hslToRgb(h, s, l) {
    h %= 360;
    const hslString = `hsl(${h},${s}%,${l}%)`;
    const tempElement = document.createElement("div");
    tempElement.style.backgroundColor = hslString;
    return tempElement.style.backgroundColor;
}

var GEN_MODE = 0;
var gen = rainbowColGen();

function slowAnimate() {
    var col = gen.next().value;
    mesh.material.color = new THREE.Color(col);
}

var TICK_RATE = 10;
var interval = setInterval(slowAnimate, TICK_RATE);

document.addEventListener("mousemove", (e) => {
    var mouse = new THREE.Vector2();
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children );

    if(intersects.length > 0) {
        $('html,body').css('cursor', 'pointer');
    } else {
        $('html,body').css('cursor', 'default');
    }
});

document.addEventListener("click", (e) => {
    if($("html,body").css("cursor") == "pointer") {
        GEN_MODE++;
        if(GEN_MODE == 4) { GEN_MODE = 0; }

        //switch generator
        if(GEN_MODE === 0) { gen = rainbowColGen(); TICK_RATE = 10; }
        if(GEN_MODE === 1) { gen = purplePulseColGen(); TICK_RATE = 10; }
        if(GEN_MODE === 2) { gen = fireColGen(); TICK_RATE = 50; }
        if(GEN_MODE === 3) { gen = randomColGen(); TICK_RATE = 500; }

        clearInterval(interval);
        interval = setInterval(slowAnimate, TICK_RATE);
    }
});

animate();