"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x008080, 0.5); // Teal ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x90ee90, 3, 100); // Light green point light
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Objects
    const geometry1 = new THREE.TorusKnotGeometry(1, 0.2, 100, 16);
    const material1 = new THREE.MeshStandardMaterial({
      color: 0x008080, // Teal
      metalness: 0.8,
      roughness: 0.2,
    });
    const knot1 = new THREE.Mesh(geometry1, material1);
    knot1.position.set(-3, 1, -2);
    scene.add(knot1);

    const geometry2 = new THREE.IcosahedronGeometry(0.8, 0);
    const material2 = new THREE.MeshStandardMaterial({
      color: 0x90ee90, // Light green
      metalness: 0.5,
      roughness: 0.5,
      wireframe: true,
    });
    const icosahedron = new THREE.Mesh(geometry2, material2);
    icosahedron.position.set(3, -1, 0);
    scene.add(icosahedron);
    
    // Mouse movement
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      knot1.rotation.x += 0.001;
      knot1.rotation.y += 0.002;
      
      icosahedron.rotation.x -= 0.002;
      icosahedron.rotation.y -= 0.003;

      // Update light position based on mouse
      pointLight.position.x = mouse.x * 5;
      pointLight.position.y = mouse.y * 5;

      // Make camera slowly drift
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);


      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if(currentMount && renderer.domElement){
          currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default AnimatedBackground;
