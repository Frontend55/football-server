import express from "express";
import { LeaguesService } from "./leagues.services";
const router = express.Router();


const leaguesService = new LeaguesService();

router.get('/', async (req, res, next) => {
  try {
    const leagues = await leaguesService.getAll();
    res.send(leagues);
  } catch (err) {
    next(err);
  }
});

// router.get('/:id', async (req, res, next) => {
//   try {
//     const leagues = await leaguesService.getById(req.params.id);
//     res.send(leagues);
//   } catch (err) {
//     next(err);
//   }
// });

router.post('/', async (req, res, next): Promise<void> => {
  await leaguesService.save(req.body)
  res.send(req.body)
})

export default router;