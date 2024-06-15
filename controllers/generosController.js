const { Generos, Filme } = require('../models');

module.exports = class GenerosController {

    static async showAll(req, res) {
        try {
            const generos = await Generos.findAll()
            res.status(200).json({generos});
        } catch(e) {
            res.status.json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const novo_genero = await Generos.create({
                nome_genero: req.body.nome_genero
            })
            res.status(200).json({data: "Genero criado com sucesso!"});
        } catch(e) {
            res.status.json({error: e.message});
        }
    }

    static async delete(req, res) {
        try {
            const genero = await Generos.findByPk(req.params.id);
            await genero.destroy()
            res.status(200).json({data: "Genero criado com sucesso!"});
        } catch(e) {
            res.status.json({error: e.message});
        }
    }
    
    static async update(req, res) {
        try {
            const genero = await Generos.findByPk(req.params.id);
            const atualizado = await Generos.update({
                nome_genero: req.body.nome_genero
            })
            res.status(200).json({data: "Genero criado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async filmesPorGenero(req, res) {
        try {
            const genero = await Generos.findByPk(req.params.id, {
                include: {
                    model: Filme,
                    as: 'filmes'
                }
            });

            if(!genero) {
                res.status(500).json({data: "Genero não encontrado"})
            }

            res.status(200).json({genero});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }
}