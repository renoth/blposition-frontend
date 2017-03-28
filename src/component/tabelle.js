import React, {Component} from 'react';
import Team from './team';

class Tabelle extends Component {

    render() {
        return (
            <table className="tabelle">
                <tbody>
                {this.props.teams && this.props.teams.map((element, i) => {
                    return (<Team key={i} team={element}/>);
                })}
                </tbody>
            </table>
        );
    }
}

export default Tabelle;