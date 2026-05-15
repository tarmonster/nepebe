'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* =========================
   BOOT SEQUENCE
========================= */
function BootSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => setStep(i), i * 500);
    }
    setTimeout(onDone, 2800);
  }, []);

  return (
    <div className="boot">
      {step >= 1 && <p>INITIALIZING NEPEBE SYSTEM...</p>}
      {step >= 2 && <p>LOADING MODULES...</p>}
      {step >= 3 && <p>STARTING FIELD ENGINE...</p>}
      {step >= 4 && <p>CONNECTING DATA...</p>}
      {step >= 5 && <p className="done">SYSTEM ONLINE</p>}
    </div>
  );
}

/* =========================
   GPU FIELD
========================= */
function PhysicsGPU() {
  const { gl } = useThree();
  const scene = useRef(new THREE.Scene());
  const camera = useRef(
    new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  );

  const rtA = useRef(new THREE.WebGLRenderTarget(256, 256));
  const rtB = useRef(new THREE.WebGLRenderTarget(256, 256));

  const material = useRef(
    new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        fieldTex: { value: rtA.current.texture },
      },

      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = vec4(position,1.0);
        }
      `,

      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform float time;

        void main(){
          float val = sin(vUv.x * 10. + time)
                    * cos(vUv.y * 10. - time);

          gl_FragColor = vec4(val, val, 1.0, 1.0);
        }
      `,
    })
  );

  useEffect(() => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      material.current
    );
    scene.current.add(mesh);
  }, []);

  useFrame(({ clock }) => {
    material.current.uniforms.time.value = clock.getElapsedTime();

    gl.setRenderTarget(rtB.current);
    gl.render(scene.current, camera.current);

    const temp = rtA.current;
    rtA.current = rtB.current;
    rtB.current = temp;

    material.current.uniforms.fieldTex.value = rtA.current.texture;

    gl.setRenderTarget(null);
  });

  return null;
}

/* =========================
   PARTICLES
========================= */
function Particles() {
  const ref = useRef<any>();

  const COUNT = 200;
  const positions = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  }

  useFrame(() => {
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] += Math.sin(positions[i * 3]) * 0.01;
      positions[i * 3 + 1] += Math.cos(positions[i * 3 + 1]) * 0.01;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.05} color="white" />
    </points>
  );
}

/* =========================
   CONTROL PANEL
========================= */
function ControlPanel() {
  const [freq, setFreq] = useState(1);

  return (
    <div className="panel p-6">
      <h2 className="text-cyan-300 mb-4">Simulation Control</h2>

      <label>Frequency: {freq.toFixed(1)}</label>

      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={freq}
        onChange={(e) => setFreq(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function Page() {
  const [bootDone, setBootDone] = useState(false);

  if (!bootDone) return <BootSequence onDone={() => setBootDone(true)} />;

  return (
    <main className="p-6 grid grid-cols-12 gap-6 min-h-screen">

      {/* LEFT */}
      <div className="col-span-3">
        <ControlPanel />
      </div>

      {/* SIMULATION */}
      <div className="col-span-9 panel h-[600px]">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight />
          <PhysicsGPU />
          <Particles />
        </Canvas>
      </div>

      {/* HUD */}
      <div className="hud">
        <div>● SYSTEM ONLINE</div>
        <div>NEPEBE INTERFACE</div>
      </div>

    </main>
  );
}
