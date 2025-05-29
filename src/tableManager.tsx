import { useState, useEffect } from "react";

const productsFrench = [
  {
    type: "HAPPY-HOUR",
    description: "16H - 02H",
    products: [
      {
        name: "Pinte de Blonde",
        price: "3.50 €",
        description: "Bière blonde pression légère et rafraîchissante",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte de Blanche",
        price: "6.00 €",
        description: "Bière blanche pression aux notes d’agrumes",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte de Picon",
        price: "5.00 €",
        description: "Bière blonde avec liqueur Picon (amer d’orange)",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte d'I.P.A",
        price: "6.00 €",
        description: "Bière houblonnée amère, riche en arômes",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte de Chouffe",
        price: "6.50 €",
        description: "Bière belge fruitée et légèrement épicée",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Vin au verre",
        price: "4.00 €",
        description: "Vin rouge, blanc ou rosé au choix",
        specification: ["sulfites"],
      },
      {
        name: "Double Ricard",
        price: "4.50 €",
        description: "Anisé servi avec eau fraîche",
        specification: ["sulfites"],
      },
      {
        name: "Cocktails",
        price: "5.50 €",
        description: "Cocktail du moment (voir au bar)",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Assiette de Frites",
        price: "6.00 €",
        description: "Frites maison croustillantes",
        specification: ["peut contenir traces de gluten"],
      },
    ],
  },
  {
    type: "Tapas",
    products: [
      {
        name: "Stick Mozza",
        price: "7.50 €",
        description: "9 bâtonnets de mozzarella panés",
        specification: ["lait", "gluten", "œufs"],
      },
      {
        name: "Beignets de Calamars",
        price: "7.50 €",
        description: "9 beignets croustillants de calamars",
        specification: ["poisson", "gluten", "œufs"],
      },
      {
        name: "Accras de Morue",
        price: "7.50 €",
        description: "9 accras de morue épicés",
        specification: ["poisson", "gluten", "œufs"],
      },
      {
        name: "Mini Falafels",
        price: "7.50 €",
        description: "9 falafels de pois chiches et épices",
        specification: ["peut contenir gluten", "sésame"],
      },
      {
        name: "Onion Rings",
        price: "7.50 €",
        description: "9 rondelles d'oignons panées",
        specification: ["gluten", "œufs"],
      },
      {
        name: "Assiette de Frites",
        price: "6.00 €",
        description: "Frites maison croustillantes",
        specification: ["peut contenir traces de gluten"],
      },
    ],
  },
  {
    type: "Planches",
    products: [
      {
        name: "Planches Charcuterie",
        price: "12.90 €",
        description: "Assortiment de charcuteries françaises",
        specification: ["sulfites"],
      },
      {
        name: "Planches Fromages",
        price: "12.90 €",
        description: "Assortiment de fromages affinés",
        specification: ["lait"],
      },
      {
        name: "Planches Mixte",
        price: "15.90 €",
        description: "Mix charcuteries et fromages",
        specification: ["lait", "sulfites"],
      },
    ],
  },
  {
    type: "Croques",
    products: [
      {
        name: "Croque Monsieur",
        price: "10.90 €",
        description:
          "Pain de mie, jambon, fromage fondu. Frites maison et salade",
        specification: ["gluten", "lait", "œufs"],
      },
      {
        name: "Croque Madame",
        price: "11.90 €",
        description:
          "Croque Monsieur avec œuf au plat. Frites maison et salade",
        specification: ["gluten", "lait", "œufs"],
      },
    ],
  },
  {
    type: "Cocktails",
    products: [
      {
        name: "Sex on the Beach",
        price: "7.50 €",
        description: "Vodka, jus d’orange, cranberry, pêche",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Spritz Apérol",
        price: "7.50 €",
        description: "Apérol, prosecco, eau pétillante",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Moscow Mule",
        price: "7.50 €",
        description: "Vodka, gingembre, citron vert",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Caïpirina",
        price: "7.50 €",
        description: "Cachaça, citron vert, sucre",
        specification: ["alcool"],
      },
      {
        name: "Caïpiroska",
        price: "7.50 €",
        description: "Vodka, citron vert, sucre",
        specification: ["alcool"],
      },
      {
        name: "Pina Colada",
        price: "7.50 €",
        description: "Rhum, ananas, crème de coco",
        specification: ["alcool", "lait (crème)"],
      },
      {
        name: "Cuba Libre",
        price: "7.50 €",
        description: "Rhum, cola, citron vert",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Mojito",
        price: "7.50 €",
        description: "Rhum, menthe fraîche, citron vert, sucre, eau pétillante",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Suze",
        price: "7.50 €",
        description: "Apéritif à base de gentiane",
        specification: ["alcool", "sulfites"],
      },
    ],
  },
  {
    type: "Couscous",
    products: [
      {
        name: "Couscous Boeuf",
        price: "13.50 €",
        description: "Semoule, légumes, bouillon maison et bœuf",
        specification: ["gluten"],
      },
      {
        name: "Couscous Poulet Fermier",
        price: "14.50 €",
        description: "Semoule, légumes, bouillon maison et poulet fermier",
        specification: ["gluten"],
      },
      {
        name: "Couscous Merguez",
        price: "12.90 €",
        description: "Semoule, légumes, bouillon maison et merguez",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Couscous Brochettes",
        price: "14.00 €",
        description:
          "Semoule, légumes, bouillon maison et brochettes de viande",
        specification: ["gluten"],
      },
      {
        name: "Couscous Légumes",
        price: "12.00 €",
        description: "Semoule, légumes variés et bouillon maison",
        specification: ["gluten"],
      },
      {
        name: "Couscous Mechoui",
        price: "17.50 €",
        description: "Semoule, légumes, bouillon maison et agneau rôti (350g)",
        specification: ["gluten"],
      },
      {
        name: "Le Royale",
        price: "20.90 €",
        description:
          "Semoule, légumes et toutes les viandes : poulet, bœuf, merguez, agneau",
        specification: ["gluten", "sulfites"],
      },
    ],
  },
];

interface Product {
  name: string;
  price: string;
  quantity?: number;
}

interface Table {
  name: string;
  products: Product[];
}

const allProducts = productsFrench.flatMap((cat) => cat.products);

function TablesManager() {
  const [tables, setTables] = useState<Table[]>([]);
  const [tableName, setTableName] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showCreationTable, setShowCreationTable] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("restaurant_tables");
    if (stored) setTables(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurant_tables", JSON.stringify(tables));
  }, [tables]);

  const handleAddOrUpdateTable = () => {
    if (!tableName.trim()) return;

    const newTable: Table = {
      name: tableName,
      products: selectedProducts,
    };

    if (editingIndex !== null) {
      const updated = [...tables];
      updated[editingIndex] = newTable;
      setTables(updated);
      setEditingIndex(null);
    } else {
      setTables([...tables, newTable]);
    }

    setTableName("");
    setSelectedProducts([]);
    setShowCreationTable(false);
  };

  const handleEdit = (index: number) => {
    const table = tables[index];
    setTableName(table.name);
    setSelectedProducts(table.products);
    setEditingIndex(index);
    setShowCreationTable(true);
  };

  const handleDelete = (index: number) => {
    const updated = tables.filter((_, i) => i !== index);
    setTables(updated);
  };

  const createTable = () => {
    setShowCreationTable(true);
  };

  return (
    <div className="p-4 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Les tables</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Tout supprimer
        </button>
      </div>

      {showCreationTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-20 w-full h-full">
          <div className="relative bg-white p-6 rounded-xl shadow-xl w-full h-full">
            <button
              onClick={() => {
                setShowCreationTable(false);
                setTableName("");
                setSelectedProducts([]);
                setEditingIndex(null);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">
              {editingIndex !== null
                ? "Modifier la table"
                : "Créer une nouvelle table"}
            </h2>

            <input
              type="text"
              placeholder="Nom de la table"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />

            <div className="grid grid-cols-5 gap-2 mb-4">
              {allProducts.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 border rounded cursor-default flex justify-between items-center"
                  >
                    <p className="font-semibold">{product.name}</p>
                    <div className="flex items-center mt-2 gap-2">
                      <button
                        className="bg-red-500 text-white px-2 rounded"
                        onClick={() => {
                          const current: any = selectedProducts.find(
                            (p: any) => p.name === product.name
                          );
                          if (!current) return;
                          if (current.quantity <= 1) {
                            setSelectedProducts((prev: any) =>
                              prev.filter((p: any) => p.name !== product.name)
                            );
                          } else {
                            setSelectedProducts((prev: any) =>
                              prev.map((p: any) =>
                                p.name === product.name
                                  ? { ...p, quantity: p.quantity - 1 }
                                  : p
                              )
                            );
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="w-6 text-center">
                        {selectedProducts.find(
                          (p: any) => p.name === product.name
                        )?.quantity || 0}
                      </span>
                      <button
                        className="bg-green-500 text-white px-2 rounded"
                        onClick={() => {
                          const existing: any = selectedProducts.find(
                            (p: any) => p.name === product.name
                          );
                          if (existing) {
                            setSelectedProducts((prev: any) =>
                              prev.map((p: any) =>
                                p.name === product.name
                                  ? { ...p, quantity: p.quantity + 1 }
                                  : p
                              )
                            );
                          } else {
                            setSelectedProducts((prev: any) => [
                              ...prev,
                              { ...product, quantity: 1 },
                            ]);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleAddOrUpdateTable}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              {editingIndex !== null ? "Mettre à jour" : "Créer la table"}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 gap-5">
        <div
          className="mb-4 p-4 bg-gray-100 rounded shadow min-h-[200px] cursor-pointer"
          onClick={createTable}
        >
          <p className="flex justify-between align-center">Nouvelle table</p>
        </div>
        {tables.map((table: any, index: any) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">{table.name}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:underline"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </div>
            <ul className="pl-4 list-disc">
              {table.products.map((product: any, i: any) => (
                <li key={i}>
                  {product.quantity} x {product.name} ({product.price})
                </li>
              ))}
            </ul>

            <div className="mt-2 font-semibold">
              Total :{" "}
              {table.products
                .reduce((sum: any, product: any) => {
                  const numericPrice = parseFloat(
                    product.price.replace(",", ".").replace("€", "").trim()
                  );
                  return sum + numericPrice * (product.quantity || 1);
                }, 0)
                .toFixed(2)}{" "}
              €
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TablesManager;
