const res = require('express/lib/response');
const Ponto = require('../models/ponto');

const addPonto = async (request, response) =>{

    const nome = request.body.nome;
    const valor = request.body.valor;
    const org = request.body.org;
    const data = request.body.data;
    const geometria = {type: 'Point', coordinates:[request.body.lat, request.body.lng]}

    console.log(geometria);
    sincronizar()
    const ponto = Ponto.build({nome, valor, org, data, geometria});
    ponto.save().then(()=>{
        response.status(200).send('Ponto salvo!');
    }).catch(err =>{
        response.status(400).send('Falha ao salvar');
    });

};

const sincronizar = async(request, response) =>{
    await Ponto.sync()
}



module.exports = {addPonto, sincronizar};