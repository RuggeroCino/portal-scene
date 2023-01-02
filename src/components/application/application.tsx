import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import classNames from 'classnames';
import React from 'react';
import { Model } from '../model';
import './application.css';

export interface IApplicationProps {
    /**
     * Additional classes for the component.
     */
    className?: string;
};

export const Application: React.FC<IApplicationProps> = ({ className }) => {
    return (
        <div className={classNames('application', className)}>
            <Canvas camera={{ position: [0.5, 0.5, 5], fov: 40, near: 0.1, far: 50 }} flat={true}>
                <OrbitControls maxDistance={5} minDistance={2} maxPolarAngle={1.5} enablePan={false} />
                <Model />
                <Sparkles
                    size={2}
                    scale={[4, 1, 4]}
                    position-y={0}
                    speed={0.2}
                    count={40}
                />
            </Canvas>
        </div>
    );
};
