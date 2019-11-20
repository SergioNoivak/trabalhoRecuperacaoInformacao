// import * as fs from 'fs';
// import { LeitorDeArquivo } from '../code/src/controllers/LeitorDeArquivos';


// let f = async () => {

//     // var files = fs.readdirSync('C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/artigos');
//     // files = files.filter(file => file.endsWith('pdf'))
//     let leitor = new LeitorDeArquivo();
//     let files = [
//         "A jornada do empreendedor - O heroi da nossa Era.pdf",
//         "A Lógica do Jogo - Recriando Clássicos da História dos Videogames.pdf",
//         "A Web Mobile - Programe para um Mundo de Muitos Dispositivos.pdf",
//         "ABAP - O guia de Sobrevivencia do Profissional Moderno.pdf",
//         "Agile - Desenvolvimento de Software com Entregas Frequentes e Foco no Valor de Negócio.pdf",
//         "Amazon AWS - Descomplicando a computacao na nuvem.pdf",
//         "Aplicações mobile híbridas com Cordova e PhoneGap.pdf",
//         "Aplicações Java para a Web Com JDF e JPA .pdf",
//         "Arduino - Guia para colocar suas ideias em pratica.pdf",
//         "Arduino prático - 10 projetos para executar, aprender, modificar e dominar o mundo.pdf",
//         "Armazenando dados com Redis - Casa do Codigo.pdf",
//         "Asp.Net Mvc5 - Crie Aplicações Web Na Plataforma Microsoft .pdf",
//         "Azure - Coloque suas plataformas e servicos no cloud.pdf",
//         "Business Intelligence - Implementar do jeito certo e a custo zero.pdf",
//         "C# e Visual Studio - Desenvolvimento de aplicacoes desktop.pdf",
//         "Caixa de Ferramentas DevOps - Um guia para construcao, administracao e arquitetura de sistemas modern",
//         "CDI Integre as Dependencias E Contextos do Seu Codigo Java.pdf",
//         "CodeIgniter - Produtividade na criação de aplicações web em PHP.pdf",
//         "Coletanea Front-End - Uma Antologia da Comunidade Front End Brasileira.pdf",
//         "Começando com Linux - Comandos, serviços e administração.pdf",
//         "Componentes Reutilizaveis em Java Com Reflexoes e Anotacoes.pdf",
//         "Conhecendo o Adobe Photoshop CS6 .pdf",
//         "Construindo APIs REST com Node.js.pdf",
//         "Containers com Docker do Desenvolvimento a Producao.pdf",
//         "Controlando versões com Git e GitHub.pdf",
//         "Criando aplicações para o seu Windows Phone Edição Windows Runtime.pdf",
//         "Criando aplicações para o seu Windows Phone.pdf",
//         "CSS Eficiente.pdf",
//         "Cucumber e RSpec Construa aplicações Ruby com testes e especificações.pdf",
//         "Desbravando Java e Orientação a Objetos - Um Guia para o Iniciante da Linguagem.pdf",
//         "Desconstruindo a Web - As tecnologias por trás de uma requisição.pdf",
//         "Desenvolva jogos com HTML5 Canvas e JavaScript .pdf",
//         "Desenvolvimento de Jogos para Android - Explore sua imaginacao com o framework Cocos2D.pdf",
//         "Desenvolvimento de Jogos para iOS.pdf",
//         "Desenvolvimento efetivo na plataforma Microsoft .pdf",
//         "Desenvolvimento web com ASP.NET MVC - Casa do Codigo.pdf",
//         "Desenvolvimento web com PHP e MySQL - Casa do Codigo Edição Atualizada.pdf",
//         "Desenvolvimento web com PHP e MySQL - Casa do Codigo.pdf",
//         "Design Patterns com Java - Projeto orientado a objetos guiado por padrões.pdf",
//         "DevOps Na prática - Entrega de software confiável e automatizada.pdf",
//         "Direto ao ponto - Criando aplicacoes de forma enxuta.pdf",
//         "Dominando JavaScript Com Jquery .pdf",
//         "ECMAScript 6 - Entre de cabeça no futuro do JavaScript.pdf",
//         "Economia do acesso e os modelos de negócios baseados em compartilhamento, recorrência e assinaturas.pdf",
//         "Edicao e organizacao de fotos com Adobe Lightroom.pdf",
//         "Elasticsearch consumindo dados real time com ELK.pdf",
//         "Entrega contínua em Android - Como automatizar a distribuição de apps.pdf",
//         "Explorando APIs e bibliotecas Java JDBC, IO, Threads, JavaFX e mais.pdf",
//         "eXtreme Programming - Práticas para o dia a dia no desenvolvimento ágil de software.pdf",
//         "Falando de Grails Altíssima produtividade no desenvolvimento web.pdf",
//         "Fragmentos de um programador - Artigos e insights da carreira de um profissional.pdf",
//         "Gestão de produtos - Como aumentar as chances de sucesso do seu software.pdf",
//         "Google Android - crie aplicações para celulares e tablets.pdf",
//         "Google App Engine - Construindo Servicos na Nuvem.pdf",
//         "Guia da Startup Como startups e empresas estabelecidas podem criar produtos web rentáveis.pdf",
//         "Guia do Mestre Programador.pdf",
//         "Guia Front-End - O caminho das pedras para ser um dev front-end.pdf",
//         "HTML5 e CSS3 - Domine a web do futuro.pdf",
//         "Introdução e boas práticas em UX Design.pdf",
//         "Introdução à Arquitetura e Design de Software.pdf",
//         "Introdução à Computação - Da Lógica aos jogos com Ruby.pdf",
//         "Introdução à programação em C - Os primeiros passos de um desenvolvedor.pdf",
//         "iOS Programe para iPhone e iPad.pdf",
//         "iReport Crie relatorios praticos e elegantes.pdf",
//         "Java 8 Pratico Lambdas Streams e os Novos Recursos da Linguagem.pdf",
//         "Java e Orientações a Objetos.pdf",
//         "Java EE - Aproveite toda a plataforma para construir aplicacoes.pdf",
//         "Java SE 7 Programmer I - O guia para sua certificação Oracle Certified Associate.pdf",
//         "Java SE 8 Programmer I - O guia para sua certificação Oracle Certified Associate.pdf",
//         "JavaFX - Interfaces com qualidade para aplicacoes desktop.pdf",
//         "Jenkins -  Automatize tudo sem complicacoes.pdf",
//         "Jogos Android - Crie um game do zero usando classes nativas.pdf",
//         "Jogos em HTML5 Explore o mobile e física.pdf",
//         "JPA Eficaz - As melhores praticas de persistencia de dados em Java.pdf",
//         "jQuery Mobile - Desenvolva interfaces para multiplos dispositivos.pdf",
//         "JSF Eficaz - As melhores práticas para o desenvolvedor web Java.pdf",
//         "LEAN ENTERPRISE - Como empresas de alta performance inovam em escala.pdf",
//         "Logica de programacao - Crie seus primeiros programas usando javascript e html.pdf",
//         "Mean Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node.pdf",
//         "Meteor - Criando aplicações web real-time com JavaScript.pdf",
//         "Microsoft Kinect - Crie aplicações interativas com o Microsoft Kinect.pdf",
//         "MongoDB Construa novas aplicações com novas tecnologias.pdf",
//         "MundoJ - Java efetivo.pdf",
//         "MundoJ - Orientação a Objetos.pdf",
//         "MundoJ Segurança com Java.pdf",
//         "MySQL Comece com o principal banco de dados open source do mercado.pdf",
//         "Node.js - Aplicações web real-tome com Node.js.pdf",
//         "NoSQL - Como armazenar os dados de uma aplicação moderna.pdf",
//         "O Canivete suíço do desenvolvedor Node.pdf",
//         "O Mantra da Produtividade - Aprimore sua produtividade com técnicas de foco e organização pessoal.pdf",
//         "O Programador Apaixonado - Construindo uma carreira notavel em desenvolvimento de software.pdf",
//         "Ocaml - Programação funcional na prática.pdf",
//         "Octave - Seus primeiros passos na programacao cientifica.pdf",
//         "Orientacao a Objetos Aprenda Seus Conceitos e Suas Aplicabilidades de Forma Efetiva.pdf",
//         "Orientação a Objetos e SOLID para Ninjas Projetando classes flexíveis.pdf",
//         "PHP e Laravel - Crie aplicações web como um verdadeiro artesão.pdf",
//         "Play Framework - Java para web sem servlets e com diversao.pdf",
//         "PLSQL - Domine a linguagem do banco de dados Oracle.pdf",
//         "PostgreSQL - Banco de dados para aplicações web modernas.pdf",
//         "Programando em Go - Crie aplicações com a linguagem do Google.pdf",
//         "Protractor - Lições sobre testes end-to-end automatizados .pdf",
//         "Python - Escreva seus primeiros programas.pdf",
//         "Refatorando com padroes de projeto - Um guia em ruby.pdf",
//         "Rest - Construa APIs inteligentes de maneira simples.pdf",
//         "RSpec - Crie especificacoes executaveis em Ruby.pdf",
//         "Ruby - Aprenda a programar na linguagem mais divertida.pdf",
//         "Ruby on Rails - coloque sua aplicacao web nos trilhos.pdf",
//         "Sass - Aprendendo pré-processadores CSS.pdf",
//         "Scala - Como escalar sua produtividade.pdf",
//         "Scrum 360 Um guia completo e prático de agilidade.pdf",
//         "Scrum Gestão ágil para projetos de sucesso.pdf",
//         "Seguranca em aplicacoes Web.pdf",
//         "SEO Prático Seu site na primeira página das buscas.pdf",
//         "SOA aplicado - Integrando com web services e além.pdf",
//         "Spring MVC Domine o principal framework web Java.pdf",
//         "SQL - Uma abordagem para bancos de dados Oracle.pdf",
//         "Swift Programe para iPhone e iPad.pdf",
//         "Test-Driven Development - Teste e Design no Mundo Real com .Net.pdf",
//         "Test-Driven Development - Teste e Design no Mundo Real com PHP.pdf",
//         "Test-Driven Development - Teste e Design no Mundo Real com Ruby.pdf",
//         "Test-Driven Development - Teste e Design no Mundo Real.pdf",
//         "teste.pdf",
//         "Testes Automatizados de software - Um guia prático.pdf",
//         "Turbine seu CSS - folhas de estilo inteligentes com Sass.pdf",
//         "Vire o jogo com Spring Framework.pdf",
//         "Vraptor - Desenvolvimento Agil para web com Java.pdf",
//         "Web Design Responsivo - Páginas adaptáveis para todos os dispositivos.pdf",
//         "Web Services REST com ASP .NET Web API e Windows Azure.pdf",
//         "Windows Server 2012 R2 Estudo dirigido para MCSA prova 70-410 .pdf",
//         "Xamarin Forms - Desenvolvimento de aplicacoes moveis multiplataforma.pdf",
//         "Zend Certified Engineer Descomplicando a Certificação PHP.pdf"

// ]

//     console.log("dd")
//     let promisses = [];
//     for (let i = 0; i < files.length; i++) {
//         promisses[i] = leitor.tratarPDF("C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/artigos/" + files[i],
//             [
                
//             ]
//             , "C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/artigos/metadata/" + files[i] + ".txt",
            
            
//             )            
//         }

//         promisses.forEach((promisse:Promise<any>) => {
//             promisse.then(()=>{});
//         });






// }


// f();