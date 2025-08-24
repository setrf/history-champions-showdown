# History Champions Showdown

This repository has been trimmed down to the core game logic for the History Champions Showdown card game.  All UI code and other assets have been removed so the focus is entirely on the mechanics that drive the game.

## Structure

- `src/data/types/leader.ts` – TypeScript definition for a historical leader.
- `src/utils/gameLogic.ts` – functions to initialise a game, play rounds and compute the result.
- `src/utils/__tests__/gameLogic.test.ts` – unit tests covering the game logic.

## Development

Install dependencies and run the tests:

```bash
npm install
npm test
```

The project uses TypeScript and [Vitest](https://vitest.dev/) for testing.

