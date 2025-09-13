import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { WebDeveloper } from '../components/WebDeveloper';
import { CanvasLoader } from '../components/CanvasLoader';
import { 
    calculateCubeSizes, 
    calculateReactLogoSizes, 
    calculateRingsSizes, 
    calculateTargetSizes, 
    calculateWebDeveloperSizes 
} from '../utils/calculateSizes';
import { Target } from '../components/Target';
import { ReactLogo } from '../components/ReactLogo';
import { Cube } from '../components/Cube';
import { Rings } from '../components/Rings';
import { HeroCamera } from '../components/HeroCamera';

export const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 424 });
    const isMobile = useMediaQuery({ minWidth: 425, maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const webDeveloperSizes = calculateWebDeveloperSizes(isSmall, isMobile, isTablet);
    const targetSizes = calculateTargetSizes(isSmall, isMobile, isTablet);
    const reactLogoSizes = calculateReactLogoSizes(isSmall, isMobile, isTablet);
    const cubeSizes = calculateCubeSizes(isSmall, isMobile, isTablet); 
    const ringsSizes = calculateRingsSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi, I am Lakshmikanth 
                    <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>Frontend Developer</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <perspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile>
                            <WebDeveloper 
                                position={webDeveloperSizes.position}
                                scale={webDeveloperSizes.scale}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                        </HeroCamera>
                        <group>
                            <Target
                                position={targetSizes.position}
                                scale={targetSizes.scale}
                            />
                            <ReactLogo 
                                position={reactLogoSizes.position}
                                scale={reactLogoSizes.scale}
                            />
                            <Cube 
                                position={cubeSizes.position}
                                scale={cubeSizes.scale}
                            />
                            <Rings 
                                position={ringsSizes.position}
                                scale={ringsSizes.scale}
                            />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
