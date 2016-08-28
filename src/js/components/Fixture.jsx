import React from 'react';

export default class Fixture extends React.Component {

    render() {

        let matchDay = new Date(this.props.fixture.date);
        let matchDate = Date.parse(matchDay).toString('dd MMMM yyyy');
        let matchResult = Date.parse(matchDay).toString('HH.mm');

        if (matchDay < Date.today()) {
            matchResult =
                `${this.props.fixture.result.goalsHomeTeam} : ${this.props.fixture.result.goalsAwayTeam}`;
        }

        let penalties;
        if (this.props.fixture.result.penaltyShootout) {
            penalties = `(${this.props.fixture.result.penaltyShootout.goalsHomeTeam}-${this.props.fixture.result.penaltyShootout.goalsAwayTeam} p)`;
        }

        return (
            <li className="list-group-item">
                <div><h6>{matchDate}</h6></div>
                <div className="row text-center fixture">
                    <span className="col-md-3 col-md-offset-1">{this.props.fixture.homeTeam.shortName}</span>
                    <img src={this.props.fixture.homeTeam.crestUrl} alt={this.props.fixture.homeTeam.shortName}
                         className="img-responsive match-logo col-md-1"/>
                    <div className="col-md-2">
                        <span className="match-result">{matchResult}</span><br />
                        <span className="text-success" style={{fontSize: '0.7em'}}>{penalties}</span>
                    </div>
                    <img src={this.props.fixture.awayTeam.crestUrl} alt={this.props.fixture.awayTeam.shortName}
                         className="img-responsive match-logo col-md-1"/>
                    <span className="col-md-3">{this.props.fixture.awayTeam.shortName}</span>
                </div>
            </li>
        );
    }
}