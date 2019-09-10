const express = require('express');
const morgan = require('morgan');
const app = express();
//settings

const routes = require('./routes')
const routesApi = require('./routes-api');

app.set('appName', 'Mi primer server');
app.set('views'+__dirname + '/views' );


app.set('view engine', 'ejs');
//middlewares

app.use(morgan('combined'));
//rutas 
app.use(routes);
app.use('/api',routesApi);

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});


    app.set('port', process.env.PORT || 30002);
app.listen(app.get('port'),()=>{
console.log(`Servidor corriendo en puerto:'${app.get('port')}'`)
console.log('Nombre de la App: ', app.get('appName'));
});
