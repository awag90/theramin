select * from specialisation s ;
-- delete from specialisation 
insert into specialisation (id, name, createdAt, updatedAt)
values (1, 'Physiotherapie', UNIX_TIMESTAMP(now()), UNIX_TIMESTAMP(now()));

insert into specialisation (id, name, createdAt, updatedAt)
values (2, 'Ergotherapie', UNIX_TIMESTAMP(now()), UNIX_TIMESTAMP(now()));

insert into specialisation (id, name, createdAt, updatedAt)
values (3, 'Logopädie', UNIX_TIMESTAMP(now()), UNIX_TIMESTAMP(now()));

insert into specialisation (id, name, createdAt, updatedAt)
values (4, 'Psychotherapie', UNIX_TIMESTAMP(now()), UNIX_TIMESTAMP(now()));