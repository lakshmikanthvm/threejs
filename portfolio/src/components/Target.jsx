import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF(import.meta.env.BASE_URL + '/models/target.gltf');

    useGSAP(() => {
        gsap.to(targetRef.current.position, {   
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,     
            yoyo: true,
        });
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}
