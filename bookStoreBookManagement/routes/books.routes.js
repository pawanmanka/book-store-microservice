import express from 'express';
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', (req, res) => {
    res.send('books home page')
})
router.get('/:id', (req, res) => {
    res.send('book  Detail '+ req.params.id)
});
router.post('/', (req, res) => {
    res.send('book save')
});
router.put('/:id', (req, res) => {
    res.send('book  update '+ req.params.id)
});

router.delete('/:id', (req, res) => {
    res.send('book  delete '+ req.params.id)
});

export default router;