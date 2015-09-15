class Table extends React.Component {
    render() {
        let teamRows = this.props.teams.map((team, id) => {
            return <TableRow id={id} team={team} key={team.name}/>;
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
                    <th title="Goals Difference">+/-</th>
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
