var Fixtures = React.createClass({
    render: function () {

        var fixtureNodes = this.props.fixtures.map(function (fixture) {
            var matchDay = new Date(fixture.date);
            var matchDate = $.format.date(matchDay, 'dd MMMM yyyy');
            var matchTime = $.format.date(matchDay, 'HH.mm');

            var findTeam = function (teamName) {
                return fixture.group.filter(function (team) {
                    return team.name === teamName;
                })[0];
            };

            var homeTeam = findTeam(fixture.homeTeamName);
            var awayTeam = findTeam(fixture.awayTeamName);

            return (
                <li className="list-group-item">
                    <div className="row"><h6>{matchDate}</h6></div>
                    <div className="row text-center fixture">
                        <span className="col-md-3 col-md-offset-1">{homeTeam.shortName}</span>
                        <img src={homeTeam.crestUrl} alt={homeTeam.shortName} className="img-responsive col-md-1"/>
                        <span className="col-md-2">{matchTime}</span>
                        <img src={awayTeam.crestUrl} alt={awayTeam.shortName} className="img-responsive col-md-1"/>
                        <span className="col-md-3">{awayTeam.shortName}</span>
                    </div>
                </li>
            )
        });

        return (
            <ul className="col-md-8 col-md-offset-2 list-group">
                {fixtureNodes}
            </ul>
        );
    }
});