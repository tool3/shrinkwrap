import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { MeshNormalMaterial, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva';

export default function Shrinkwrap(props) {
    const { nodes, materials } = useGLTF('/models/shrinkwrap.glb');

    nodes.Cube.geometry.computeVertexNormals();
    
    const options = Array.from({ length: 56 }, (_, i) => 'glass_' + (i + 1) + '.png')
        .reduce((acc, curr) => {
            acc[curr.replace('.png', '')] = curr;
            return acc;
        }, {});


    const matcap = useControls('Cube Matcap', {
        matcap: {
            value: 'glass_16.png',
            options
        }
    })

    const [map] = useLoader(TextureLoader, [`/textures/matcaps/${matcap.matcap}`]);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Suzanne001.geometry}
                position={[-1.546, 2.4, 0]}
                rotation={[1.236, -0.611, 1.476]}>
                <meshMatcapMaterial matcap={map} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                position={[0.363, 2.378, 0]}
                scale={[3.123, 2.218, 2.218]}>
                <MeshTransmissionMaterial
                    color="#ffffff"
                    samples={8}
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
