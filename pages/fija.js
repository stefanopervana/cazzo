export default () => (
  <div>
   <style jsx>{`
                .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 900px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                        h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    p, li, ol, ul{
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 20px


                    }

                    

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>

<div className="col-md-6">
  <div><span>Friday, October 28th 2016 (216d ago)</span></div>


<h1><a href="#">Static Hosting using Now</a></h1>

<div>Leo Lamprecht (<a href="http://twitter.com/notquiteleo">@notquiteleo</a>)</div>

<aside>

<p className="it">Para documentación actualizada sobre los temas discutidos aquí, por favor referirse a:</p>

<p className="p">For up to date documentation on the topics discussed here, please refer to:</p>


<ul>
<li><a href="/docs/examples/static">Docs › Features › Static Website</a></li>
<li><a href="/docs/deployment-types/static">Docs Deployment Types › Static</a>
</li>
</ul>
</aside>


<p className="it">Hace unos meses, hemos lanzado <a href="/blog/serve-it-now">now servir</a> para simplificar alojamiento estática en la parte superior de <a href="/now"><span>now</span></a>. <a  href="/blog/serve-it-now" ></a> <a href="/now"></a></p>

<p className="p">A few months ago, we released <a href="/blog/serve-it-now" >now-serve</a>for simplifying static hosting on top of <a href="/now"><span>now</span></a>.</p>


<p class="it">Nuestros clientes les encanta. Además de la implementación de las API de back-end, muchos de ustedes tienden a desplegar varias páginas web estáticas que se comunican con ellos.</p>

<p className="p">Our customers love it. In addition to deploying backend APIs, many of you tend to deploy several static websites that communicate with them.</p>

<p className="it">Debido a esto, decidimos mover la característica aún más cerca de nuestros usuarios - con el fin de hacer que la creación de un proyecto de este tipo aún más fácil:</p>

<p className="p">Because of this, we decided to move the feature even closer to our users - in order to make setting up such a project even easier:</p>




<h2><span><a href="#what's-new">What's New?</a></span></h2>


<p className="it">Desde la versión <a target="_blank" href="https://github.com/zeit/now/releases/tag/0.27.0" >0.27.0</a> , el <a href="/now"><span>now</span></a> CLI determinará automáticamente si su proyecto es una aplicación dinámica o estática de la naturaleza. Si éste es el caso, una implementación estática se activará y sus archivos se servirá usando <a href="https://github.com/zeit/serve">servir</a> en el servidor! <a href="https://github.com/zeit/now/releases/tag/0.27.0" ></a> <a href="/now"></a> <a href="https://github.com/zeit/serve"></a></p>

<p className="p">As of version <a href="https://github.com/zeit/now/releases/tag/0.27.0" >0.27.0</a>, the <a href="/now"><span>now</span></a>CLI will automatically determine if your project is a dynamic application or of static nature. If the latter is the case, a static deployment will be triggered and your files will be served using <a href="https://github.com/zeit/serve">serve</a>on the server!</p>


<p className="it">Con todo, la única cosa que hay que hacer es ejecutar:</p>

<p className="p">All in all, the only thing you need to do is run:</p>


<pre><code>▲ now</code></pre>


<p className="it">Si es necesario, incluso se puede cumplir este comportamiento usando esta bandera: . <code data-jsx="2857525145" data-reactid="177">now --static</code></p>

<p className="p">If you need to, you can even enforce this behaviour using this flag: <code>now --static</code>.</p>


<p className="it">Además, también estamos deprecating <a href="/blog/serve-it-now" >now servir</a> a favor de esta nueva característica. Pero no se preocupe! Si el flujo de trabajo de su aplicación depende de ello, se acaba de seguir trabajando y nada va a romper.<a href="/blog/serve-it-now"></a></p>

<p className="p">In addition, we're also deprecating <span><a href="/blog/serve-it-now">now-serve</a></span> in favor of this new feature. But don't worry! If your app's workflow depends on it, it will just continue to work and nothing will break.</p>


<p className="it">Sin embargo, sugerimos altamente conmutación de estos proyectos a usar la página principal de la CLI, porque es lo que vamos a estar mejorando en el futuro. El paquete de edad (now-serve) no se borrará tan rápidamente, sino que además no recibirá ninguna otra corrección de errores o nuevas características de now en adelante.</p>

<p className="p">However, we highly suggest switching these projects over to using the main CLI, because it's what we'll be improving in the future. The old package (now-serve) won't be deleted so quickly, but also won't receive any other bug fixes or new features from now on.</p>

<h2><span><a href="#examples">Examples</a></span></h2>

<p className="it">Ahora que hemos cubierto el "por qué" parte, me gustaría que le muestre cómo puede interactuar con la bandera en diversos escenarios de la vida cotidiana:</p>

<p className="p">Now that we've covered the "why" part, I'd like to show you how you can interact with the flag in various everyday scenarios:</p>


<h3><span><a href="#static-site-hosting">Static Site Hosting</a></span></h3>

<pre><code>▲ cd my-project<br></br>▲ ls<br></br>index.html     logo.png     images/ <br></br>▲ now</code></pre>

<div><img src="/static/static-site.png" width="650"></img></div>

<div><img src="/static/static-site-src.png" width="650"></img></div>

<p className="it">A la izquierda, su sitio estático. A la derecha, añadiendo muestra el código. <code>/_src</code></p>

<p className="p">On the left, your static site. On the right, adding <code>/_src</code>shows the code.</p>

<h3><span><a href="#sharing-assets">Sharing Assets</a></span></h3>

<pre><code>▲ cd my-logos<br></br>▲ ls<br></br>white.png     white@2x.png     black.png   black@2x.png<br></br>▲ now</code></pre>

<div><img src="/static/dir-list.png" width="660"></img></div>

<p className="it">Si no hay un archivo, una lista de todos los archivos se procesará automáticamente por <a href="https://github.com/zeit/serve">servir</a>. <code>index.html</code> <a href="https://github.com/zeit/serve"></a></p>

<p className="p">If there's no <code>index.html</code> file, a list of all files will be rendered automatically by <a href="https://github.com/zeit/serve">serve</a>.</p>


<h3><span><a href="#single-page-applications">Single-Page Applications</a></span></h3>


<p className="it">Hasta now, la mayoría de nuestros usuarios han estado utilizando <a href="/blog/serve-it-now">now sirven</a> para desplegar el directorio de salida que contiene su aplicación de una sola página liado. <a href="/blog/serve-it-now"></a></p>

<p className="p">So far, most of our users have been using <a href="/blog/serve-it-now">now-serve</a>to deploy the output directory containing their bundled single-page application.</p>


<p className="it">Hoy en día, me gustaría introducir una técnica diferente y - al mismo tiempo - recomendar a todos nuestros usuarios a que, en lugar de este camino.</p>

<p className="p">Today, I'd like to introduce a different technique and - at the same time - recommend all of our users to go this road instead.</p>


<p className="it">Suponiendo que usted está construyendo su lado cliente rindió aplicación utilizando una herramienta como <a href="https://ember-cli.com" >brasa-cli</a> o <a href="https://github.com/vuejs/vue-cli" >vue-CLI</a> , sólo tiene que asegurarse de que la propiedad dentro de su proyecto de se establece en un comando que puede servir a su sitio en la producción.<a href="https://ember-cli.com" ></a> <a href="https://github.com/vuejs/vue-cli"></a> <code>scripts.start</code> <code>package.json</code></p>

<p className="p">Assuming that you're building your client-side rendered application using a tool like<a href="https://ember-cli.com">ember-cli</a>  <a href="https://github.com/vuejs/vue-cli" >vue-cli</a> , you only need to make sure that the <code>scripts.start</code>property within your project's  <code>package.json</code> is set to a command that can serve your site in production.</p>

<p className="it">Además, es necesario especificar la propiedad con el fin de manejar los pasos de generación antes de la aplicación se sirvió. <code>scripts.build</code> </p>

<p className="p">In addition, you need to specify the <code>scripts.build</code>property in order to handle the build steps before the application gets served.</p>

<p className="it">A modo de ejemplo, así es como se vería utilizando <a href="https://ember-cli.com" >brasa-CLI</a> : <a href="https://ember-cli.com"></a></p>

<p className="p">As an example, this is how it would look using  <a href="https://ember-cli.com" >ember-cli</a> :</p>


<pre><code>{`
  "scripts": {
    "start": "ember serve -prod",
    "build": "ember build -prod"
  }
`}</code></pre>

<p className="it">Nota al margen: Si desea utilizar una (o ambas) de las propiedades mencionadas anteriormente para un comando diferente, no dude en <a href="https://zeit.co/now#how-does-my-app-detect-now">reemplazarlo</a> con uno que sólo se trata de la acción en un <a href="/now"><span>momento</span></a> del despliegue. Después de eso, se puede utilizar y para otros fines). <a href="https://zeit.co/now#how-does-my-app-detect-now"></a> <code>start</code> <code>build</code></p>

<p className="p">Side note: If you'd like to use one (or both) of the properties mentioned above for a different command, feel free to <a href="https://zeit.co/now#how-does-my-app-detect-now">replace it</a>  with one that only comes to action on a <a href="/now"><span> now</span> </a> deployment. After that, you can use <code>start</code>  and <code>build</code>  for other purposes).</p>

<p className="it">Una vez que haya descubierto esta parte cabo, sólo es necesario para implementar en el nivel de directorio que contiene el archivo usando.</p><code>package.json</code> <code>now</code>

<p className="p">Once you've figured this part out, you only need to deploy on the directory level that contains the <code>package.json</code>file using <code>now</code>.</p>

<p className="it">En el servidor, <a><span>now</span></a> luego construir su aplicación (como se especifica en ) y servirlo (expresados en ) a sus visitantes. <a><span><span></span> </span> </a> <code>scripts.build</code> <code>scripts.start</code></p>

<p className="p">On the server, <a><span><span></span>now </span> </a> >will then build your application (as specified in <code>scripts.build</code>) and serve it (stated in <code>scripts.start</code>) to your visitors.</p>

<p className="it">¡Hecho!</p>

<p className="p">Done!</p>


<p className="it">Si la interfaz de línea de comandos no viene con una función para servir a su aplicación en la producción de una sola página, se puede añadir lo siguiente dentro de su: <code>./package.json</code></p>

<p className="p">If your command line interface doesn't come with a feature for serving your single page application in production, you can add the following inside your <code>./package.json</code>:</p>

<pre><code>{`{
  "scripts": {
    "start": "serve ./dist --single",
    "build": "&lt;command-for-building-to-dist&gt;"
  },
  "dependencies": {
    "serve": "latest"
  }
}`}</code></pre>

<p className="it">La ruta debe ser la ubicación de la salida de acumulación. <code>./dist</code> </p>

<p className="p">The <code>./dist</code> path should be the location of your build output.</p>

<h2><a href="#under-the-hood">Under the Hood</a> </h2>

<p className="it">Si nos fijamos en el código fuente (mediante la adición / _src a un enlace) de cualquiera de estos despliegues, verá que todo lo que hace es simplemente crear una para usted y cargar los archivos: <code >package.json</code> </p>

<p className="p">If you look at the source code (by adding /_src to a link) of any of these deployments, you'll see that all it does is simply create a <code>package.json</code> for you and upload the files:</p>


<pre><code>{`{
  "name": "static-{random}",
  "scripts": {
    "start": "serve ./content"
  },
  "dependencies": {
    "serve": "latest"
  }
}`}</code></pre>

<p className="it">El comando es suministrada por el <a href="https://github.com/zeit/serve" >servicio</a> de paquetes. <code>serve</code> <a href="https://github.com/zeit/serve" ></a></p>

<p className="p">The command <code>serve</code> is supplied by the <a href="https://github.com/zeit/serve" >serve</a> package.</p>



<p className="it">Dado que todo lo que hacemos es utilizar <a href="/now" ><span>now</span></a> bajo el capó de una manera programática, se obtiene todos sus grandes capacidades como subir archivos rápidamente y archivo de Eliminación de duplicados. <a href="/now"></a></p>

<p className="p">Since all we do is use <a  href="/now" ><span><span></span>now </span></a> under the hood in a programmatic way, you get all its great capabilities like fast uploads and file de-duping.</p>



<p className="it">Y, por supuesto, cada vez que compartes, se proporciona un nuevo enlace para usted.</p>

<p className="p">And, of course, every single time you share, a new link is provided for you.</p>


<h3><a href="#customizing-the-behaviour">Customizing the Behaviour</a></h3>

<p className="it">Aunque incluya <a href="/blog/serve-it-now" >now servir</a> proporciona unos parámetros para ajustar el comportamiento de las <a href="https://github.com/zeit/serve" >sirven</a> ejecuta en el servidor (como ), llegamos a la conclusión de que es una idea mucho mejor que acaba de dar a los desarrolladores un control total sobre cómo su servicio a sus archivos. <a href="/blog/serve-it-now" ></a> <a href="https://github.com/zeit/serve" ></a> <code >--single</code></p>

<p className="p">Althought <a href="/blog/serve-it-now" >now-serve</a> provided a few parameters for adjusting the behaviour of <a href="https://github.com/zeit/serve" >serve</a> running on the server (like <code >--single</code>), we came to the conclusion that it's a much better idea to just give the developers full control over how its serving their files.</p>


<p className="it">Así que de now en adelante, te recomendaremos la simple creación de una costumbre archivo con un contenido como se mencionó anteriormente, si usted desea tomar ventaja de uno de <a href="https://github.com/zeit/serve#options" >de servir opciones</a> . <code >package.json</code> <a href="https://github.com/zeit/serve#options" ></a></p>

<p className="p">So from now on, we'll recommend simply creating a custom <code>package.json</code>file with a content like mentioned above, if you want to take advantage of one of <a href="https://github.com/zeit/serve#options">serve's options</a>.</p>


<p className="it">Una vez que haya establecido esto, sólo tiene que ejecutar <code>now</code>para desplegarlo!</p>

<p className="p">Once you've set this up, simply run <code>now</code> to deploy it!</p>

<h2><a href="#interested-in-taking-part">Interested in Taking Part?</a></h2>

<p className="it">Todos los proyectos mencionados en este artículo son de código abierto y usted es libre de sugerir funciones o corregir errores, si desea apoyarlos:</p>

<p className="p">All of the projects mentioned in this article are open-source and you're free to suggest features or fix bugs, if you'd like to support them:</p>


<ul >
<li className="p"><a href="https://github.com/zeit/now-cli">now</a> (Now's command line utility)</li>
<li className="p"><a href="https://github.com/zeit/serve">serve</a> (Serves your files on the server)</li>
</ul>

<h2><a href="#how-to-get-it">How to Get It</a></h2>


<p className="it">Si ha instalado la interfaz de línea de comandos de now usando <a href="/desktop">Ahora escritorio</a> , lo único que tiene que hacer es asegurarse de que <strong>la aplicación se está ejecutando</strong> . Suponiendo que ese es el caso, el binario se actualizará automáticamente para que en los próximos minutos!</p>

<p className="p">If you've installed Now's command line interface using <a href="/desktop">Now Desktop</a>, the only thing you need to do is make sure that <strong>the application is running</strong>. Assuming that's the case, the binary will automatically be updated for you in the next few minutes!</p>


<p className="it">Sin embargo, si ese no es el caso, se recomienda encarecidamente que para <a href="/desktop">descargarlo</a> y utilizarlo para instalar la CLI. Después, usted está cubierto!</p>

<p className="p">However, if that's not the case, we highly recommend you to <a href="/desktop">download it</a> and use it to install the CLI. Afterwards, you're covered!</p>


<p className="it">Si estás en una plataforma que aún no admitido por <a href="/desktop">Ahora escritorio</a> , basta con actualizar la interfaz de línea de comandos de la siguiente manera:<code>npm install -g now@0.27.0</code></p>

<p className="p">If you're on a platform that's not yet supported by <a href="/desktop" >Now Desktop</a>, simply update the command line interface like this: <code>npm install -g now@0.27.0</code></p>

</div>
</div>

)