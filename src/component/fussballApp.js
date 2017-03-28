import React, {Component} from 'react';
import Tabelle from './tabelle';

class FussballApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

            teams: null
        };
    }

    componentDidMount() {
        console.log("test");

        fetch('http://192.168.178.48:8080/api/v1/league')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({ teams: json.table });
            });
    }

    render() {
        return (
            <div className="FussballApp">

                <Tabelle teams={this.state.teams}/>
            </div>
        );
    }
}

export default FussballApp;

