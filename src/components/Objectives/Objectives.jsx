import './Objectives.css'
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts'
import CustomToolTipObjectives from '../CustomToolTipObjectives/CustomToolTipObjectives'
import '../../data/data'
import PropTypes from 'prop-types'

function Objectives({data}) {

  console.log('Récupération des données des sessions moyennes')
  console.log(data)

    return (
        <div className='objectives_graph'>
            <span className='objectives_graph_span'>Durée moyenne de vos sessions</span>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart /* width={200} height={200} */ data={data.sessions}
                  margin={{ top: 0, right: 10, left: 10, bottom: 5 }}>
                  <XAxis dataKey="day" stroke='white' opacity={0.5} tickLine={false} axisLine={false} fontSize={10} />
                  <Tooltip content={<CustomToolTipObjectives />}/>
                  <Line type="monotone" dataKey="sessionLength" dot = {false} strokeWidth={2}  activeDot={{stroke: "white", strokeOpacity: 0.2, fill: "white", strokeWidth: 15, r: 5, }}stroke="white" />
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Objectives

Objectives.propTypes = {
  data : PropTypes.object
}