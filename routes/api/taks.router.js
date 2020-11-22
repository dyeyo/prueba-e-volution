const router = require('express').Router()
const { Task } = require('../../db')

router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  //console.log(req);
  // const tasks = await Task.findAll({
  //   where: {
  //     userId: userId
  //   }
  // });
  res.json(tasks)
})

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task)
})

router.get('/:id', async (req, res) => {
  console.log(req.params.id);
  const task = await Task.findOne({
    where: { id: req.params.id }
  });
  res.json(task)
})

router.put('/:id', async (req, res) => {
  await Task.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ success: "Se modifico con exito" })
})

router.delete('/:id', async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id }
  });
  res.json({ success: "Se elimino con exito" })
})

module.exports = router