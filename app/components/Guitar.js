import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'

export default function Guitar(props) {
    const { nodes, materials } = useGLTF('/models/guitar_1.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}>
                <MeshTransmissionMaterial
                    color="#ffffff"
                    resolution={1024}
                    transmission={1}
                    roughness={0.15}
                    thickness={0.03}
                    ior={1.1}
                    chromaticAberration={0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials['Material.001']}
            />
        </group>
    )
}

useGLTF.preload('/models/guitar_1.glb')