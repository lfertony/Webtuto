Iniciando os trabalhos



*primeiro acessar o path de instalacao *PATH/mongo/mongod/bin/mongod servico

mongo *cliente*


sudo chown -R lfp:users /data *para dar permissao pra executar sem passar o path*

mongod //para iniciar o servico
mongo //para iniciar o banco


como rodar script no mongo (de fora) node populatedb.js mongodb://127.0.0.1:27017/local_library


OBS. sobre rotas, elas seguem o seguinte fluxo ->
rotas -> controllers -> models -BD

mas na hora de desenvolver fazemos o inverso, comecamos defindo o nosso model no banco (models), depois montamos os controllers onde mostramos o que ira aparecer nas telas (view) quando uma requisao for encontrada -> depois definimos as rotas com todos os metodos (get,post, put e delete), entao adicionamos as rotas no app.js ( nome das views recebm o path e setamos o app.use para usar as variaveis.
