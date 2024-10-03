import express from 'express';
import { CalendarService } from './calendar.service';

const router = express.Router();

const calendareService = new CalendarService();

router.get('/', async (req, res, next) => {
  try {
    const { league } = req.query;
    const calendar = await calendareService.get(league);
    res.send(calendar);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  await calendareService.save(req.body)
  res.send(req.body)
});

export default router;