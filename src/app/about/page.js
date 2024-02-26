"use client";


export default function About() {
  return (
    <main className="lg:pl-28 lg:pr-28 pt-12 2xl:pl-64 2xl:pr-64 md:text-xl text-sm text-slate-300 flex flex-col items-center">
      <h1 className="text-5xl pb-10">Introdução</h1>
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
        <h1 className="text-5xl pb-10 pt-10 flex flex-col items-center">Inteligência Artificial</h1>
        <p>
          A Inteligência Artificial (IA) tem se destacado como uma das áreas de maior crescimento e visibilidade nos últimos anos. É um campo de estudo amplo que abrange
          diversas áreas do conhecimento, tanto práticas quanto teóricas, incluindo a ciência da computação, a ciência cognitiva, e Machine Learning.
        </p>
        <p className="p-2"></p>
        <p>
          O Machine Learning (ML), como uma subárea da inteligência artificial, se concentra no desenvolvimento de algoritmos que são utilizados no computador para realizar
          tarefas sem a necessidade de programar explicitamente as regras que serão utilizadas. Esses algoritmos baseiam suas decisões a partir de dados com o objetivo de 
          compreender e identificar o padrão existente nesses dados, para então utilizar esse conhecimento na realização das predições.
        </p>
        <h1 className="text-5xl pb-10 pt-10 flex flex-col items-center">Etapas da construção do Modelo</h1>
        <p>
          A primeira etapa de um projeto de ML é a extração ou coleta de dados. Os dados são essenciais e podem ser considerados a matéria-prima dos algoritmos.
          A quantidade e qualidade desses dados têm um impacto muito grande no aprendizado dos modelos. Com poucos dados, o modelo pode não ter informações suficientes
          para aprender. Com dados de pouca qualidade, o modelo pode não conseguir diferenciar bem o padrão dos dados ou compreender o padrão de forma diferente do que
          ocorre com os dados do mundo real.
        </p>
        <p className="p-2"></p>
        <p>
          Além dos dados, há algo que se torna indispensável nos projetos de Machine Learning, que são os algoritmos. Não precisamos criar os algoritmos do zero, eles
          são disponibilizados de forma gratuita a partir de uma biblioteca da linguagem Python, o Scikit-Learn. Ela oferece não somente uma ampla variedade de algoritmos,
          mas também ferramentas de pré-processamento dos dados, análise e avaliação de modelos. Para o desenvolvimento do projeto utilizamos o algoritmo Decision Tree 
          Classifier, um método de aprendizagem supervisionado usado para classificação, onde o conjunto de dados está rotulado, isto é, base de dados com registros
          históricos contendo a resposta correta. Para então, a partir dessa resposta e das características dos dados, o algoritmo ser capaz de traçar uma regra para se
          chegar até a resposta que poderá ser usada posteriormente em novos dados, no intuito de fazer uma predição.
        </p>
        <p className="p-2"></p>
        <p>
          A característica principal da classificação se dá pelo tipo do dado presente na resposta, que precisa ser do tipo categórica. Um dado do tipo categórico é aquele
          que possui diferentes classes ou categorias. Como exemplos de aplicações de classificação com Machine Learning, temos:
        </p>
        <p className="p-1"></p>
        <ul>
          <li>⏺ Filtragem de e-mails spams</li>
          <li>⏺ Diagnósticos médicos</li>
          <li>⏺ Detecção de fraudes bancárias</li>
        </ul>
        <p className="p-2"></p>
      </div>
    </main>
  );
}