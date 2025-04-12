function Home() {
  return (
    <div className="flex flex-col justify-evenly my-8 gap-10 text-center">
      <p className="text-2xl font-bold underline">Sélecteurs</p>
      <button onClick={() => (window.location.href = "/14")}>
        Sélecteur par type
      </button>
      <button onClick={() => (window.location.href = "/3")}>
        Sélecteur accordéon
      </button>
      <button onClick={() => (window.location.href = "/5")}>
        Sélecteur par onglets
      </button>
      <button onClick={() => (window.location.href = "/8")}>
        Sélecteur d'allergènes
      </button>

      <p className="text-2xl font-bold underline">Affichage des produits</p>
      <button onClick={() => (window.location.href = "/2")}>
        Informations produit
      </button>
      <button onClick={() => (window.location.href = "/10")}>
        Informations produit style tableau noir
      </button>

      <p className="text-2xl font-bold underline">Produits avec image</p>
      <button onClick={() => (window.location.href = "/1")}>
        Image produit puis clic pour infos
      </button>
      <button onClick={() => (window.location.href = "/4")}>
        Image produit puis clic pour infos (scroll horizontal)
      </button>
      <button onClick={() => (window.location.href = "/6")}>
        Nom du produit puis clic sur image et infos
      </button>
      <button onClick={() => (window.location.href = "/7")}>
        Photo et informations produit
      </button>

      <p className="text-2xl font-bold underline">Produits avec vidéo</p>
      <button onClick={() => (window.location.href = "/11")}>
        Vidéo en arrière-plan
      </button>
      <button onClick={() => (window.location.href = "/12")}>
        Vidéo produit puis clic pour infos
      </button>

      <p className="text-2xl font-bold underline">
        Produits avec affichage alternatif
      </p>
      <button onClick={() => (window.location.href = "/9")}>
        Produit affiché page par page (scroll)
      </button>
      <button onClick={() => (window.location.href = "/13")}>
        Produit style Tinder
      </button>

      <p className="text-2xl font-bold underline">À faire</p>
      <button onClick={() => (window.location.href = "/14")}>Menu 14</button>
      <button onClick={() => (window.location.href = "/15")}>Menu 15</button>
    </div>
  );
}

export default Home;
