class Fixture extends React.Component {

    render() {
        let matchDay = new Date(this.props.fixture.date);
        let matchDate = $.format.date(matchDay, 'dd MMMM yyyy');
        let matchTime = $.format.date(matchDay, 'HH.mm');

        let findTeam = (teamName) => {
            return this.props.fixture.group.filter((team) => {
                return team.name === teamName;
            })[0];
        };

        let homeTeam = findTeam(this.props.fixture.homeTeamName);
        let awayTeam = findTeam(this.props.fixture.awayTeamName);

        return (
            <li className="list-group-item">
                <div><h6>{matchDate}</h6></div>
                <div className="row text-center fixture">
                    <span className="col-md-3 col-md-offset-1">{homeTeam.shortName}</span>
                    <img src={homeTeam.crestUrl} alt={homeTeam.shortName}
                         className="img-responsive match-logo col-md-1"/>
                    <span className="col-md-2">{matchTime}</span>
                    <img src={awayTeam.crestUrl} alt={awayTeam.shortName}
                         className="img-responsive match-logo col-md-1"/>
                    <span className="col-md-3">{awayTeam.shortName}</span>
                </div>
            </li>
        );
    }
}