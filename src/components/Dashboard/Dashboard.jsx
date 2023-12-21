import Nutriment from '../Nutriment/Nutriment';
import Weight from '../Weight/Weight';
import Objectives from '../Objectives/Objectives';
import RadarGraph from '../Radar/Radar';
import KPIGraph from '../KPI/KPI';
import './Dashboard.css'
import { USER_MAIN_DATA, USER_ACTIVITY,  USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../services'




function Dashboard() {

    if( USER_MAIN_DATA == null || USER_ACTIVITY == null || USER_AVERAGE_SESSIONS == null || USER_PERFORMANCE == null) {
        return <h1>Pas de données à afficher. Veuillez réessayer.</h1>
    }

    console.log(import.meta.env.VITE_ID)
    console.log(USER_MAIN_DATA)
    const data_main_data = USER_MAIN_DATA

    console.log('Récupération des données de l`utilisateur')
    console.log(data_main_data)
    const data_activity = USER_ACTIVITY

    console.log('Récupération des données du poids')
    console.log(data_activity)
    const data_average_sessions = USER_AVERAGE_SESSIONS

    console.log('Récupération des données des sessions moyennes')
    console.log(data_average_sessions)
    const data_performance = USER_PERFORMANCE

    console.log('Récupération des données des performances')
    console.log(data_performance)

    return(
        <div className='dashboard'>
            <div className='welcome'>
                <h1>Bonjour <span className='userInfos'>{ data_main_data.userInfos.firstName }</span></h1>
                <p className='welcome_p'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='statistiques'>
                <div className='graphiques'>
                    <div className='weight'>
                        <Weight data={data_activity}/>
                    </div>
                    <div className='sous_graphiques'>
                        <div className='objectives'>
                            <Objectives data={data_average_sessions}/>
                        </div>
                        <div className='radar'>
                            <RadarGraph data={data_performance}/>
                        </div>
                        <div className='kpi'>
                            <KPIGraph data={data_main_data}/>
                        </div>
                    </div>
                </div>
                <div className='nutriments'>
                    <Nutriment data={data_main_data} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;