import React from 'react';
import ReactTooltip from 'react-tooltip';
import TableRow from './TableRow';
import TeamGroupResults from '../domain/TeamGroupResults';

export default class Standings extends React.Component {

    static standingsSort(a, b) {

        if (a.points === b.points) {
            if (a.goalsDifference === b.goalsDifference) {
                return b.goalsFor - a.goalsFor;
            }

            return b.goalsDifference - a.goalsDifference;
        }

        return b.points - a.points;
    }

    render() {

        let teams = this.props.group.teams.map(team => {
            let teamFixtures = this.props.group.fixtures.filter(fixture =>
            fixture.homeTeamName === team.name || fixture.awayTeamName === team.name);

            return new TeamGroupResults(team, teamFixtures);
        });

        let teamRows = teams.sort(Standings.standingsSort).map((team, id) => {
            return <TableRow id={id} team={team} key={team.name}/>;
        });

        return (
            <div>
                <ReactTooltip />
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th data-tip="Played">P</th>
                        <th className="hidden-xs" data-tip="Won">W</th>
                        <th className="hidden-xs" data-tip="Drawn">D</th>
                        <th className="hidden-xs" data-tip="Lost">L</th>
                        <th className="hidden-xs" data-tip="Goals For">GF</th>
                        <th className="hidden-xs" data-tip="Goals Against">GA</th>
                        <th data-tip="Goals Difference">GD</th>
                        <th data-tip="Points">Pts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {teamRows}
                    </tbody>
                </table>
            </div>
        );
    }
}
