import React, {Component} from 'react'
import HeroAtSquad from './HeroAtSquad'

class HeroListAtSquads extends Component {
    render() {
        const heroes = this.props.heroes;


        return (
            <div>
                {/*<h3>HEROES LIST qnty: {heroes.length}</h3>*/}

                    {heroes.map(squad => (
                        <li key={squad.id}>
                            <HeroAtSquad/>
                        </li>
                    ))}

            </div>
        )
    }
}

export default HeroListAtSquads;