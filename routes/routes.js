const express = require('express');
const router = express.Router();
const FilmeController = require('../controllers/filmeController');
const DiretorController = require('../controllers/diretorController');
const GenerosController = require('../controllers/generosController')

router.get('/', (req, res) => {
    res.status(200).send("Bem vindo a api!");
})

// ROTAS FILME

router.get('/filmes', FilmeController.showAll);
router.get('/filmes/:id', FilmeController.show);
router.post('/filmes', FilmeController.create);
router.put('/filmes/:id', FilmeController.update);
router.delete('/filmes/:id', FilmeController.delete);
router.get('/filmes/:id/generos', FilmeController.filmesComGenero);

// ROTAS GENERO

router.get('/generos', GenerosController.showAll);
router.post('/generos', GenerosController.create);
router.put('/generos/:id', GenerosController.update);
router.delete('/generos/:id', GenerosController.delete);
router.get('/generos/:id/filmes', GenerosController.filmesPorGenero);

// ROTAS DIRETOR

router.get('/diretor', DiretorController.showAll);
router.get('/diretor/:id', DiretorController.show);
router.post('/diretor', DiretorController.create);
router.put('/diretor/:id', DiretorController.update);
router.delete('/diretor', DiretorController.delete);
router.get('/diretor/:id/filmes', DiretorController.filmesDiretor);

module.exports = router