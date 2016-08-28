import React from 'react';
import SmallTeam from './SmallTeam';

export default class TableRow extends React.Component {

    render() {
        let teamGroupResults = this.props.team;

        return (
            <tr>
                <td>{this.props.id + 1}</td>
                <td><SmallTeam team={teamGroupResults.team}/></td>
                <td>{teamGroupResults.played}</td>
                <td className="hidden-xs">{teamGroupResults.won}</td>
                <td className="hidden-xs">{teamGroupResults.drawn}</td>
                <td className="hidden-xs">{teamGroupResults.lost}</td>
                <td className="hidden-xs">{teamGroupResults.goalsFor}</td>
                <td className="hidden-xs">{teamGroupResults.goalsAgainst}</td>
                <td>{teamGroupResults.goalsDifference}</td>
                <td>{teamGroupResults.points}
                </td>
            </tr>
        );
    }
}