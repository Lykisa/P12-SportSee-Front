import PropTypes from 'prop-types'

import './CustomToolTip.css'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
          <div className="customTooltipBlock">
            <p>{`${payload[0].value} kg`}</p>
            <p>{`${payload[1].value} kCal`}</p>     
          </div>
      )
    }
    return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default CustomTooltip