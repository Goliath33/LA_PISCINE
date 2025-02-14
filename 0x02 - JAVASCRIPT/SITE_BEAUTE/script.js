const articles = [{
    name: "Rougealevres",
    title: "Le rouge à lèvres",
    article: "Le rouge à lèvres est un produit de cosmétique permettant de souligner les lèvres en les colorant ou non. Il en existe beaucoup de variantes, quant à la tenue, la couleur, la texture et le fini. Un rouge à lèvres n'est pas forcément rouge, même si le plus souvent sa couleur est proche du rouge (rouges vifs, sombres, vermillons, roses, orangés, etc.). Des couleurs comme le bleu ou le vert ne se rencontrent qu'exceptionnellement.",
    image: "img/rougealevres.jpeg"
}, {
    name: "Mascara",
    title: "Le Mascara",
    article: "Le mascara se compose d'un tube contenant le produit colorant sous forme liquide ou crémeuse et d'une brosse droite, courbée voire sphérique. La brosse est plongée dans le tube puis appliquée sur les cils. Le mascara contient de l 'eau, des épaississants, des agents filmogènes, des colorants et des conservateurs. Il existe en différents couleurs mais principalement en  noir. Il existe des mascaras résistants à l 'eau, ce qui leur évite de couler sous les yeux en cas de pluie, de larmes ou de sueur excessive.",
    image: "img/mascara.png"
}, {
    name: "Fard",
    title: "Le Fard à paupières",
    article: "Le fard à paupières ou ombre à paupières, il se présente généralement sous forme de poudre compactée qui s'applique avec une brosse ou à la main. Il s'applique par nuance de la plus claire à la plus foncée en commençant près de l'œil sur la paupière mobile et en terminant par la nuance la plus foncée au ras des cils.",
    image: "img/fard.jpeg"
}]
{
const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('nav');
const main = document.createElement('main');
const title = document.createElement('h1');
const article = document.createElement('article');


for (let i = 0; i < articles.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href' , '#' + articles[i].name);
    a.innerHTML=articles[i].title;
    li.appendChild(a);
    ul.appendChild(li);

}

nav.appendChild(ul);
return nav;
}

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

