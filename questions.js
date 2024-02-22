let questions = [
    // Perguntas nível fácil
    {
        question: 'Em qual elemento HTML nós colocamos o JavaScript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1
    },
    {
        question: 'Onde é o local certo de colocar o JavaScript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo JavaScript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
    },
    {
        question: 'Um arquivo JavaScript externo precisa ter a tag script',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alert box?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
    },
    {
        question: 'Como você cria uma função no JavaScript?',
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como chamar uma função chamada "minhaFuncao"?',
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como escrever uma condicional IF no JavaScript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
    },
    {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
    },
    {
        question: 'Como o loop while começa?',
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
    },

    // Perguntas nível médio
    {
        question: 'Qual a diferença entre "==" e "==="?',
        options: [
            'O "==" leva em consideração o tipo de dado',
            'O "===" leva em consideração o tipo de dado',
            'Não possuem diferenças'
        ],
        answer: 1
    },
    {
        question: 'Qual método JavaScript é usado para remover o último elemento de um array?',
        options: [
            'pop()',
            'remove()',
            'splice()'
        ],
        answer: 0
    },
    {
        question: 'O que o método map() faz em JavaScript?',
        options: [
            'Aplica uma função a cada elemento de um array e retorna um novo array com os resultados',
            'Remove elementos duplicados de um array',
            'Ordena os elementos de um array em ordem alfabética'
        ],
        answer: 0
    },
    {
        question: 'O que é "hoisting" em JavaScript?',
        options: [
            'É o processo de declaração de uma variável ou função para cima do seu escopo atual',
            'É uma função que lança exceções em JavaScript',
            'É uma técnica de criptografia de dados'
        ],
        answer: 0
    },
    {
        question: 'Qual a diferença entre let e var em JavaScript?',
        options: [
            'let declara uma variável local ao bloco onde ela é definida, enquanto var declara uma variável global',
            'let é usado para declaração de variáveis em loops, enquanto var é usado em declarações normais',
            'let é uma abreviação de var, e ambos são usados para declarar variáveis'
        ],
        answer: 0
    },
    {
        question: 'O que é uma "closure" em JavaScript?',
        options: [
            'Uma função que tem acesso ao escopo de outra função exterior (pai) mesmo após a função pai ter sido executada',
            'Um método usado para fechar janelas pop-up em navegadores',
            'Um erro de sintaxe comum em loops'
        ],
        answer: 0
    },
    {
        question: 'Qual é o resultado da expressão 5 + "5" em JavaScript?',
        options: [
            '"10"',
            '10',
            'Erro de tipo'
        ],
        answer: 0
    },
    {
        question: 'O que é "callback hell" em JavaScript?',
        options: [
            'Um termo usado para descrever a situação em que várias funções de callback são aninhadas de forma excessiva, tornando o código difícil de ler e dar manutenção',
            'Um tipo de erro de sintaxe comum em loops',
            'Um método para chamar uma função de retorno de chamada em um intervalo específico'
        ],
        answer: 0
    },
    {
        question: 'Qual a função do método forEach() em JavaScript?',
        options: [
            'Executa uma função para cada elemento de um array',
            'Remove elementos de um array com base em uma condição especificada',
            'Ordena os elementos de um array em ordem alfabética'
        ],
        answer: 0
    },
    //Perguntas difíceis
    {
        question: 'Qual é o resultado da expressão "typeoff null", em JS?',
        options: [
            'null',
            'undefined',
            'object'
        ],
        answer: 2
    },
    {
        question: 'Como você explicaria o conceito de "closures" em JavaScript?',
        options: [
            'Closures são blocos de código que são executados assincronamente em segundo plano',
            'Closures são funções que capturam variáveis de um escopo externo em que foram definidas, mesmo que esse escopo externo não exista mais',
            'Closures são estruturas de dados para armazenar múltiplos valores em JavaScript'
        ],
        answer: 1
    },
    {
        question: 'O que é "prototype" em JavaScript?',
        options: [
            'Prototype é uma função que cria novos objetos com base em um protótipo existente',
            'Prototype é uma técnica para ocultar a implementação interna de um objeto em JavaScript',
            'Prototype é um mecanismo pelo qual os objetos JavaScript herdam recursos uns dos outros'
        ],
        answer: 2
    },
    {
        question: 'Qual é o resultado da expressão `[] == ![]` em JavaScript?',
        options: [
            'true',
            'false',
            'Isso lança um erro de sintaxe'
        ],
        answer: 0
    },
    {
        question: 'Por que usar a palavra-chave `let` é preferível a `var` em muitos casos?',
        options: [
            '`let` cria uma variável com escopo de bloco, enquanto `var` tem escopo de função',
            '`let` tem uma performance melhor em relação a `var`',
            '`let` é uma palavra-chave mais moderna e recomendada pelos padrões ECMAScript mais recentes'
        ],
        answer: 0
    },
    {
        question: 'O que é o conceito de "promises" em JavaScript?',
        options: [
            'Promises são objetos usados para representar o resultado de uma operação assíncrona eventualmente assíncrona',
            'Promises são funções que são executadas após a conclusão de uma operação assíncrona',
            'Promises são callbacks usados para lidar com exceções em operações assíncronas'
        ],
        answer: 0
    },
    {
        question: 'Como você lidaria com a execução paralela de múltiplas operações assíncronas em JavaScript?',
        options: [
            'Usando callbacks aninhados para garantir que as operações sejam executadas em paralelo',
            'Usando `Promise.all()` para esperar que todas as promessas sejam resolvidas antes de continuar',
            'Usando uma função `parallel()` específica do JavaScript para executar operações em paralelo'
        ],
        answer: 1
    },
    {
        question: 'O que é "currying" em JavaScript?',
        options: [
            'Currying é o processo de transformar uma função com múltiplos argumentos em uma sequência de funções com um único argumento',
            'Currying é o processo de compactar código JavaScript para otimizar a performance',
            'Currying é um conceito relacionado à criptografia de dados em JavaScript'
        ],
        answer: 0
    },
    {
        question: 'O que é "destructuring" em JavaScript?',
        options: [
            'Destructuring é uma função do JavaScript para destruir objetos que não são mais necessários',
            'Destructuring é uma medida de segurança implementada em ambientes de execução de código JavaScript',
            'Destructuring é uma técnica que permite extrair dados de arrays e objetos usando uma sintaxe mais concisa',
        ],
        answer: 2
    },
    {
        question: 'Qual é a diferença entre as palavras-chave `function` e `=>` para definir funções em JavaScript?',
        options: [
            '`=>` cria funções de seta (arrow functions) com escopo léxico, enquanto `function` cria funções com escopo dinâmico',
            '`=>` é uma abreviação de `function` e pode ser usado de forma intercambiável',
            '`function` é uma palavra-chave mais antiga e `=>` é uma forma mais moderna e concisa de definir funções em JavaScript'
        ],
        answer: 0
    },
    {
        question: 'Qual é a diferença entre null e undefined em JavaScript?',
        options: [
            'Null é um valor que indica a ausência de um objeto, enquanto undefined é um valor primitivo que indica que uma variável não foi atribuída',
            'Não há diferença entre eles, ambos representam a ausência de valor',
            'Null representa a ausência intencional de qualquer valor em JavaScript, enquanto undefined é atribuído automaticamente a variáveis que não foram inicializadas',
        ],
        answer: 2
    }
];

