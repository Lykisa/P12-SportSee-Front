import './Weight.css'
import '../../data/data'
import CustomTooltip from '../CustomToolTip/CustomToolTip'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'


function Weight({data}) {

    console.log('Récupération des données du poids')
    console.log(data)

    const kiloData = data.sessions.map(obj => {
        return obj.kilogram
    })

    const kiloMax = Math.max(...kiloData)+1
    const kiloMin = Math.min(...kiloData)-1

    return (
        <div className='weight_graph'>
            <div className='weight_graph_infos'>
                <h4 className='weight_title'>Activité Quotidienne</h4>
                <ul>
                    <li className='blackDot'>
                        <p>Poids (kg)</p>
                    </li>
                    <li className='redDot'>
                        <p>Calories brûlées (kCal)</p>
                    </li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart /* width={600} height={200} */ data={data.sessions}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.5} />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={10} />
                    <YAxis  orientation="left" yAxisId='left' stroke='transparent' />
                    <YAxis  tickLine={false} axisLine={false} domain={[kiloMin, kiloMax]} orientation="right" yAxisId='right' fontSize={10} />
                    <Tooltip content={<CustomTooltip />} offset={30} />
                    <Bar dataKey="kilogram" className='bar_infos' name='Poids (kg)' radius={[10, 10, 0, 0]} fill="black" barSize={7} yAxisId='right' />
                    <Bar dataKey="calories" className='bar_infos' name='Calories brûlées (kCal)' radius={[10, 10, 0, 0]} fill="#e60000" barSize={7} yAxisId='left' />
                </BarChart>
            </ResponsiveContainer>
                
        </div>
    )
}

export default Weight

Weight.propTypes = {
    data : PropTypes.object
}