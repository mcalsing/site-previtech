"use client";
import React from 'react';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('python', python);

const CodeBlock = ({ language, children }) => {
  // Highlight the code using the provided language
  const highlightedCode = hljs.highlight(children, { language }).value;

  // Render the highlighted code within a pre tag
  return (
    <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />
  );
};

export default function About() {
  const code = `
  from sklearn.ensemble import RandomForestClassifier

  modelo_rf = RandomForestClassifier(max_depth = 5, random_state = 5)
  modelo_rf.fit(x_treino, y_treino)
  
  print(f'Acurácia de treino: {modelo_rf.score(x_treino, y_treino)}')
  print(f'Acurácia de validação: {modelo_rf.score(x_val, y_val)}')`;

  return (
    <main className='lg:pl-28 lg:pr-28 pt-12 2xl:pl-64 2xl:pr-64 md:text-xl text-sm text-slate-300 flex flex-col items-center'>
      <h1 className='text-5xl pb-10'>Construindo o modelo</h1>
      <div className='flex flex-col bg-sky-950'>
        <div class="indent-5 flex flex-col">
          <p className='break-all'>So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers
          a strange fffffffff                ffffffcalm came over me. I do           
          n't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that moment,
          I <em>was</em> a marine biologist.</p>   


          <p>A strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that moment,
          I <em>was</em> a marine biologist.</p>

          adfljadflkajsdflkajsdflçaksdjflçaskdjflçadkjf
          <p>asdfasdfasdf</p>
        </div>
        <div className='bg-cyan-900 text-slate-200 w-full pb-8 rounded-sm pl-5 mb-8 mt-8 relative'>
          <span className='absolute -top-8 right-0 border-4 border-cyan-900 text-sm rounded-sm p-1 hover:bg-cyan-900'>Block of code</span>
          <CodeBlock language="python">{code}</CodeBlock>
        </div>
        <p>A strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that moment,
          I <em>was</em> a marine biologist.</p>

        adfljadflkajsdflkajsdflçaksdjflçaskdjflçadkjf
        <p>asdfasdfasdf</p>
        <div className='bg-cyan-900 text-slate-200 w-full pb-8 rounded-sm pl-5 mb-8 mt-8 relative'>
          <span className='absolute -top-8 right-0 border-4 border-cyan-900 text-sm rounded-sm p-1 hover:bg-cyan-900'>Block of code</span>
          <CodeBlock language="python">{code}</CodeBlock>
        </div>
      </div>
    </main>
  );
}