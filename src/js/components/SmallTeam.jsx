import React from 'react';

export default class SmallTeam extends React.Component {

    render() {
        return (
            <span>
                <img src={this.props.team.crestUrl} alt={this.props.team.name} className="img-small"/>
                <span className="short-name">{this.props.team.shortName}</span>
            </span>
        );
    }
}