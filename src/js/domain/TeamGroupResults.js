export default class TeamGroupResults {

    constructor(team, fixtures) {
        this._team = team;

        this._won = 0;
        this._drawn = 0;
        this._lost = 0;
        this._goalsFor = 0;
        this._goalsAgainst = 0;

        this._process(
            fixtures.filter(fixture => new Date() > new Date(fixture.date))
        );
    }

    get played() {
        return this._won + this._drawn + this._lost;
    }

    get won() {
        return this._won;
    }

    get drawn() {
        return this._drawn;
    }

    get lost() {
        return this._lost;
    }

    get goalsFor() {
        return this._goalsFor;
    }

    get goalsAgainst() {
        return this._goalsAgainst;
    }

    get goalsDifference() {
        return this._goalsFor - this._goalsAgainst;
    }

    get points() {
        return this._won * 3 + this._drawn;
    }

    get team() {
        return this._team;
    }

    get name() {
        return this._team.name;
    }

    _process(fixtures) {
        this._processHomeFixtures(
            fixtures.filter(fixture => fixture.homeTeamName === this._team.name)
        );

        this._processAwayFixtures(
            fixtures.filter(fixture => fixture.awayTeamName === this._team.name)
        );
    }

    _processHomeFixtures(homeFixtures) {
        homeFixtures.forEach(fixture => {

            let teamGoals = fixture.result.goalsHomeTeam;
            let opponentGoals = fixture.result.goalsAwayTeam;

            this._calculateStats(teamGoals, opponentGoals);
        });
    }

    _processAwayFixtures(awayFixtures) {
        awayFixtures.forEach(fixture => {
            let teamGoals = fixture.result.goalsAwayTeam;
            let opponentGoals = fixture.result.goalsHomeTeam;

            this._calculateStats(teamGoals, opponentGoals);
        });
    }

    _calculateStats(teamGoals, opponentGoals) {
        this._goalsFor = this._goalsFor + teamGoals;
        this._goalsAgainst = this._goalsAgainst + opponentGoals;

        if (TeamGroupResults._isThatWin(teamGoals, opponentGoals)) {
            this._won = this._won + 1;
        } else if (TeamGroupResults._isThatLost(teamGoals, opponentGoals)) {
            this._lost = this._lost + 1;
        } else {
            this._drawn = this._drawn + 1;
        }
    }

    static _isThatWin(teamResult, oppositeResult) {
        return teamResult > oppositeResult;
    }

    static _isThatLost(teamResult, oppositeResult) {
        return teamResult < oppositeResult;
    }
}
