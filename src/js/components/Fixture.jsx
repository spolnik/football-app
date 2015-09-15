class Fixture extends React.Component {

    render() {

        let matchDay = new Date(this.props.fixture.date);
        let matchDate = $.format.date(matchDay, 'dd MMMM yyyy');
        let matchTime = $.format.date(matchDay, 'HH.mm');

        return (
            <li className="list-group-item">
                <div><h6>{matchDate}</h6></div>
                <div className="row text-center fixture">
                    <span className="col-md-3 col-md-offset-1">{this.props.fixture.homeTeam.shortName}</span>
                    <img src={this.props.fixture.homeTeam.crestUrl} alt={this.props.fixture.homeTeam.shortName}
                         className="img-responsive match-logo col-md-1"/>
                    <span className="col-md-2">{matchTime}</span>
                    <img src={this.props.fixture.awayTeam.crestUrl} alt={this.props.fixture.awayTeam.shortName}
                         className="img-responsive match-logo col-md-1"/>
                    <span className="col-md-3">{this.props.fixture.awayTeam.shortName}</span>
                </div>
            </li>
        );
    }
}