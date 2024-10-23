import express from 'express'
import cors from 'cors'
import { router } from '../routes/route.js'
import request from 'supertest'
import {jest} from '@jest/globals';

const app = express()

app.use(cors()) //todo: provide approved domain options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

request(app)

describe('routing tests', () => {
    it('should return status 200 from index', (done) => {
        request(app).get('/')
        .expect(200)

        done()
    })

    it('should return status 200 from id/:id', (done) => {
        request(app).get('/id/hk0001')
        .expect(200)

        done()
    })
})

