const res = require('express/lib/response');
const Ponto = require('../models/ponto');

const addPonto = async (request, response) =>{

    const nome = request.body.nome;
    const valor = request.body.valor;
    const org = request.body.org;
    const data = request.body.data;
    const geometry = {type: 'Point', coordinates:[request.body.lat, request.body.lng]}

    console.log(geometry);
    sincronizar()
    const ponto = Ponto.build({nome, valor, org, data, geometry});
    ponto.save().then(()=>{
        response.status(200).redirect('/list');
    }).catch(err =>{
        response.status(400).send('Falha ao salvar');
    });
};

  const getPage = async function (request, response) {
    response.render('../views/index')
  }

  function addList(request, response){
    Ponto.findAll({order: [['id', 'DESC']]}).then(function(pontos){
      response.render('list', {pontos: pontos})
    })
  }
  
const sincronizar = async(request, response) =>{
    await Ponto.sync()
}


module.exports = {addPonto, sincronizar, getPage, addList};