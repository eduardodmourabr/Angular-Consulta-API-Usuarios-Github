import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  repo: string = ''
  
  user: GhUser | null = null
  repos: GhRepos [] | undefined

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (ghUser) => {
        this.user = ghUser
        console.log(this.user?.login)
      }
    )
    this.ghService.findRepos(this.username).subscribe(
      (ghUserRepo) => {
        this.repos = ghUserRepo
        console.log(this.user?.login)
      }
    )
    
    
    
  }

}
