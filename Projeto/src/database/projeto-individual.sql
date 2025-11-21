create database projetoIndv;
use projetoIndv;

create table usuario (
	idUser int primary key auto_increment,
    nome  varchar(100) not null,
    nickname varchar(50) not null unique,
    email varchar(100) not null unique,
    constraint chkEmail check (email like '%@%'),
	senha varchar(50),
    perfil_idPerfil int,
    constraint fkUsuarioPerfil
		foreign key(perfil_idPerfil) references perfil(idPerfil)
    );
    
create table foto (
	idFoto int primary key auto_increment,
    url varchar(255),
    descricao varchar(200),
    dtPostagem datetime,
    usuario_idUser int,
    constraint fkUsuarioFoto
		foreign key (usuario_idUser) references usuario(idUser)    
    );
    
create table comentario (
	idComent int primary key auto_increment,
    comentario varchar(150),
    dtComentario date,
    usuario_idUser int,
    constraint fkComentarioUsuario
		foreign key (usuario_idUser) references usuario(idUser),
	foto_idFoto int,
    constraint fkComentarioFoto
		foreign key (foto_idFoto) references foto(idFoto)
    );
    
create table curtida (
	usuario_idUser int,
    foto_idFoto int,
    constraint pkUserFoto
		primary key (usuario_idUser, foto_idFoto),
	constraint fkCurtidaUsuario
		foreign key(usuario_idUser) references usuario(idUser),
	constraint fkCurtidaFoto
		foreign key(foto_idFoto) references foto(idFoto)
    );
    
create table perfil (
	idPerfil int primary key, 
    avatar varchar(50)
    );
    
show tables;
desc comentario;
select * from usuario;

select * from foto;

select * from comentario;

select * from curtida;

select * from perfil;