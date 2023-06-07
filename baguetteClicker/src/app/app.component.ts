import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users!: any[];
  title: string;
  copyrightYear: number;
  copyrightName!: string;

  constructor(private userService: UserService) {
    this.title = 'Boulangerie de ';
    this.copyrightYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.userService.getUser(1).subscribe((res: any) => {
      this.title += res.results[0].name.first + ' (' + res.results[0].nat + ')'; // Affichage du Nom + la nationalité
      this.users = res.results; // Stockage des utilisateurs dans la variable users
      this.users.forEach((user: any) => {
        this.copyrightName =
          user.name.last + ' ' + user.name.first; // Affichage du nom, du prénom dans la variable
      });
    });
  }
}






