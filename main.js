import express from 'express'

import bodyParser from 'body-parser'

import { setmail, sendmail} from './mail.js'

import pg from 'pg'


import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

app.use(express.static(__dirname+'\\public'))
app.use(bodyParser.urlencoded({extended: true}))


var transporter=setmail()


  const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'myproject',
    password: '123456',
    port: 5432
  });
  
  client.connect(function(err){
    if(err) throw err;
    console.log("connected")
  });


app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.get('/login', function (req, res) {
    res.render('login.ejs',{
      'status': ' '
    })
  })

app.post('/login',async function (req,res){

    var query2 = "select email,password from register_info where email = $1"
      var data = await client.query(query2,[req.body.email])
        if(data.rowCount>0){
          if(data.rows[0].password==req.body.password){
          console.log("User login successful")
          res.render('index.ejs')
          }
          else{
            console.log("Incorrect password")
            res.render('login.ejs', {
              'status': 'Incorrect password'
            })
          }
        }
        else{
          console.log("No user exist")
          res.render('login.ejs', {
            'status': 'No user exist'
          })
        }
  })

app.get('/register', function(req, res){
    res.render('register.ejs',{
        'status':' '
    })
})

app.post('/register', async function(req,res){

    var query2 = "select email,password from register_info where email = $1"
    var data = await client.query(query2,[req.body.email])
      if(data.rowCount>0){
        console.log("User already exist")
        res.render('register.ejs',{
          'status': 'User already exist'
        });
        }
      else{
        var query1 = "insert into register_info (fullname,email,password) values ($1,$2,$3)"
        var data = await client.query(query1,[req.body.name,req.body.email,req.body.password])
        sendmail(req.body.email,req.body.name,transporter)

        res.render('thanks.ejs',{
          'name':req.body.name
        });
      }
})

app.get('/reset', function (req,res){
    res.render('reset.ejs')
})

app.get('/gucci', function (req,res){
  res.render('gucci.ejs')
})

app.get('/chanel', function (req,res){
  res.render('chanel.ejs')
})

app.get('/givenchy', function (req,res){
  res.render('givenchy.ejs')
})

app.get('/dior', function (req,res){
  res.render('dior.ejs')
})

app.get('/louis-vuitton', function (req,res){
  res.render('louisvuitton.ejs')
})

app.get('/versace', function (req,res){
  res.render('versace.ejs')
})

app.get('/contact', function (req,res){
    res.render('contact.ejs')
})


app.listen(8080, function (req, res) {
    console.log("Server started")
})