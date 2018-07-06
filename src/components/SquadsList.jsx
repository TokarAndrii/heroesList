import React, {Component} from 'react';
import Squad from './Squad'

export default class SquadsList extends Component {

    render() {
        const squads = (this.props.squad);


        return (
            <div>
                {squads.map(current => (
                    <li key={current.id}>
                        <Squad/>
                    </li>
                ))}

            </div>

        )
    }
}