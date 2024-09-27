using { coule as my } from '../db/schema.cds';

@path : '/service/couleConsumerService'
service couleConsumerService
{
    entity Bar as
        projection on my.Bar;
}

annotate couleConsumerService with @requires :
[
    'authenticated-user'
];
