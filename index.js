'use strict'
require('dotenv').config();
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"
const express = require("express")
const app = express()  //express uzerinde bir server olusturduk
/*
app.get('/', (req, res) => {
    //console.log("Hello");
    // res.send()
    // res.write("hello" )
    // res.end() bu cok tercih edilmez send tercih edilir
    // res.write(JSON.stringify({
    //     "message": "hello"
    // }))
    // res.end()
    res.send({
        "message": "hello"
    })  //bu sekilde strignfy demeden objeyi yazabiliyoruz. bunu kullanacagiz tercih edilem bu
})
app.post('/', (req, res) => {res.send({"message": "post method request"})})
app.put('/', (req, res) => {res.send({"message": "put method request"})})
app.delete('/', (req, res) => {res.send({"message": "delete method request"})})
app.all('/', (req, res) => {res.send({"message": "all method called"})})
*/
// app.all('/', (req, res) => {res.send({"message": "all method called"}) })
//joker karakterler. tum path i yazmak yerine joker karakterlerle gosterebiliriz
// app.get('/ab(x?)12', (req, res) => {res.send({"message": "ab12 or abx12"})}) //araya tek karakter ne olursa
// app.get('/ab(x)+12', (req, res) => {res.send({"message": "abx........x12"})})
//app.get('/ab*', (req, res) => {  res.send({ "message": "put method request" })}) //sonu ne olursa olsun 
//app.get('/a*b', (req, res) => {  res.send({ "message": "put method request" })}) //a ile baslasin b ile bitsin araso ne olursa olsun 
//all u en sona yazarsak yuaklrida yazdiklarimiz disinda bir method calisamz. ama en basa yazarsak da alttakiler manasiz olur .bu yuzden all u ya en basa ayzip digerlerini yazmayiz ya da direkt istedigimiz methidlari yazariz.

//regex
//! iki / arasinda regex kabul edilir. tirnak kullanmayin
//regexr.com regex cok kullanma
//app.get(/abc$/, (req, res) => { res.send({ "message": "put method request" })}) sonu ne olursa olsun
//app.get(/\/*abc/, (req, res) => { res.send({ "message": "put method request" })}) basi ne olursa olsun sonu abc ile bitsin
//app.get(/abc/, (req, res) => { res.send({ "message": "put method request" })}) basi sonu ne olursa olsun uxcunde abc olsun

//? url parametreler

//http://127.0.0.1:8000/:10001/:tr?update=true
// app.get('/:blogId/:location', (req, res) => {

//     // res.send({
//     //     params: req.params,
//     //     blogId: req.params.blogId
//     // })

//     res.send({
//         params: req.params,
//         blogId: req.params.blogId,
//         url: {
//             protocol: req.protocol,
//             domain: req.hostname,
//             method: req.method,
//             url: req.url,
//             path: req.path,
//             params: req.params,
//             body: req.body,
//             query: req.query,
//             header: req.headers
//         }
//     })


// })// parametre ekleemk istersek slahs dan sonra paramrtre adini burada veriyoruz. postmande istek godnerirken orn blog id olarak / tan sonra :10001 yaziyoruz. her paramertre arasina slahs/ koyariz

//app.get('/:userId', (req, res) => {
/*
app.get('/:userId[0-9]', (req, res) => { //koseli parantez acarak sinirlama getirebiliriz sadece rakam gonderebiliriz
    res.send({
        params: req.params,
        blogId: req.params.blogId,
        url: {
            protocol: req.protocol,
            domain: req.hostname,
            method: req.method,
            url: req.url,
            path: req.path,
            params: req.params,
            body: req.body,
            query: req.query,
            header: req.headers
        }
    })
})
*/
// app.get('/', (req, res) => {
//     res.status(201).send({  //default 200

//         message: "tebrikler uye oldunuz"


//     })


// })

// app.post('/', (req, res) => { res.status(201).send({ "message": "post method request" }) })
// app.put('/', (req, res) => { res.status(202).send({ "message": "put method request" }) })
// app.delete('/', (req, res) => { res.status(202).send({ "message": "delete method request" }) })

//redirect sayfayi yonlendirme. sadece 300 lu kodlar

app.get("/", (req, res) => {
    res.redirect(301, "https://www.google.com")
})
// //show file content

// app.get('/', (req, res) => {

//     //res.status(201).send({ "message": "post method request" })

//     res.redirect(301, 'https://www.google.com')
// })


app.listen(PORT, HOST, () => console.log(`Server Runned http://${HOST}:${PORT}`)) //server olusturmak icin listen demek zorundayiz
