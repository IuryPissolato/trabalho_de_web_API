const { Diretor } = require('../models')

module.exports = class DiretorController {
    static async showAll(req, res) {
        try {
            const diretores = await Diretor.findAll();
            res.status(200).json({diretores});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async show(req, res) {
        try {
            const diretor = await Diretor.findByPk(req.params.id);
            res.status(200).json({diretor});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const novo_diretor = await Diretor.create({
                nome: req.body.nome,
                ano_nascimento: req.body.ano_nascimento
            });
            res.status(200).json({data: "Diretor criado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async update(req, res) {
        try {
            const diretor = Diretor.findByPk(req.params.id);
            const atualizado = await diretor.update({
                nome: req.body.nome,
                ano_nascimento: req.body.ano_nascimento
            });
            res.status(200).json({data: "Diretor criado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async delete(req, res) {
        try {
            const diretor = Diretor.findByPk(req.params.id);
            await destroy(diretor);
            res.status(200).json({data: "Diretor deletado com sucesso!"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async filmesDiretor(req, res) {
        try {
            const filmes = await Diretor.findByPk(req.params.id, {
                include: 'filme'
            });
            res.status(200).json({filmes});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}