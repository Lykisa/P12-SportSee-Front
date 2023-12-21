import './Navigation.css'
import bike from '/assets/bike.png'
import gym from '/assets/gym.png'
import meditation from '/assets/meditation.png'
import swimming from '/assets/swimming.png'

function Navigation() {
    return(
        <nav className='navBar'>
            <div className='iconNavBar'>
                <img src={meditation} className='iconMedi' alt="Icon Meditation" />
                <img src={swimming} className='iconSwin' alt="Icon Swimming" />
                <img src={bike} className='iconBike' alt="Icon Biking" />
                <img src={gym} className='iconGym' alt="Icon Gym" />
            </div>
            <p className='copyrights'>Copyrights, SportSee 2020</p>
        </nav>
    )
}

export default Navigation