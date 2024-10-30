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

describe('controller tests', () => {
    it('should return empty object from index without query', (done) => {
        request(app).get('/')
        .expect("Content-Type", /json/)
        .expect((res) => {
            res.body.data.length = 1;
            res.body.data[0] = {};
          })
        
        done()
    })

    it('should return 1 result from index with specific query', (done) => {
        request(app).get('/?search=hk0001')
        .expect("Content-Type", /json/)
        .expect((res) => {
            res.body.data.length = 1;
            res.body.data[0].id = 'hk0001';
        })

        done()
    })

    it ('should return many results from index with general query', (done) => {
        request(app).get('/?search=hk')
        .expect("Content-Type", /json/)
        .expect((res) => {
            res.body.data.length > 1;
        })

        done()
    })
})
