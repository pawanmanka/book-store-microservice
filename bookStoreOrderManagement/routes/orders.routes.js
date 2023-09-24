import express from 'express';
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', (req, res) => {
    res.send('Orders home page')
})
router.get('/:id', (req, res) => {
    res.send('Orders  Detail '+ req.params.id)
});
router.post('/', (req, res) => {
    res.send('Orders save')
});
router.delete('/:id', (req, res) => {
    res.send('Orders  delete '+ req.params.id)
});

export default router;