import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public football: any = {};
  public league: number = 0;
  public teams: any[] = [];

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService.getData().subscribe(
      (result: any) => {
        if (result) {
          this.football = result;
          this.teams = result.teams;
          console.log(this.football);
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  // getTeamBadge(team: any): string {
  //   return team.strTeamBadge
  //     ? team.strTeamBadge
  //     : 'https://www.thesportsdb.com/images/media/team/badge/bk4qjs1546440351.png/medium';
  // }
  truncateText(text: string, wordLimit: number): string {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }
}
