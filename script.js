import * as THREE from 'https://unpkg.com/three@0.150.0/build/three.module.js';
import { FontLoader } from 'https://unpkg.com/three@0.150.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://unpkg.com/three@0.150.0/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'https://unpkg.com/three@0.150.0/examples/jsm/controls/OrbitControls.js';

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

var hexCols = [
    "0xff7de9",
    "0x7aceff",
    "0x7affa5",
    "0xffe97d",
    "0xff7d7d"
];

function getRandomHexCol() {
    var c = Math.floor(Math.random() * hexCols.length);
    if(c == mesh.material.color.getHex()) {
        return getRandomHexCol();
    } else {
        return c;
    }
}
document.addEventListener("click", (e) => {
    if($("html,body").css("cursor") == "pointer") {
        mesh.material.color.setHex(hexCols[getRandomHexCol()]);
    }
});

animate();