namespace coule;

entity Foo
{
    key ID : UUID;
    messageCount : Integer;
}

entity Bar
{
    key ID : UUID;
    message : String(100);
}
