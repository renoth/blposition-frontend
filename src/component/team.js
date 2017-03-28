import React, {Component} from 'react';

class Team extends Component {

    render() {
        return (
            <tr className="team">
                {Object.keys(this.props.team).map((key) => (
                    <td key={key}>{this.props.team[key]}</td>
                ))}
            </tr>
        );
    }
}

export default Team;