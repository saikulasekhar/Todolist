import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-score-card-calculator',
  templateUrl: './score-card-calculator.component.html',
  styleUrls: ['./score-card-calculator.component.css']
})
export class ScoreCardCalculatorComponent implements OnInit {
  teamA = {
    teamA: [{
      playerName: '',
      runs: null,
      boundaries: null,
      wickets: null,
      oversPlayed: null,
      oversBowled: null,
    }],
    totalRuns: null,
    totalBoundaries: null,
    totalOversPlayed: null,
    totalOversBowled: null,
    totalWickets: null,
    result: '',
  };

  teamB = {
    teamB: [{
      playerName: '',
      runs: null,
      boundaries: null,
      wickets: null,
      oversPlayed: null,
      oversBowled: null,
    }],
    totalRuns: null,
    totalBoundaries: null,
    totalOversPlayed: null,
    totalOversBowled: null,
    totalWickets: null,
    result: '',
  };

  TeamAWickets: any = [];
  constructor(private modalService: NgbModal) { }
  teamAList: any = [];
  teamBList: any = [];
  addFieldValue() {
    this.teamAList.push({
      playerName: '',
      runs: null,
      boundaries: null,
      wickets: null,
      oversPlayed: null,
      oversBowled: null,
    })
  }
  deleteFieldValue(index) {
    this.teamAList.splice(index, 1);
  }
  addFieldValueB() {
    this.teamBList.push({
      playerName: '',
      runs: null,
      boundaries: null,
      wickets: null,
      oversPlayed: null,
      oversBowled: null,
    })
  }
  deleteFieldValueB(index) {
    this.teamBList.splice(index, 1);
  }
  addTeamA(form) {
    if (form.invalid) return;
    this.teamA.teamA = this.teamAList;
    // console.log(this.teamA.teamA);
    this.totalTeamAWickets(this.teamA.teamA);
    this.totalTeamARuns(this.teamA.teamA);
    this.totalTeamAOversPlayed(this.teamA.teamA);
    this.totalTeamABoundaries(this.teamA.teamA);
    this.totalTeamAOversBowled(this.teamA.teamA);
  }
  addTeamB(form) {
    if (form.invalid) return;
    this.teamB.teamB = this.teamBList;
    console.log(this.teamB.teamB);
    this.totalTeamBWickets(this.teamB.teamB);
    this.totalTeamBRuns(this.teamB.teamB);
    this.totalTeamBOversPlayed(this.teamB.teamB);
    this.totalTeamBBoundaries(this.teamB.teamB);
    this.totalTeamBOversBowled(this.teamB.teamB);
  }
  // For Team A calculations
  totalTeamAWickets(array) {
    // console.log(array);
    var result = array.map(function (a) { return a.wickets; });
    // console.log(result);
    this.teamA.totalWickets = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Num of Wickets ' + this.teamA.totalWickets);
  }
  totalTeamARuns(array) {
    var result = array.map(function (a) { return a.runs; });
    this.teamA.totalRuns = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Team Runs ' + this.teamA.totalRuns);
  }
  totalTeamAOversPlayed(array) {
    var result = array.map(function (a) { return a.oversPlayed; });
    this.teamA.totalOversPlayed = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Overs Played ' + this.teamA.totalOversPlayed);
  }
  totalTeamAOversBowled(array) {
    var result = array.map(function (a) { return a.oversBowled; });
    this.teamA.totalOversBowled = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Overs Bowled ' + this.teamA.totalOversBowled);
  }
  totalTeamABoundaries(array) {
    var result = array.map(function (a) { return a.boundaries; });
    this.teamA.totalBoundaries = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Boundaries Hit ' + this.teamA.totalBoundaries);
  }

  // For Team B calculations
  totalTeamBWickets(array) {
    // console.log(array);
    // taking out all the wickets by each player
    var result = array.map(function (a) { return a.wickets; });
    // console.log(result);
    this.teamB.totalWickets = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Num of Wickets ' + this.teamB.totalWickets);
  }
  totalTeamBRuns(array) {
    var result = array.map(function (a) { return a.runs; });
    this.teamB.totalRuns = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Team Runs ' + this.teamB.totalRuns);
  }
  totalTeamBOversPlayed(array) {
    var result = array.map(function (a) { return a.oversPlayed; });
    this.teamB.totalOversPlayed = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Overs Played ' + this.teamB.totalOversPlayed);
  }
  totalTeamBOversBowled(array) {
    var result = array.map(function (a) { return a.oversBowled; });
    this.teamB.totalOversBowled = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Overs Bowled ' + this.teamB.totalOversBowled);
  }
  totalTeamBBoundaries(array) {
    var result = array.map(function (a) { return a.boundaries; });
    this.teamB.totalBoundaries = result.reduce(function (total, num) {
      return total + num;
    });
    console.log('Total Boundaries Hit ' + this.teamB.totalBoundaries);
  }
  ngOnInit() {
  }
  resultDecider(totalRunsA, totalRunsB, boundariesA, boundariesB) {
    if (totalRunsA > totalRunsB) {
      this.teamA.result = 'Winner!!!';
      this.teamB.result = 'Looser!!!';
    } else if (totalRunsA < totalRunsB) {
      this.teamA.result = 'Looser!!!';
      this.teamB.result = 'Winner!!!';
    } else if (totalRunsA == totalRunsB) {
      if (boundariesA > boundariesB) {
        this.teamA.result = 'Winner!!!';
        this.teamB.result = 'Looser!!!';
      } else if (boundariesA < boundariesB) {
        this.teamA.result = 'Looser!!!';
        this.teamB.result = 'Winner!!!';
      } else if (boundariesA == boundariesB) {
        this.teamA.result = 'Play Super Over!!!';
        this.teamB.result = 'Play Super Over!!!';
      }
    }

  }
}
