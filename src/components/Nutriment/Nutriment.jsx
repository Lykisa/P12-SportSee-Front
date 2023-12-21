import './Nutriment.css'
import Card from "../Card/Card";
import energyicon from '/assets/energy-icon.png'
import carbs from '/assets/carbs-icon.png'
import faticon from '/assets/fat-icon.png'
import proteinicon from '/assets/protein-icon.png'
import '../../data/data'
import PropTypes from 'prop-types'


function Nutriment({data}) {

    console.log('Récupération des données de l`utilisateur')
    console.log(data.keyData)

    return(
        <div className="nutrimentsDiv">
            <Card img={energyicon} infos={data.keyData.calorieCount} infos_unit="Kcal" infos_details="Calories"/>
            <Card img={proteinicon} infos={data.keyData.proteinCount} infos_unit="g" infos_details="Proteines"/>
            <Card img={carbs} infos={data.keyData.carbohydrateCount} infos_unit="g" infos_details="Glucides"/>
            <Card img={faticon} infos={data.keyData.lipidCount} infos_unit="g" infos_details="Lipides"/>
        </div>
    )
}

export default Nutriment

Nutriment.propTypes = {
    data : PropTypes.object,
    keyData : PropTypes.object,
    calorieCount : PropTypes.number,
    proteinCount : PropTypes.number,
    carbohydrateCount : PropTypes.number,
    lipidCount : PropTypes.number
  }