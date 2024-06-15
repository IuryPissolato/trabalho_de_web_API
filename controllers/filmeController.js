const { Filme, Generos } = require('../models');

module.exports = class FilmeController {
    static async showAll(req, res) {
        try {
            const filme = await Filme.findAll();
            res.status(200).json({filme});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async show(req, res) {
        try {
            const filme = await Filme.findByPk(req.params.id, {
                include: 'generos'
            });
            res.status(200).json({filme});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const novo_filme = await Filme.create({
                titulo: req.body.titulo,
                ano_lancamento: req.body.ano_lancamento,
                id_diretor: req.body.id_diretor
            });
            const generos = req.body.generos;
            if(generos && generos.length > 0) {
                generos.forEach(async (gen) => {
                    const genero = await Generos.findOne({where: {nome_genero: gen.nome}});
                    if(genero) {
                        await novo_filme.addGenero(genero);
                    }
                })
            } else {
                res.status(500).json({error: "não foi possível associar generos ao filme!"})
            }
            res.status(200).json({data: "Filme criado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async update(req, res) {
        try {
            const filme = Filme.findByPk(req.params.id);
            const atualizado = await filme.create({
                titulo: req.body.titulo,
                ano_lancamento: req.body.ano_lancamento,
                id_diretor: req.body.id_diretor
            });
            const generos = req.body.generos;
            if(generos && generos.length > 0) {
                generos.forEach(async (gen) => {
                    const genero = await Generos.findOne({where: {nome_genero: gen.nome}});
                    if(genero) {
                        await atualizado.addGenero(genero);
                    }
                })
            } else {
                res.status(500).json({error: "não foi possível associar generos ao filme!"})
            }
            res.status(200).json({data: "Filme criado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async delete(req, res) {
        try {
            const filme = Filme.findByPk(req.params.id);
            await destroy(filme);
            res.status(200).json({data: "Filme deletado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async filmesComGenero(req, res) {
        try {
            const filme = await Filme.findByPk(req.params.id, {
                include: 'generos'
            });
            res.status(200).json({filme});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }
}