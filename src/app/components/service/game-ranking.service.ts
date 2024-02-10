import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface GameResult {
  name: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameRankingService {
  private rankings: GameResult[] = [];
  private rankingsSubject = new BehaviorSubject<GameResult[]>([]);

  getRankings() {
    return this.rankingsSubject.asObservable();
  }

  addResult(name: string, score: number) {
    const result: GameResult = { name, score };
    this.rankings.push(result);
    this.rankings.sort((a, b) => b.score - a.score); // Sort descending by score
    this.rankingsSubject.next([...this.rankings]);
  }
}
