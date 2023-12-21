import './KPI.css'
import '../../data/data'
import { PieChart, Pie } from "recharts"
import PropTypes from 'prop-types'


function KPIGraph({data}) {

    console.log('Récupération des données de l`utilisateur')
    console.log(data)
    const score = data.todayScore ?? data.score 

    const dataKPI = [{
      name: 'score',
      value: score * 100,
      fill : "#e60000",
    },
    {
      name: 'notscore',
      value: (1-score) * 100,
      fill : "transparent"
    }]
    console.log(dataKPI)
    
  
    return(
        <div className='kpi_graph'>
            <span className='kpi_graph_span'>Score</span>
            <PieChart width={200} height={200}>
                <Pie data={dataKPI} dataKey="value" nameKey="name" cx="50%" cy="55%" innerRadius={65} outerRadius={80} fill="#e60000" startAngle={90} />
            </PieChart>
            <div className='kpi_graph_score'>
              <p className='kpi_graph_score_number'>{dataKPI[0].value}%<br/></p>
                <p className='kpi_graph_score_details'>de votre<br />
                objectif</p> 
            </div>
        </div>
    )
}

export default KPIGraph

KPIGraph.propTypes = {
  data : PropTypes.object
}