"use strict"

const express = require('express')
const router = new express.Router()
const chatGpt = require('./chatGpt')
const tts = require('./tts')


router.post('/', async function (req, res, next) {
  const { msg } = req.body
  try{
    const txtResponse = await chatGpt(msg)
    const voiceResponse = await tts(txtResponse.message.content)
    return res.json({txtResponse, voiceResponse})
  }
  catch (err) {
      return next(err)
  }
})

/* textResponse.message.content */
module.exports = router