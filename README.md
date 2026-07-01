# Gym & Diet Chart

A weekly strength-training and diet plan viewer built with Angular 20 and Angular Material. Browse exercises by day and intensity level, track completed sets, and view daily meal plans with macros and calorie totals.

## Features

- **Exercise tab** — day-by-day workout tables filtered by Basic, Intermediate, or Advanced intensity; expandable exercise notes; completion checkboxes persisted in `localStorage`
- **Diet tab** — breakfast, lunch, snack, dinner cards with protein/fiber/carbs breakdown, calorie summary, and correction notes
- **Sunday rest day** — recovery guidance with lighter meal targets
- **Static deployment** — optimized for GitHub Pages

## Development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

Output is written to `dist/Gym-and-diet-chart/browser`.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs a production build with `baseHref` set to `/Gym-and-diet-chart/` and publishes the browser bundle via [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).

## Test

```bash
npm test
```

## Data

Workout and diet content lives in `public/data/gym-plan.json`. TypeScript interfaces are in `src/app/core/workout-data.ts`.

## Project structure

```
src/app/
  core/           — types, data service, completion tracking
  dashboard/
    exercise/     — workout tables
    diet/           — meal plan cards
    header/         — plan title and split summary
    footer/         — strategy notes
public/data/      — gym-plan.json (loaded at runtime)
```
