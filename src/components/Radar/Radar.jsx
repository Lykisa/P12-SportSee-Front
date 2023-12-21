import './Radar.css'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import PropTypes from 'prop-types'
import '../../data/data'



function RadarGraph({data}) {

  console.log('Récupération des données des performances')
  console.log(data)
  console.log(data.kind)
  console.log(data.data)

  const dataRadar = data.data.map(obj => {
    return {
      value : obj.value,
      kind : data.kind[obj.kind]
    }
  })
  console.log(dataRadar)

    return(
        <div className='radar_graph'>
            <RadarChart outerRadius={70} width={200} height={200} data={dataRadar}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="kind" fontSize={8}  tickLine={false} stroke="white" />
              <Radar dataKey="value" stroke="#e60000" fill="#e60000" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}

export default RadarGraph

RadarGraph.propTypes = {
  data : PropTypes.object,
  kind : PropTypes.object,
}