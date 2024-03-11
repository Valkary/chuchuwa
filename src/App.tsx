import { AreaChartExample } from './components/AreaChartExample';
import BarChartExample from './components/BarChartExample';
import { DonutChartExample } from './components/DonutChartExample';
import CandleStickExample from './components/CandleStickChartExample';
import { ScatterChartExample } from './components/ScatterChartExample';
import LineChartExample from './components/LineChartExample';
import ComposedChartExample from './components/ComposedChartExample';

function App() {
  return (
    <div>
      <h1 className='text-4xl'>Area chart (Tremor):</h1>
      <AreaChartExample />
      <h1 className='text-4xl'>Donut chart (Tremor):</h1>
      <DonutChartExample />
      <h1 className='text-4xl'>Scatter chart (Tremor):</h1>
      <ScatterChartExample />
      <h1 className='text-4xl'>Bar chart (Victory):</h1>
      <BarChartExample />
      <h1 className='text-4xl'>Candlestick (Victory):</h1>
      <CandleStickExample />
      <h1 className='text-4xl'>Line Chart (Recharts):</h1>
      <LineChartExample />
      <h1 className='text-4xl'>Composed Chart (Recharts):</h1>
      <ComposedChartExample />
    </div>
  )
}

export default App
