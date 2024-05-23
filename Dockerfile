FROM public.ecr.aws/lambda/nodejs:20

CMD [ "dist/lambda.handler" ]
