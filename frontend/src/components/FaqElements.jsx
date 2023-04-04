import React from "react";
// eslint-disable-next-line import/no-unresolved
import questions from "../assets/images/faq.webp";
// eslint-disable-next-line import/no-unresolved
import chevron from "../assets/images/chevron.svg";

function FaqQuestions() {
  return (
    <div>
      <section className="text-darkblue  ">
        <div className="w-1/3 mx-auto">
          <img src={questions} alt="faq" className="mt-12 h-[8rem]" />
        </div>
        <div className="container px-5 py-24 mx-auto">
          <a
            href="/accueil"
            className="text-darkblue inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-main hover:underline"
          >
            <img src={chevron} alt="chevron" />
            retour
          </a>
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-darkblue mb-4">
              Question fréquemment posée
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Les questions les plus courantes sur le fonctionnement de notre
              association et ce que peut faire pour vous.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-blue rounded-md py-2 px-4">
                  Comment fonctionne la categorisation des smarthphone?
                </summary>

                <span className="text-justify ">
                  <br />
                  La catégorisation des smartphones d'occasion fonctionne selon
                  plusieurs critères pour aider les techniciens à trouver le
                  prix juste et qui convient le mieux aux besoins. Avec les
                  critères suivants : marque, modèle, RAM, stockage, indice
                  Antutu et réseau.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-blue rounded-md py-2 px-4">
                  Comment fonctionne le système emmaüs connect?
                  <br />
                  <br />
                </summary>

                <span className="text-justify ">
                  <br />
                  Dans notre magasin de téléphones portables d'occasion, nous
                  sommes heureux de vous informer que les téléphones que nous
                  avons révélés ont été donnés et ont été dûment évalués et
                  catégorisés pour garantir leur qualité et leurs performances.
                  Pour catégoriser chaque téléphone, nous utilisons une
                  calculatrice et évaluons plusieurs facteurs importants tels
                  que la marque, le modèle, la quantité de RAM, la capacité de
                  stockage, l'indice Antutu et la capacité de réseau. De cette
                  manière, nous pouvons vous offrir des téléphones qui répondent
                  à tous les besoins.
                </span>
              </details>
              <details className="mb-4">
                <summary className="mb-4 font-semibold  bg-blue rounded-md py-2 px-4">
                  Puis-je saisir un fichier en csv pour saisir les informations?
                </summary>

                <span className="text-justify max-w-sm leading-relaxed">
                  <br />
                  Bien sûr! En plus de saisir manuellement les informations de
                  chaque téléphone dans la calculatrice virtuelle et de générer
                  un code QR pour chacun, il est également possible de
                  télécharger les informations du téléphone au format CSV et de
                  les saisir automatiquement dans la base de données. Ceci est
                  particulièrement utile si vous avez un grand nombre de
                  téléphones que vous devez classer et que vous ne souhaitez pas
                  les saisir manuellement un par un.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-blue rounded-md py-2 px-4">
                  Quelle est la configuration minimale pour mettre un smartphone
                  en vente ?
                </summary>

                <span className="px-4 py-2">
                  <br />
                  Android: 8 <br /> Ram: 2GO <br />
                  Mémoire: 16GO
                  <br /> écran: 4P
                  <br /> Réseau: 4G <br />
                  avec chargeur et cable
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-blue rounded-md py-2 px-4">
                  Est-il possible de générer un QR code après avoir saisi un
                  téléphone ?
                </summary>

                <span className="mt-6 px-4 py-2">
                  <br />
                  Il est possible de générer un code QR qui reprend toutes les
                  informations concernant le téléphone. Ce code QR peut être
                  utilisé pour identifier et suivre chaque téléphone, ce qui est
                  particulièrement utile pour suivre les téléphones donnés et
                  vendus à l'avenir.
                </span>
              </details>
              <details className="mb-4">
                <summary className="mb-6 font-semibold  bg-blue rounded-md py-2 px-4">
                  Comment puis-je utiliser la calculatrice virtuelle?
                </summary>

                <span className="px-4 py-2">
                  <br />
                  1-.Marque: Tout d'abord, vous devez trier les smartphones
                  d'occasion en fonction de leur marque. Pour cela, vous pouvez
                  simplement regrouper les téléphones en fonction de la marque,
                  par exemple, Apple, Samsung, Huawei, Xiaomi, etc. <br />{" "}
                  2-.Modèle: Ensuite, une fois que vous avez regroupé les
                  téléphones en fonction de leur marque, vous devez les classer
                  par modèle. Pour cela, vous pouvez utiliser les noms de
                  modèles de chaque marque pour trier les téléphones, par
                  exemple, iPhone X, Samsung Galaxy S20, Huawei P30, Xiaomi Mi
                  10, etc. <br /> 3-.RAM: La RAM est un facteur important à
                  considérer lors de l'achat d'un smartphone, car elle détermine
                  la vitesse et les performances globales du téléphone. Vous
                  pouvez classer les téléphones en fonction de leur quantité de
                  RAM, par exemple, 2 Go, 4 Go, 6 Go, 8 Go, etc. <br />{" "}
                  4-.Stockage: Le stockage est également un facteur important à
                  considérer lors de l'achat d'un smartphone, car il détermine
                  la quantité de données et d'applications que vous pouvez
                  stocker sur votre téléphone. Vous pouvez classer les
                  téléphones en fonction de leur capacité de stockage, par
                  exemple, 32 Go, 64 Go, 128 Go, 256 Go, etc. <br /> 5-.Indice
                  Antutu: L'indice Antutu est un score de référence qui mesure
                  les performances globales d'un smartphone. Vous pouvez classer
                  les téléphones en fonction de leur indice Antutu, en allant
                  des scores les plus élevés aux scores les plus bas. <br />{" "}
                  6-.Réseau: Enfin, le réseau est également un facteur important
                  à considérer lors de l'achat d'un smartphone, car il détermine
                  la vitesse et la qualité des connexions Internet et mobiles.
                  Vous pouvez classer les téléphones en fonction de leur
                  capacité de réseau, par exemple, 4G, 5G, etc.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqQuestions;
