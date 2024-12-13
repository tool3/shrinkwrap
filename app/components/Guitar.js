import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'

export default function Guitar(props) {
    const { nodes, materials } = useGLTF('/models/guitar.glb')
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
                    roughness={0}
                    thickness={0.01}
                    ior={1.5}
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

useGLTF.preload('/models/guitar.glb')