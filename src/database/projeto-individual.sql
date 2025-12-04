create database projetoIndv;
use projetoIndv;

create table usuario (
	idUser int primary key auto_increment,
    nome  varchar(100) not null,
    nickname varchar(50) not null unique,
    email varchar(100) not null unique,
    constraint chkEmail check (email like '%@%'),
	senha varchar(50),
    );
    
create table foto (
	idFoto int primary key auto_increment,
    url varchar(255),
    descricao varchar(200),
    dtPostagem timestamp default current_timestamp,
    usuario_idUser int,
    constraint fkUsuarioFoto
		foreign key (usuario_idUser) references usuario(idUser)    
    );
    
create table comentario (
	idComent int primary key auto_increment,
    comentario varchar(150),
    dtComentario timestamp default current_timestamp,
    usuario_idUser int,
    constraint fkComentarioUsuario
		foreign key (usuario_idUser) references usuario(idUser),
	foto_idFoto int,
    constraint fkComentarioFoto
		foreign key (foto_idFoto) references foto(idFoto)
    );
    
create table curtida (
	idCurtida int primary key auto_increment,
	usuario_idUser int,
    foto_idFoto int,
    dtCurtida timestamp default current_timestamp,
	constraint fkCurtidaUsuario
		foreign key(usuario_idUser) references usuario(idUser),
	constraint fkCurtidaFoto
		foreign key(foto_idFoto) references foto(idFoto)
    );
alter table curtida add constraint unqUserFoto unique(usuario_idUser, foto_idFoto);
    
select * from usuario;

select * from foto;
select url, descricao, usuario_idUser from foto;

select * from comentario;
select u.nickname, c.comentario, c.dtComentario 
from comentario c join usuario u 
	on c.usuario_idUser = u.idUser;
select u.nickname, c.comentario, c.usuario_idUser, c.foto_idFoto
FROM usuario u join  comentario c 
	ON u.idUser = c.usuario_idUser
WHERE foto_idFoto = 1
ORDER BY dtComentario DESC;

select * from curtida;

select * from perfil;

-- Quantidade total de curtidas em uma foto
select count(usuario_idUser) from curtida where foto_idFoto = 1;

-- Quantidade total de curtidas de todas as fotos de um usuario
select count(cur.usuario_idUser) as 'Total Curtida' from foto f 
left join curtida cur on cur.foto_idFoto = f.idFoto 
where f.usuario_idUser = 1;

-- Data que teve pelo menos uma curtida(exemplo descartado)
select distinct(concat(day(dtCurtida), '/', month(dtCurtida))) as 'Data da Curtida' from curtida;


-- Data curtidas recebidas no dia
select date(cur.dtCurtida) as 'Data',
    count(cur.idCurtida) as 'Curtidas'
from curtida cur
join foto f on f.idFoto = cur.foto_idFoto
where f.usuario_idUser = 1
group by date(cur.dtCurtida)
order by date(cur.dtCurtida);

-- Selecionar total de fotos de um usuario
select count(idFoto) from foto where usuario_idUser = 1;

-- selecionar o dia com mais curtidas
select date_format(cur.dtCurtida, '%d/%m') as dia, 
count(cur.idCurtida) as total
from curtida cur join foto f on f.idFoto = cur.foto_idFoto
where f.usuario_idUser = 1
group by date_format(cur.dtCurtida, '%d/%m')
order by total desc
limit 1;


select * from foto;
select * from usuario;
select * from curtida;