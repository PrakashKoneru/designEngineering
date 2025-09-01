export default function ThreeJSDemoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8 font-mono">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-300">
            🎮 Three.js Canvas Explained
          </h1>
          <p className="text-xl text-gray-300">
            Interactive breakdown of how a Three.js canvas element works
          </p>
        </header>

        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-green-500/30">
          <h2 className="text-2xl font-semibold mb-4 text-green-300">
            💡 What You Saw: HTML Canvas Element
          </h2>
          <pre className="text-sm text-green-400 bg-gray-900 p-4 rounded border-l-4 border-green-500">
{`<canvas data-engine="three.js r172" width="1016" height="1016"></canvas>`}
          </pre>
          <p className="mt-4 text-gray-300">
            This is your <strong>drawing surface</strong> - think of it as a window into a 3D world powered by Three.js v172.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Core Concepts */}
          <section className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              🎭 The Three.js Trinity
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900 p-4 rounded border border-green-500/20">
                <h3 className="text-lg font-semibold text-green-400 mb-2">🌍 Scene</h3>
                <p className="text-sm text-gray-300">The 3D world container. Everything exists here.</p>
                <pre className="text-xs text-green-400 mt-2 bg-gray-800 p-2 rounded">
{`const scene = new THREE.Scene();`}
                </pre>
              </div>
              <div className="bg-gray-900 p-4 rounded border border-green-500/20">
                <h3 className="text-lg font-semibold text-green-400 mb-2">👁️ Camera</h3>
                <p className="text-sm text-gray-300">Your perspective into the 3D world.</p>
                <pre className="text-xs text-green-400 mt-2 bg-gray-800 p-2 rounded">
{`const camera = new THREE.PerspectiveCamera(
  75, width/height, 0.1, 1000
);`}
                </pre>
              </div>
              <div className="bg-gray-900 p-4 rounded border border-green-500/20">
                <h3 className="text-lg font-semibold text-green-400 mb-2">🎨 Renderer</h3>
                <p className="text-sm text-gray-300">The artist that paints on your canvas.</p>
                <pre className="text-xs text-green-400 mt-2 bg-gray-800 p-2 rounded">
{`const renderer = new THREE.WebGLRenderer({
  canvas: yourCanvasElement
});`}
                </pre>
              </div>
            </div>
          </section>

          {/* Code Example */}
          <section className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              💻 Complete Three.js Setup
            </h2>
            <pre className="text-sm text-green-400 bg-gray-900 p-4 rounded overflow-x-auto whitespace-pre-wrap">
{`// HOW A THREE.JS CANVAS WORKS - Interactive Breakdown

// 1. THE TRINITY: Scene + Camera + Renderer
const scene = new THREE.Scene();           // The 3D world container
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000); // Your eyes
const renderer = new THREE.WebGLRenderer({ canvas: yourCanvasElement }); // The artist

// 2. THE CANVAS CONNECTION
renderer.setSize(1016, 1016); // Match your canvas dimensions
renderer.setPixelRatio(window.devicePixelRatio); // Sharp on retina displays

// 3. CREATING 3D OBJECTS (Like building with digital LEGO)
const geometry = new THREE.BoxGeometry(1, 1, 1);        // Shape
const material = new THREE.MeshStandardMaterial({       // Surface properties
    color: 0xff6347,
    roughness: 0.7,
    metalness: 0.3
});
const cube = new THREE.Mesh(geometry, material);        // Shape + Surface = Object
scene.add(cube);                                        // Put it in the world

// 4. LIGHTING (Because 3D needs shadows to look real)
const ambientLight = new THREE.AmbientLight(0x404040, 0.4); // Soft overall light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Sun-like light
directionalLight.position.set(1, 1, 1);
scene.add(ambientLight, directionalLight);

// 5. CAMERA POSITIONING (Where you're looking from)
camera.position.z = 5;  // Step back to see the object

// 6. THE ANIMATION LOOP (The heartbeat of interactivity)
function animate() {
    requestAnimationFrame(animate);  // Browser's smooth 60fps timing
    
    // UPDATE: Make things move/change
    cube.rotation.x += 0.01;         // Spin the cube
    cube.rotation.y += 0.01;
    
    // RENDER: Paint the frame
    renderer.render(scene, camera);  // Take a photo and display it
}
animate(); // Start the loop`}
            </pre>
          </section>

          {/* Interaction System */}
          <section className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              🎯 Mouse Interactions
            </h2>
            <p className="text-gray-300 mb-4">
              The "Invisible Laser Pointer" technique - how mouse interactions work with 3D objects:
            </p>
            <pre className="text-sm text-green-400 bg-gray-900 p-4 rounded overflow-x-auto">
{`// 7. MOUSE INTERACTIONS (Making it respond to you)
const raycaster = new THREE.Raycaster();  // Invisible laser pointer
const mouse = new THREE.Vector2();        // Track mouse position

canvas.addEventListener('mousemove', (event) => {
    // Convert mouse position to 3D world coordinates
    mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
    
    // Shoot a ray from camera through mouse position
    raycaster.setFromCamera(mouse, camera);
    
    // See what the ray hits
    const intersects = raycaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {
        // Mouse is over a 3D object!
        const object = intersects[0].object;
        object.material.color.setHex(0xff0000); // Turn it red
    }
});`}
            </pre>
          </section>

          {/* Performance & Features */}
          <section className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              ⚡ What Happens Every Frame (60 FPS)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li><strong className="text-green-400">JavaScript</strong> updates object positions/rotations</li>
              <li><strong className="text-green-400">Three.js</strong> calculates all 3D math (matrices, lighting, etc.)</li>
              <li><strong className="text-green-400">WebGL</strong> sends instructions to GPU</li>
              <li><strong className="text-green-400">GPU</strong> renders thousands of triangles super fast</li>
              <li><strong className="text-green-400">Browser</strong> displays the result on your canvas</li>
              <li><strong className="text-green-400">requestAnimationFrame</strong> schedules next frame</li>
            </ol>
            <p className="mt-4 text-green-300">
              🎮 <strong>This creates the illusion of smooth 3D motion and interactivity!</strong>
            </p>
          </section>

          {/* Common Features */}
          <section className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              🚀 Common Interactive Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">User Interactions</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  <li>Camera controls (orbit, fly, first-person)</li>
                  <li>Object picking/selection with mouse</li>
                  <li>Drag and drop 3D objects</li>
                  <li>Touch gestures for mobile</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Visual Effects</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  <li>Physics simulation (Cannon.js)</li>
                  <li>Particle systems for effects</li>
                  <li>Post-processing (bloom, SSAO)</li>
                  <li>Real-time lighting & shadows</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance Tips */}
          <section className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              🏎️ Performance Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Use geometry instancing for many similar objects</li>
                  <li>Dispose of unused textures/geometries</li>
                  <li>Use LOD (Level of Detail) for complex scenes</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Enable frustum culling to skip off-screen objects</li>
                  <li>Use object pooling for dynamic objects</li>
                  <li>Optimize shaders and materials</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-12 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
          <p className="text-lg text-green-300">
            🎯 <strong>Bottom Line:</strong> That canvas you saw is essentially a{' '}
            <span className="text-green-400 font-semibold">real-time 3D engine running in your browser</span>
            {' '}- like having a mini game engine that can create everything from simple spinning cubes 
            to complex interactive visualizations!
          </p>
        </div>
      </div>
    </div>
  );
}
