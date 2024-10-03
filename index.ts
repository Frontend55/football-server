import express from 'express';
import { database } from './datebase';
import { job } from './cron'
import cors from 'cors';

import LeaguesRoutes from './leagues/leagues.routes';
import CalendarRoutes from './calendar/calendar.routes';

const port = process.env.PORT || '3333';
const app = express();

database.sync();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/leagues', LeaguesRoutes);
app.use('/calendar', CalendarRoutes);

// job.start();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
