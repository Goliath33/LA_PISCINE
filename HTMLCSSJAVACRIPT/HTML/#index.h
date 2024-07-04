<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, intitial-scale=1.0" />
        <meta name="description" content="Mon premier site en HTML" />
        <meta name="author" content="David SELLIER" />
        <link rel="stylesheet" href="style.css" >
        <title>Mon premier site</title>
    </head>
    <body>


        <!-- Mon header -->
        <header>
            <h1>Mon premier site internet</h1>
            <nav>
                <ol>
                    <li><a href="#footer">premier élément</a> </li>
                    <li>deuxième élément
                      <ul>
                          <li>sous-élément 1</li>
                          <li>sous-élément 2</li>
                          <li>sous-élément 3</li>
                          <li>sous-élément 4
                            <ol type="A" start="4">
                              <li>sous-sous-élément D</li>
                              <li>sous-sous-élément E</li>
                            </ol>
                          <li>sous-élément 5</li>
                      </ul>
                    <li>troisième élément</li>
                </ol>
          
            </nav>
        </header>
        <hr>
        <!-- Balise principale -->
        <main>
            <section>
                <!-- 1er article -->
                <article>
                    <h2>Le titre de mon premier article</h2>
                    <p> <img src="img/chiotimage.jpg" alt="imagechiot" width="200">
                        Lorem ipsum dolor sit amet, <strong>consectetur adipisicing</strong> elit. Laborum minus, expedita itaque animi exercitationem suscipit quidem. Quibusdam sed, possimus at obcaecati aliquam officiis voluptatibus iste illo deserunt dolor quae quasi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur <strong>adipisicing elit.</strong> Temporibus officia nulla sapiente cupiditate accusamus ipsam vitae laborum, veritatis, eius quisquam omnis harum architecto. Veniam soluta necessitatibus nulla, facere quo blanditiis?
                    </p>
                </article>
                <!-- 2eme article -->
                <article>
                    <h2>Le titre de mon second <mark>article</mark></h2>
                    <h3>Sous titre de mon second article</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Officiis sint voluptates consequuntur numquam neque! Cum explicabo corporis alias illo esse. Ducimus maxime odio est inventore alias libero vero sapiente quas!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad sit voluptates rerum culpa quo at illum voluptate excepturi recusandae, dignissimos laboriosam expedita nisi dicta corrupti temporibus asperiores voluptatibus cupiditate.
                    </p>
                </article>
            </section>
            <hr>
            <!-- Section PUB -->
            <section>
                <h3>Publicité</h3>
                <p>Lorem ipsum dolor sit amet consectetur <em> adipisicing elit. Debitis dolor, cupiditate </em>culpa illo eius excepturi repudiandae perspiciatis tempore iure, necessitatibus quisquam qui dolorem voluptates, aliquid itaque ipsum sint consectetur nostrum.</p>
            </section>
            <!-- 3eme article  -->
            <article>
                <h2>Le titre de mon <del> 3eme article </del></h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi vel, amet dolor illo laboriosam eaque enim vitae soluta quod ipsum cumque velit est magni atque, nemo iusto, aspernatur corrupti.
                </p>
                <p>
                    rferendis! Totam assumenda, <br> repellendus praesentium <strong> similique quidem unde voluptates </strong> ratione. Minima, voluptatem?
                </p>
            </article>
            <!-- 4eme article  -->
            <article>
              <h2>Le titre de mon 4eme article</h2>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi vel, amet dolor illo laboriosam eaque enim vitae soluta quod ipsum cumque velit est magni atque, nemo iusto, aspernatur corrupti.
              </p>
              <p>
                  rferendis! Totam assumenda, <br> repellendus praesentium <strong> similique quidem unde voluptates </strong> ratione. Minima, voluptatem?
              </p>
          </article>
          <!-- 5eme article  -->
          <article>
            <h2>Le titre de mon 5eme article</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi vel, amet dolor illo laboriosam eaque enim vitae soluta quod ipsum cumque velit est magni atque, nemo iusto, aspernatur corrupti.
            </p>
            <p>
                rferendis! Totam assumenda, <br> repellendus praesentium <strong> similique quidem unde voluptates </strong> ratione. Minima, voluptatem?
            </p>
        </article>
        </main>
        <hr>
        <!-- Footer -->
        <div id="footer">
            <p>Copyright de Moi</p>
        </div>
     
    </body>
</html>