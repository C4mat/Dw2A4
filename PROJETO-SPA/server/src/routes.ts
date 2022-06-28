import express from 'express';
import nodemailer from 'nodemailer';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';


export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
    const { type, email, comment, screenshot, date } = req.body;



    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository, nodemailerMailAdapter
    )
    await submitFeedbackUseCase.execute({

        type,
        email,
        comment,
        screenshot,



    });



    return res.status(201).send();

});