using { coule as my } from '../db/schema.cds';

@path : '/service/couleService'
service couleService
{
    entity Foo as
        projection on my.Foo;

    action couleFunc
    (
        something : String(100)
    )
    returns String;

    event bingo
    {
        something : String;
    }
}

annotate couleService with @requires :
[
    'authenticated-user'
];
