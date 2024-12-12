import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export default function Wrap(props) {
    const { nodes, materials } = useGLTF('/models/wrap.glb')
    
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={new MeshStandardMaterial({  metalness: 0.3, roughness: 0.2, color: 'hotpink' })}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0, 0.169, 0]}
                scale={[1.964, 1, 1]}
            >
                <MeshTransmissionMaterial
                    color="#ffffff"
                    samples={1}
                    transmission={1}
                    roughness={0.15}
                    thickness={0.01}
                    ior={1.5}
                    
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/models/wrap.glb')
