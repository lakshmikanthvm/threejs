import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { use, useRef } from 'react';

export const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 15], 0.25, delta);

        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y, -state.pointer.x / 5, 0], 0.25, delta);
        }
    });

    return (
        <group ref={groupRef} scale={1.5}>
            {children}
        </group>
    );
}
