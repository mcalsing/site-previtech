"use client";
import Image from "next/image";

export default function About() {
  return (
    <main className="lg:pl-28 lg:pr-28 pt-12 2xl:pl-64 2xl:pr-64 md:text-xl text-sm text-slate-300 flex flex-col items-center">
      <h1 className="lg:text-5xl md:text-3xl text-2xl pb-10">Introdução</h1>
      <div className="flex flex-col indent-6">
        <p>
          O objetivo desse projeto é criar um modelo utilizando machine learing que seja capaz de identificar corretamente o perfil de clientes que dão Churn para
          que, dessa forma, a equipe de marketing possa trabalhar em uma campanha de fidelização, ou fornecer incentivos a permanência desses clientes. O churn
          é uma métrica que indica os clientes que cancelam o serviço em determinado período de tempo, neste caso os clientes que cancelariam a conta no banco.
        </p>   
        <p className="p-2"></p>
        <p>
          Dados de clientes de um banco foram disponibilizados em um dataset no Kaggle. O dataset compõe dados de score de crédito, país de origem, idade, sexo biológico,
          anos de cliente, saldo em conta, número de produtos adquiridos, salário estimado e dados booleanos se possuem cartão de crédito e se é membro ativo. Cada cliente
          foi rotulado em clientes que deram churn (cancelaram suas contas) (rótulo = 1) e não deram churn (não cancelaram suas contas) (rótulo = 0).
        </p>
        <i><a href='//github.com/mcalsing/predict-churn-clients/blob/main/churn.csv' className="hover:text-sky-700" target="_blank">Base de dados</a></i>
        <h1 className="lg:text-5xl md:text-3xl text-2xl pb-10 pt-10 flex flex-col items-center">Inteligência Artificial</h1>
        <p>
          A Inteligência Artificial (IA) tem se destacado como uma das áreas de maior crescimento e visibilidade nos últimos anos. É um campo de estudo amplo que abrange
          diversas áreas do conhecimento, tanto práticas quanto teóricas, incluindo a ciência da computação, a ciência cognitiva e Machine Learning.
        </p>
        <p className="p-2"></p>
        <p>
          Machine Learning (ML), como uma subárea da inteligência artificial, se concentra no desenvolvimento de algoritmos que são utilizados no computador para realizar
          tarefas sem a necessidade de programar explicitamente as regras que serão utilizadas. Esses algoritmos baseiam suas decisões a partir de dados com o objetivo de 
          compreender e identificar o padrão existente nesses dados, para então utilizar esse conhecimento na realização das predições.
        </p>
        <h1 className="lg:text-5xl md:text-3xl text-2xl pb-10 pt-10 flex flex-col items-center">Conjunto de Dados</h1>
        <p>
          A primeira etapa de um projeto de ML é a extração ou coleta de dados. Os dados são essenciais e podem ser considerados a matéria-prima dos algoritmos.
          A quantidade e qualidade desses dados têm um impacto muito grande no aprendizado dos modelos. Com poucos dados, o modelo pode não ter informações suficientes
          para aprender. Com dados de pouca qualidade, o modelo pode não conseguir diferenciar bem o padrão dos dados ou compreender o padrão de forma diferente do que
          ocorre com os dados do mundo real.
        </p>
        <h1 className="lg:text-5xl md:text-3xl text-2xl pb-10 pt-10 flex flex-col items-center">Validando o Modelo</h1>
        <p>
          Avaliar os modelos com base nos mesmos dados usados no treinamento não é interessante. É preciso que a avaliação seja feita em dados independentes.
          Avaliar o modelo nos próprios dados de treinamento seria o análogo a entregar uma prova com as questões e o gabarito para uma pessoa e no momento de
          avaliá-la novamente, entregar uma prova com as mesmas questões e alternativas. É esperado que essa pessoa se sairá bem por já ter visto as respostas
          e ter decorado o resultado.
        </p>
        <p className="p-2"></p>
        <p>
          Então, precisamos fazer uma validação de forma mais coerente. Passando novos dados para o modelo fazer a classificação. E nesses dados, já conheceremos
          a resposta, e poderemos comparar a resposta que o modelo deu para esses dados com as respostas reais e verificar se, de fato, está acertando. Dessa maneira,
          entenderemos se o modelo está aprendendo, ou seja, se está generalizando para novos dados ou não.
        </p>
        <p className="p-2"></p>
        <p>
        Para realizar essa tarefa de validação, podemos dividir nossos dados em duas partes: uma parte de treinamento e uma parte de teste. Ainda podemos utilizar outra
        estratégia, em vez de dividir nossos dados em apenas duas partes, vamos dividi-los em três: treinamento, validação e teste.
        </p>
        <p className="p-2"></p>
        <p>
          Na primeira, onde temos apenas treino e teste, vamos treinar o modelo na base de dados de treinamento e avaliar na base de dados de teste, que são dados que não
          foram usados no treinamento, sendo assim, verificaremos se o modelo está fazendo a generalização.
        </p>
        <p className="p-2"></p>
        <p>
          Na segunda estratégia, que separa entre treino, validação e teste, deixamos uma parte de teste separada durante todo o projeto e fazemos a validação do modelo no
          conjunto de dados de validação.
        </p>
        <p className="p-1"></p>
        <ul>
          <li>⏺ O conjunto de treinamento é utilizado para treinar o modelo. O modelo vai entender o padrão dos dados a partir desse conjunto de dados.</li>
          <li>⏺ O conjunto de validação é utilizado para avaliar o desempenho de diferentes modelos, com dados novos que não foram usados no treinamento do modelo.</li>
          <li>⏺ O conjunto de teste fica separado dos demais desde o momento inicial para simular os dados do mundo real. Ele não é utilizado em nenhum momento no 
          treinamento e nem na validação, servindo como uma estimativa da capacidade do modelo escolhido de generalizar e prever novos dados.</li>
        </ul>
        <p className="p-4"></p>
        <div className="flex flex-col items-center">
          <Image src="/separacao_triplav2.png" alt="separacacaodados" width={600} height={50} className=""></Image>
        </div>
        <h1 className="lg:text-5xl md:text-3xl text-2xl pb-10 pt-10 flex flex-col items-center">Algoritmo de Machine Learning</h1>
        <p>
          Além dos dados, há algo que se torna indispensável nos projetos de Machine Learning, que são os algoritmos. Não precisamos criá-los do zero, eles
          são disponibilizados de forma gratuita a partir de uma biblioteca da linguagem Python, o Scikit-Learn. Ela oferece não somente uma ampla variedade de algoritmos,
          mas também ferramentas de pré-processamento dos dados, análise e avaliação de modelos. Para o desenvolvimento do projeto utilizamos o algoritmo Decision Tree 
          Classifier, um método de aprendizagem supervisionado usado para classificação, onde o conjunto de dados está rotulado, isto é, base de dados com registros
          históricos contendo a resposta correta. Para então, a partir dessa resposta e das características dos dados, o algoritmo ser capaz de traçar uma regra para se
          chegar até a resposta que poderá ser usada posteriormente em novos dados, no intuito de fazer uma predição. Outros exemplos de aplicações de classificação com Machine Learning, temos:
        </p>
        <p className="p-1"></p>
        <ul>
          <li>⏺ Filtragem de e-mails spams</li>
          <li>⏺ Diagnósticos médicos</li>
          <li>⏺ Detecção de fraudes bancárias</li>
        </ul>
        <h1 className="lg:text-5xl md:text-3xl text-2xl pb-10 pt-10 flex flex-col items-center">Conclusão</h1>
        <p>
          Após a seleção dos dados, sepadação da base de dados e escolha do algoritmo, por fim, podemos exportar o modelo criado para utilizar em um ambiente externo.
          Para isso, vamos armazenar o modelo em um arquivo utilizando a biblioteca Pickle, para então, aplicá-lo em um novo dado.
        </p>
      </div>
    </main>
  );
}