const data = [
  {
    name: "Salmon Panggang",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "pon" },
      { name: "Kacang Pinus", amount: 1, measurement: "cangkir" },
      { name: "Selada Mentega", amount: 2, measurement: "cangkir" },
      { name: "Labu Kuning", amount: 1, measurement: "sedang" },
      { name: "Minyak Zaitun", amount: 0.5, measurement: "cangkir" },
      { name: "Bawang Putih", amount: 3, measurement: "siung" },
    ],
    steps: [
      "Panaskan oven hingga 350 derajat.",
      "Oleskan minyak zaitun di sekitar loyang kaca.",
      "Tambahkan salmon, bawang putih, dan kacang pinus ke dalam piring.",
      "Panggang selama 15 menit.",
      "Tambahkan labu kuning dan masukkan kembali ke dalam oven selama 30 menit.",
      "Keluarkan dari oven dan biarkan dingin selama 15 menit. Tambahkan selada dan sajikan.",
    ],
  },
  {
    name: "Taco Ikan",
    ingredients: [
      { name: "Ikan Bandeng", amount: 1, measurement: "pon" },
      { name: "Keju", amount: 1, measurement: "cangkir" },
      { name: "Selada Bokor", amount: 2, measurement: "cangkir" },
      { name: "Tomat", amount: 2, measurement: "besar" },
      { name: "Tortilla", amount: 3, measurement: "sedang" },
    ],
    steps: [
      "Masak ikan di atas panggangan sampai panas.",
      "Letakkan ikan di atas 3 tortilla.",
      "Taburi dengan selada, tomat, dan keju.",
    ],
  },
];

const Ingredients = ({ data = [] }) => (
  <ul className="ingredients">
    {data.map((ingredient, i) => (
      <li key={i}>{ingredient.name}</li>
    ))}
  </ul>
);

const Instructions = ({ data = [] }) => (
  <section className="instructions">
    <h2>Instruksi Memasak</h2>
    {data.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
);

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <Ingredients data={ingredients} />
    <Instructions data={steps} />
  </section>
);

const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  </article>
);

ReactDOM.render(
  <Menu recipes={data} title="Resep Lezat" />,
  document.getElementById("react-container")
);
