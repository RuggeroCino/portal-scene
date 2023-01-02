import React, { useRef } from 'react';
import { Center, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { portal } from '../../shaders';
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export interface IModelProps {};

const modelPath = '/model/portal/portal.glb';

export const Model: React.FC<IModelProps> = () => {
    const bakedTexture = useTexture('/model/portal/portal.jpg');
    bakedTexture.flipY = false;

    const { nodes } = useGLTF(modelPath);

    const portalRef = useRef<ShaderMaterial>(null);

    useFrame((state, delta) => {
        if (portalRef.current) {
            portalRef.current.uniforms.uTime.value += delta
        }
    });

    return (
        <Center rotation-y={4.5}>
            <mesh {...nodes.baked}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh {...nodes.poleLight1}>
                <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh {...nodes.poleLight2}>
                <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh {...nodes.portalLight}>
                <shaderMaterial
                    ref={portalRef}
                    vertexShader={portal.vertexShader}
                    fragmentShader={portal.fragmentShader}
                    uniforms={{
                        uTime: { value: 0 },
                        uColorStart: { value: new THREE.Color('#121212') },
                        uColorEnd: { value: new THREE.Color('#cb6bff') },
                    }}
                />
            </mesh>
        </Center>
    );
};

useGLTF.preload(modelPath);