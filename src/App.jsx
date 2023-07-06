import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 4, 6]} />
          <meshStandardMaterial />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
