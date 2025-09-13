import { Float, useGLTF } from '@react-three/drei'

export const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL + '/models/react.glb')
  return (
    <Float floatIntensity={1}>
        <group {...props}>
            <mesh
                geometry={nodes['React-Logo_Material002_0'].geometry}
                material={materials['Material.002']}
                position={[0, 0.079, 0.181]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.392, 0.392, 0.527]}
            />
        </group>
    </Float>
  )
}

useGLTF.preload(import.meta.env.BASE_URL + '/models/react.glb')