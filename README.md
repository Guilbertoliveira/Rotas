Precisaremos ter um contexto aonde o componente ```<BrowserRouter>``` abrangerá todas as futuras paginas


Bem a primeira coisa que percebi é que nosso aninhamento necessitará ter sempre um outlet para conseguir aninhar um dentro do outro, caso essa seja a ideia. No caso o pai sempre terá que colocar um ```<outlet>``` onde o filho será renderizado dentro dele.

<h3>Primeira opção</h3>

```
import { Outlet } from 'react-router-dom';

export function Home (){
   return (
      <main>
         <Banner></Banner>
         <Outlet></Outlet>
      </main>
   )
}

```



```

<BrowserRouter>
   <Menu />
      <Routes>
         <Route path="/home" element={<Home />} >
            <Route path="filho" element={<h1>Eu sou filho</h1>} />
         </Route>
      </Routes>
</BrowserRouter >

```

<h3>Segunda opção</h2>
Caso não queiramos esse tipo de organização poderemos fazer 


```
<BrowserRouter>
   <Menu />
      <Routes>
         <Route path="/home" element={<Home />} ></Route>
         <Route path="filho" element={<h1>Eu sou filho</h1>} />
      </Routes>
</BrowserRouter >

```

<h2> Navegação após click </h2>

Caso utilizarmos botões a melhor forma para ir ate a rota especificada utilizaremos o Link

```

<Link to="/home">Home</Link>

```


<h2> Navegação após logica </h2>
Caso nossa navegação seja feito em alguma logica utilizaremos o useNavigate (caso estejamos utilizando v6)

```

import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/outra-rota');
  };

  return <button onClick={handleClick}>Ir para outra rota</button>;
};

```

Caso utilizarmos a versão 5 ou anterior podemos utilizar, useHistory

```

import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/outra-rota');
  };

  return <button onClick={handleClick}>Ir para outra rota</button>;
};

```

<h2> Navegação redirecionamento automatico </h2>

```

import { Redirect } from 'react-router-dom';

const MyComponent = () => {
  const shouldRedirect = true;

  return shouldRedirect ? <Redirect to="/outra-rota" /> : <div>Conteúdo da página</div>;
};

```

<h2>Themes</h2>

<h3> Adicionando um thema para englobar diversas rotas que tem a mesma interface padrão </h3>

- Pra isso, criei uma pasta com o nome de `themes` e dentro dela uma página padrão que nela existe um `<Outlet>`.


<h2>Paginas dinamicas</h2>

- Utiliza o Link um pouco diferente passando o id
- Em questão de paginas dinamicas percebi a necessidade de utilizar o `useParams` para pegar a url, o retorno do params é um objeto
- Na rota será necessario passar como uma rota dinamica com o `id` 

<h4>nas rotas ficaria assim</h4>

```

<Route path="/posts" element={<Posts />} >
   <Route path=":id" element={<Post />} />
</Route>

```

<h4> No menu ficaria assim </h4>

```

<ul>
  {listaPost.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  ))}
</ul>

```

<h3> Projeto rodando </h3>
<a href="https://rotas-nine.vercel.app/">Link Vercel</a>

