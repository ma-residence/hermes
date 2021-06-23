const data = {
  terms_of_service: [
    {
      city: "Le Havre",
      descriptionContact: {
        tel: "+33235198118",
        email: "ccasliensocial@lehavre.fr",
      },
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg/98px-Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg.png",
    },
    {
      city: "Mougins",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Blason_ville_fr_Mougins_%28Alpes_Maritimes%29.svg/98px-Blason_ville_fr_Mougins_%28Alpes_Maritimes%29.svg.png",
    },
    {
      city: "Vierzon",
      descriptionContact:
        "Contactez-nous : +330248831180 ou info.ccas@ville-vierzon.fr",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Blason_Vierzon.svg/98px-Blason_Vierzon.svg.png",
    },
    {
      city: "Evreux",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Blason_ville_fr_Evreux_%28Eure%29.svg/98px-Blason_ville_fr_Evreux_%28Eure%29.svg.png",
    },
    {
      city: "Vernon",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Blason_ville_fr_Vernon_%28Eure%29.svg/98px-Blason_ville_fr_Vernon_%28Eure%29.svg.png",
    },
    {
      city: "Rixheim",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Blason_de_la_ville_de_Rixheim_%2868%29.svg/98px-Blason_de_la_ville_de_Rixheim_%2868%29.svg.png",
    },
    {
      city: "Issy-les-Moulineaux",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Blason_ville_fr_Issy-les-Moulineaux_%28Hauts-de-Seine%29.svg/98px-Blason_ville_fr_Issy-les-Moulineaux_%28Hauts-de-Seine%29.svg.png",
    },
    {
      city: "Champagnole",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Blason_ville_fr_Champagnole_%28Jura%29.svg/98px-Blason_ville_fr_Champagnole_%28Jura%29.svg.png",
    },
    {
      city: "La Ravoire",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Blason_ville_fr_la_Ravoire.svg/98px-Blason_ville_fr_la_Ravoire.svg.png",
    },
    {
      city: "Saint Gratien",
      descriptionContact: {
        tel: "0134178484",
        email: "f.bonnet@mairie-saintgratien.fr",
      },
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Blason_ville_fr_Saint-Gratien_%28Val-d%27Oise%29.svg/98px-Blason_ville_fr_Saint-Gratien_%28Val-d%27Oise%29.svg.png",
    },
    {
      city: "Longueau",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Blason_longueau_%2880%29_Somme-_France.svg/98px-Blason_longueau_%2880%29_Somme-_France.svg.png",
    },
    {
      city: "Vence",
      descriptionContact: { tel: "+33493240890", email: "lgac@ccas-vence.fr" },
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blason_ville_fr_Vence_%28Alpes-Maritimes%29.svg/98px-Blason_ville_fr_Vence_%28Alpes-Maritimes%29.svg.png",
    },
    {
      city: "Nice",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/59/Nice_Armoiries.svg/98px-Nice_Armoiries.svg.png",
    },
    {
      city: "Saint Médard en Jalles",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Blason_ville_fr_Saint-M%C3%A9dard-en-Jalles_%28Gironde%29.svg/98px-Blason_ville_fr_Saint-M%C3%A9dard-en-Jalles_%28Gironde%29.svg.png",
    },
    {
      city: "Gennevilliers",
      descriptionContact: {
        tel: "0140856784",
        email: "asa@ville-gennevilliers.fr",
      },
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Blason_ville_fr_Gennevilliers_%2892%29.svg/98px-Blason_ville_fr_Gennevilliers_%2892%29.svg.png",
    },
    {
      city: "Nantes",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dd/Nantes_logo.png/842px-Nantes_logo.png",
    },
    {
      city: "Saint Herblain",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Blason_ville_fr_Saint-Herblain_%28Loire-Atlantique%29.svg/98px-Blason_ville_fr_Saint-Herblain_%28Loire-Atlantique%29.svg.png",
    },
    {
      city: "Nérac",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Blason_ville_fr_Nerac_%28LotGaronne%29.svg/98px-Blason_ville_fr_Nerac_%28LotGaronne%29.svg.png",
    },
    {
      city: "Le Passage",
      descriptionContact: {
        tel: "0553771877",
        email: "ccas@ville-lepassage.fr",
      },
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Blason_ville_fr_Le_Passage_d%27Agen_%28Lot-et-Garonne%29.svg/98px-Blason_ville_fr_Le_Passage_d%27Agen_%28Lot-et-Garonne%29.svg.png",
    },
    {
      city: "Avignon",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Blason_ville_fr_Avignon_%28Vaucluse%29.svg/98px-Blason_ville_fr_Avignon_%28Vaucluse%29.svg.png",
    },
    {
      city: "Menton",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Blason_ville_fr_Menton_%28Alpes-Maritimes%29.svg/931px-Blason_ville_fr_Menton_%28Alpes-Maritimes%29.svg.png",
    },
    {
      city: "Noisy-le-Roi",
      descriptionContact: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Blason_ville_fr_Noisy-le-Roi_%28Yvelines%29.svg/98px-Blason_ville_fr_Noisy-le-Roi_%28Yvelines%29.svg.png",
    },
    {
      city: "Metz",
      descriptionContact: {
        tel: "0800891891",
        email: "contact@ccas.mairie-metz.fr",
      },
      logo: "https://metz.fr/professionnels/images/logometz.png",
    },
    {
      city: "Pau",
      descriptionContact: {
        tel: "0614888501",
        email: "planantisolitude@ville-pau.fr",
      },

      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Pau_logo_2018.svg",
    },
    {
      city: "Nevers",
      descriptionContact: null,
      logo: "http://edruson.com/wp-content/uploads/2019/04/logo-Nevers-RVB-300dpi.png",
    },
    {
      city: "Saint quentin",
      descriptionContact: {
        tel: "+33323636863",
        email: "ccas.solidarite@saint-quentin.fr",
      },
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/be/Logo_Saint-Quentin_-_Aisne_-_2015.svg/1920px-Logo_Saint-Quentin_-_Aisne_-_2015.svg.png",
    },
    {
      city: "Digne-les-Bains",
      descriptionContact: {
        tel: "+33492305880",
        email: "ccas04@dignelesbains.fr",
      },
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/98/Logo_Digne-les-Bains.svg/800px-Logo_Digne-les-Bains.svg.png",
    },
    {
      city: "Beauvais",
      descriptionContact: { tel: "0344794108" },
      logo: "https://upload.wikimedia.org/wikipedia/fr/f/f0/Logo_de_Beauvais.gif",
    },
  ],
};

export default data;
