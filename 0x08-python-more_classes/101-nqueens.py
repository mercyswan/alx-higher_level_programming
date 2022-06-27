#!/usr/bin/python3
"""Solves the N-queens puzzle.

Determines all possible solutions to placing N
N non-attacking queens on an NxN chessboard.

Example:
    $ ./101-nqueens.py N

N must be an integer greater than or equal to 4.

Attributes:
    board (list): A list of lists representing the chessboard.
    solutions (list): A list of lists containing solutions.

Solutions are represented in the format [[r, c], [r, c], [r, c], [r, c]]
where `r` and `c` represent the row and column, respectively, where a
queen must be placed on the chessboard.
"""


def solveNQueens(self, n: int) -> List[List[str]]:
        moves = ((1, 2), (1, -2), (-1, 2), (-1, -2), (2, 1), (2, -1), (-2, 1), (-2, -1))
        
        queue = deque()
        
        res = []
        ans = []
        for i in range(n):
            queue.append((0, i, [(0, i)]))
            diagonalR = set([0-i])
            diagonalL = set([0+i])
            visitedCol = set([i])
            visitedRow = set([0])
            while queue:
                cr, cc, queens = queue.popleft()
                for di, dj in moves:
                    if len(queens) == n and queens not in ans:
                        ans.append(queens)
                        res.append(['.' * x[1] + 'Q' + '.' * (n-1-x[1]) for x in queens])
                        continue
                    if 0 <= cr + di < n and 0 <= cc + dj < n and cr + di not in visitedRow and cc + dj not in visitedCol and (cr + di) + (cc + dj) not in diagonalL and (cr + di) - (cc + dj) not in diagonalR:
                        queens.append((cr + di, cc + dj))
                        queue.append((cr + di, cc + dj, queens))
                        visitedCol.add(cc + dj)
                        visitedRow.add(cr + di)
                        diagonalR.add((cr + di) - (cc + dj))
                        diagonalL.add((cr + di) + (cc + dj))
                        
        return res
