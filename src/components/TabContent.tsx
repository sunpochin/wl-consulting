import MechanicalDevice from '@/components/MechanicalDevice'
import ParticleSystem from '@/components/ParticleSystem'
import NeuralNetwork from '@/components/NeuralNetwork'
import MedicalDevice from '@/components/MedicalDevice'
import IndustrialControl from '@/components/IndustrialControl'
import QuantumComputing from '@/components/QuantumComputing'
import SatelliteComm from '@/components/SatelliteComm'
import DNAAnalysis from '@/components/DNAAnalysis'
import RadarSystem from '@/components/RadarSystem'
import HologramProjection from '@/components/HologramProjection'
import AISimulation from '@/components/AISimulation'
import VRInterface from '@/components/VRInterface'
import EnergyGrid from '@/components/EnergyGrid'
import BiotechLab from '@/components/BiotechLab'

interface TabContentProps {
  activeTab: string
}

export default function TabContent({ activeTab }: TabContentProps) {
  switch (activeTab) {
    case 'home':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-4xl">
            From a cognitive neuroscience perspective, we focus on the
            human-machine interface design of complex systems, such as linear
            particle accelerators, large medical devices, and large-scale oil
            drilling facilities. We provide low-key tech solutions to help
            clients optimize human-machine interactions.
          </p>
          {/* 複雜機械 3D 旋轉裝置 */}
          <MechanicalDevice size={320} />
        </main>
      )
    case 'mechanical':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Mechanical Device Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Complex mechanical system 3D rotation animation, demonstrating
            multi-level mechanical operation principles, suitable for industrial
            control systems and precision equipment human-machine interface
            design.
          </p>
          <MechanicalDevice size={400} />
        </main>
      )
    case 'particle':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Particle System Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Simulate particle accelerators and high-energy physics experiments
            with dynamic visual effects, demonstrating particle trajectories,
            energy fluctuations, and core reaction processes.
          </p>
          <ParticleSystem size={400} />
        </main>
      )
    case 'neural':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Neural Network Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Visualize the signal transmission process of neural networks,
            demonstrating the application of cognitive science in human-machine
            interface design, suitable for AI-assisted decision systems.
          </p>
          <NeuralNetwork size={400} />
        </main>
      )
    case 'medical':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Medical Device Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Simulate real-time data display of medical monitoring devices,
            including ECG, vital signs monitoring, and diagnostic scanning
            systems&apos; dynamic interfaces.
          </p>
          <MedicalDevice size={400} />
        </main>
      )
    case 'industrial':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Industrial Control Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Demonstrate the control interface of industrial automation systems,
            including pipeline fluid monitoring, pressure and temperature
            detection, and valve control systems&apos; dynamic visualization.
          </p>
          <IndustrialControl size={400} />
        </main>
      )
    case 'quantum':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Quantum Computing Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Visualize quantum bits, quantum entanglement, and quantum gate
            operations, suitable for quantum computing research and high-end
            scientific computing system human-machine interface design.
          </p>
          <QuantumComputing size={400} />
        </main>
      )
    case 'satellite':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">
            Satellite Communication Animation
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Simulate satellite orbit operation, signal transmission, and ground
            station communication dynamic effects, demonstrating the operation
            principles of global communication networks and space communication
            systems.
          </p>
          <SatelliteComm size={400} />
        </main>
      )
    case 'dna':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">DNA Analysis Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Visualize DNA double helix structure, gene sequence analysis, and
            protein synthesis processes, suitable for biomedical research
            equipment and genetic engineering system interfaces.
          </p>
          <DNAAnalysis size={400} />
        </main>
      )
    case 'radar':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Radar System Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Demonstrate radar scanning, target detection, and tracking
            systems&apos; real-time dynamic effects, suitable for military
            defense, aviation control, and maritime monitoring system
            interfaces.
          </p>
          <RadarSystem size={400} />
        </main>
      )
    case 'hologram':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Hologram Projection Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Simulate 3D hologram image projection, beam projection, and
            stereoscopic display effects, demonstrating future display
            technology and virtual reality system visual interfaces.
          </p>
          <HologramProjection size={400} />
        </main>
      )
    case 'ai-sim':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">AI Simulation Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Visualize the signal transmission process of neural networks,
            demonstrating the application of cognitive science in human-machine
            interface design.
          </p>
          <AISimulation size={400} />
        </main>
      )
    case 'vr-interface':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">VR Interface Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Demonstrate VR interface interactions with scaling and flashing
            effects.
          </p>
          <VRInterface size={400} />
        </main>
      )
    case 'energy-grid':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Energy Grid Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Show energy flow in a grid with pulsing lines.
          </p>
          <EnergyGrid size={400} />
        </main>
      )
    case 'biotech-lab':
      return (
        <main className="flex flex-col gap-8 items-center text-center py-12">
          <h1 className="text-3xl font-bold">Biotech Lab Animation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Visualize molecular structures rotating and scaling.
          </p>
          <BiotechLab size={400} />
        </main>
      )
    default:
      return null
  }
}
