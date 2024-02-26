import { Router, json } from 'express';
import { CampaignsController } from './../controllers';

const router = Router();

router.use(json());

router.get('/', (req, res) => {
  return res.send('Success GET');
});


router.get('/campaigns', (req, res) => {
});

router.post('/campaigns', CampaignsController.create);

export { router };
