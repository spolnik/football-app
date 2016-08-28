import React from 'react';
import TableRow from './TableRow';
import TeamGroupResults from '../domain/TeamGroupResults';

export default class Standings extends React.Component {

    static standingsSort(a,b) {

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
            return <TableRow id={id} team={team} key={team.name} />;
        });

        return (
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th title="Played">P</th>
                    <th className="hidden-xs" title="Won">W</th>
                    <th className="hidden-xs" title="Drawn">D</th>
                    <th className="hidden-xs" title="Lost">L</th>
                    <th className="hidden-xs" title="Goals For">GF</th>
                    <th className="hidden-xs" title="Goals Against">GA</th>
                    <th title="Goals Difference">GD</th>
                    <th title="Points">Pts</th>
                </tr>
                </thead>
                <tbody>
                    {teamRows}
                </tbody>
            </table>
        );
    }
}
