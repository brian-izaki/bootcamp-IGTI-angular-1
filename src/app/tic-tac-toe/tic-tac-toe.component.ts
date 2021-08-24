import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = 'O';
  winner: string = '';
  board: Array<string[]> = [['', '', ''], ['', '', ''], ['', '', '']]

  constructor() {
  }

  processPlay(i: number, j: number) {
    if (this.board[i][j] === '' && this.winner === '') {
      this.board[i][j] = this.currentPlayer;

      // verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      if (this.currentPlayer === 'O') this.currentPlayer = 'X';
      else this.currentPlayer = 'O';
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player)
        return true
    }

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player)
        return true
    }

    if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player)
      return true

    if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
      return true

    return false;
  }

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [['', '', ''], ['', '', ''], ['', '', '']]
  }

}
