// 3D Portfolio Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), alpha: true });
renderer.setSize(window.innerWidth, 500);
document.getElementById('3d-portfolio').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x00ffcc, 2, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Create 3D objects for achievements
const geometry = new THREE.BoxGeometry(1, 1, 1);
const materials = [
    new THREE.MeshStandardMaterial({ color: 0x00ffcc, emissive: 0x00ffcc, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0xff00ff, emissive: 0xff00ff, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x00ccff, emissive: 0x00ccff, emissiveIntensity: 0.5 })
];
const cubes = [];

for (let i = 0; i < 5; i++) {
    const cube = new THREE.Mesh(geometry, materials[i % materials.length]);
    cube.position.x = (i - 2) * 2.5;
    cube.position.y = Math.random() * 2 - 1;
    cube.position.z = Math.random() * 2 - 1;
    scene.add(cube);
    cubes.push(cube);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cubes.forEach(cube => {
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
    });
    renderer.render(scene, camera);
}
animate();

// Responsive Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 500);
});

// Smooth Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// 3D Interaction
document.getElementById('3d-portfolio').addEventListener('click', () => {
    alert('Achievements: ROI Optimization, SEO Growth, Ad Campaigns - Explore More!');
});