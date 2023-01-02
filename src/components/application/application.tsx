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
            <Canvas camera={{ position: [-3, 1, 5], fov: 95, near: 0.1, far: 100 }} flat={true}>
                <OrbitControls maxDistance={8} minDistance={1} />
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