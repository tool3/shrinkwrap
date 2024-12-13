import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import React, { useMemo } from 'react';
import { MeshStandardMaterial } from 'three';

export default function Shrinkwrap(props) {
    const { nodes, materials } = useGLTF('/models/shrinkwrap.glb');

    const material = useMemo(() => new MeshStandardMaterial({ color: 'pink', roughness: 0.4 }), []);
    
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Suzanne001.geometry}
                material={material}  
                position={[-1.546, 2.4, 0]}
                rotation={[1.236, -0.611, 1.476]} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                position={[0.363, 2.378, 0]}
                scale={[3.123, 2.218, 2.218]}>
                <MeshTransmissionMaterial
                    color="#ffffff"
                    resolution={1024}
                    transmission={1}
                    roughness={0}
                    thickness={0.1}
                    ior={1.5}
                    chromaticAberration={0}
                    anisotropy={0.1}
                    distortion={0.01}
                    distortionScale={0.3}
                    temporalDistortion={0.5}
                    clearcoat={0.1}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/models/shrinkwrap.glb');
