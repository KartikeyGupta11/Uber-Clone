#include <iostream>
#include <vector>
#include <unordered_set>
#include <string>
#include <sstream>
#include <algorithm> // Include algorithm for sort

using namespace std;

const int BOARD_SIZE = 8;

// Directions for Queen, Rook, and Bishop
const vector<pair<int, int>> QUEEN_DIRS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {1, 1}, {-1, 1}, {1, -1}};
const vector<pair<int, int>> ROOK_DIRS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
const vector<pair<int, int>> BISHOP_DIRS = {{-1, -1}, {1, 1}, {-1, 1}, {1, -1}};

// Piece structure
struct Piece {
    char type; // Q, R, or B
    int x, y;  // Position on the board (0-indexed)
};

// Check if a position is within the board
bool isValid(int x, int y) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

// Generate moves for a piece based on its type
vector<pair<int, int>> generateMoves(const Piece& piece) {
    vector<pair<int, int>> moves;
    const vector<pair<int, int>>* directions;

    if (piece.type == 'Q') {
        directions = &QUEEN_DIRS;
    } else if (piece.type == 'R') {
        directions = &ROOK_DIRS;
    } else if (piece.type == 'B') {
        directions = &BISHOP_DIRS;
    } else {
        return moves; // Invalid type
    }

    for (const auto& dir : *directions) {
        int nx = piece.x, ny = piece.y;
        while (true) {
            nx += dir.first;
            ny += dir.second;
            if (!isValid(nx, ny)) break;
            moves.emplace_back(nx, ny);
        }
    }

    return moves;
}

// Serialize board state into a string for uniqueness
string serializeBoard(const vector<Piece>& pieces) {
    vector<string> positions;
    for (const auto& piece : pieces) {
        positions.push_back(piece.type + to_string(piece.x) + to_string(piece.y));
    }
    sort(positions.begin(), positions.end()); // Ensure consistent ordering
    string state;
    for (const auto& pos : positions) state += pos + ";";
    return state;
}

// DFS to simulate moves and calculate unique positions
void dfs(vector<Piece>& pieces, int depth, int maxDepth, unordered_set<string>& uniquePositions) {
    if (depth == maxDepth) {
        uniquePositions.insert(serializeBoard(pieces));
        return;
    }

    for (size_t i = 0; i < pieces.size(); ++i) { // Change int to size_t
        vector<pair<int, int>> moves = generateMoves(pieces[i]);
        int originalX = pieces[i].x, originalY = pieces[i].y;

        for (const auto& move : moves) {
            // Make the move
            pieces[i].x = move.first;
            pieces[i].y = move.second;

            // Recurse
            dfs(pieces, depth + 1, maxDepth, uniquePositions);

            // Undo the move
            pieces[i].x = originalX;
            pieces[i].y = originalY;
        }
    }
}

// Main function to calculate unique board positions
int calculateUniquePositions(vector<Piece> pieces, int d) {
    unordered_set<string> uniquePositions;
    dfs(pieces, 0, d, uniquePositions);
    return uniquePositions.size();
}

// Parse input and solve the problem
int main() {
    string line;
    getline(cin, line);

    vector<Piece> pieces;
    stringstream ss(line);
    string pieceInfo;

    while (ss >> pieceInfo) {
        char type = pieceInfo[0];
        int x = pieceInfo[1] - 'A';
        int y = pieceInfo[2] - '1';
        pieces.push_back({type, x, y});
    }

    int d;
    cin >> d;

    cout << calculateUniquePositions(pieces, d);
    return 0;
}
