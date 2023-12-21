import './Card.css'
import PropTypes from 'prop-types';

function Card(props) {
    return(
        <div className="Card">
            <img src={props.img} className="img_card" alt="image de la Card" />
            <div className="card_details">
                <p className="main_infos_card">{props.infos}{props.infos_unit}</p>
                <span className="main_infos_card_details">{props.infos_details}</span>
            </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    img : PropTypes.string,
    infos : PropTypes.number,
    infos_details : PropTypes.string,
    infos_unit : PropTypes.string,
}