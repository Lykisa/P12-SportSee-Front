import PropTypes from 'prop-types'

import "./CustomToolTipObjectives.css"

const CustomToolTipObjectives = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
          <div className='objectives-tooltip'>
            <p> {`${payload[0].value} min`}</p>
          </div>
        )
      }
    return null
}

CustomToolTipObjectives.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default CustomToolTipObjectives