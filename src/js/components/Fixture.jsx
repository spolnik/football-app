class Fixture extends React.Component {

    render() {
        var matchDay = new Date(this.props.fixture.date);
        var matchDate = $.format.date(matchDay, 'dd MMMM yyyy');
        var matchTime = $.format.date(matchDay, 'HH.mm');

        var findTeam = (teamName) => {
            return this.props.fixture.group.filter((team) => {
                return team.name === teamName;
            })[0];
        };

        var homeTeam = findTeam(this.props.fixture.homeTeamName);
        var awayTeam = findTeam(this.props.fixture.awayTeamName);

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