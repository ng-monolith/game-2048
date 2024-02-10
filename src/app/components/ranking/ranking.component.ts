import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface UserData {
  position: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = new MatTableDataSource<UserData>([
    {position: 1, name: 'John', score: 1500},
    {position: 2, name: 'Alice', score: 1200},
    {position: 3, name: 'Bob', score: 1000},
    // Add more data as needed
  ]);
}
