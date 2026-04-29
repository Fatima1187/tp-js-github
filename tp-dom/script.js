document.addEventListener("DOMContentLoaded", function() {

    let compteur = 0;

    const titre = document.getElementById('titre-principal');
    const bloc = document.querySelector('#bloc');
    const btnAction = document.querySelector('#btn-action');
    const btnCacher = document.getElementById('btn-cacher');
    const btnMontrer = document.getElementById('btn-montrer');
    const champTexte = document.getElementById('champ-texte');
    const btnAjouter = document.getElementById('btn-ajouter');
    const maListe = document.getElementById('ma-liste');
    const zoneAjout = document.querySelector('#zone-ajout');

    console.log(document.getElementById('titre-principal'));
    console.log(document.getElementsByTagName('p'));
    console.log(document.getElementsByClassName('para'));
    console.log(document.getElementById('zone-inexistante'));

    console.log(document.querySelector('span.etiquette'));
    console.log(document.querySelector('#bloc'));
    console.log(document.querySelectorAll('#bloc .para'));
    console.log(document.querySelector('.para.emphase'));

    console.log(bloc.childNodes);
    console.log(bloc.childNodes.length);
    console.log(bloc.children);
    console.log(bloc.children.length);

    const deuxiemePara = bloc.children[2];
    console.log(deuxiemePara.nextElementSibling);
    console.log(deuxiemePara.previousElementSibling);
    console.log(bloc.parentElement);

    titre.textContent = 'TP DOM - En cours';

    const premierPara = document.querySelector('.para');
    premierPara.textContent = 'Paragraphe A - modifie';

    const etiquette = document.querySelector('.etiquette');
    etiquette.innerHTML = '<strong>Bloc modifie</strong>';

    bloc.style.backgroundColor = '#e8f4fc';
    titre.style.color = '#1a237e';

    const tousLesParas = document.getElementsByClassName('para');
    for (let i = 0; i < tousLesParas.length; i++) {
        tousLesParas[i].style.fontSize = '18px';
    }

    const troisiemePara = document.querySelector('.para.emphase');
    troisiemePara.classList.add('surligne');
    troisiemePara.classList.remove('emphase');

    console.log(premierPara.classList.contains('surligne'));

    titre.classList.toggle('cache');
    titre.classList.toggle('cache');

    btnCacher.addEventListener('click', function() {
        bloc.style.display = 'none';
    });

    btnMontrer.addEventListener('click', function() {
        bloc.style.display = 'block';
    });

    const p = document.createElement('p');
    p.textContent = 'Paragraphe ajoute dynamiquement';
    p.classList.add('para');
    zoneAjout.appendChild(p);

    const h2 = document.createElement('h2');
    h2.textContent = 'Section ajoutee';

    const container = document.getElementById('container');
    container.insertBefore(h2, bloc);

    const firstBlocPara = document.querySelector('#bloc .para');
    if (firstBlocPara) {
        firstBlocPara.remove();
    }

    function genererListe(items) {
        const ul = document.createElement('ul');

        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        zoneAjout.appendChild(ul);
    }

    genererListe(["Element 1", "Element 2", "Element 3", "Element 4"]);

    btnAction.addEventListener('click', function() {
        compteur++;
        titre.textContent = 'Bouton clique !';
        btnAction.textContent = 'Clique ' + compteur + ' fois';
    });

    btnAjouter.addEventListener('click', function() {
        const valeur = champTexte.value.trim();

        if (valeur !== '') {
            const li = document.createElement('li');
            li.textContent = valeur;
            maListe.appendChild(li);
            champTexte.value = '';
        } else {
            console.log('Champ vide !');
        }
    });

});