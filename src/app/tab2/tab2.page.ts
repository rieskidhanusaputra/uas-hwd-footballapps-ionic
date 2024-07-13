import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Router, NavigationExtras } from '@angular/router'; // Ensure Router and NavigationExtras are imported

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public football: any = {};
  public league: number = 0;
  public teams: any[] = [];

  constructor(private footballService: FootballService, private router: Router) {} // Added router to constructor

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

  truncateText(text: string, wordLimit: number): string {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }

  save(team: any) {
    // Logic to save the team to favorites
    console.log('Added to favorites:', team);
    localStorage.setItem('fav', JSON.stringify(team));
  }

  detailpage(team: any): void {
    let teamDetails = {
      name: team.strTeam,
      description: team.strDescriptionEN,
      badge: team.strBadge,
      formedYear: team.intFormedYear,
      stadium: team.strStadium,
      city: team.strStadiumLocation,
    };
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(teamDetails),
      },
    };

    this.router.navigate(['/detail'], extras); // Updated to use this.router
  }
}
