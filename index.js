const dev = document.querySelector(".name");
const btn = document.querySelector(".btn");
const tecnolgias = document.querySelector(".tecnologias");
const lista = document.querySelector(".lista");

btn.addEventListener("click", addTech);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTech();
  }
});

const armazenar = [];
let obj = {};

function addTech() {
  const tech = document.createElement("h5");
  tech.innerText = "Tecnologia: ";
  const techInput = document.createElement("input");
  techInput.type = "text";
  techInput.placeholder = "Adicione uma tecnologia";

  const titulo = document.createElement("h5");
  titulo.innerText = "Tempo de Experiência: ";

  const tempo = document.createElement("p");
  tempo.innerText = "0-2 anos";
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "main";
  radio.value = "0-2 anos";

  const tempo1 = document.createElement("p");
  tempo1.innerText = "3-4 anos";
  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.name = "main";
  radio1.value = "3-4 anos";

  const tempo2 = document.createElement("p");
  tempo2.innerText = "5+ anos";
  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.name = "main";
  radio2.value = "5+ anos";

  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "Cadastrar";
  button.addEventListener("click", () => {
    let main = document.querySelector("input[name='main']:checked").value;

    obj = { nome: dev.value, tech: techInput.value, tempo: main };
    armazenar.push(obj);

    const newLi = document.createElement("li");
    newLi.innerHTML = `Nome: ${dev.value} Tecnologia: ${techInput.value} - Experiência: ${main}`;

    lista.append(newLi);

    console.log(armazenar);
    techInput.value = "";
    radio.checked = false;
    radio1.checked = false;
    radio2.checked = false;
  });

  const btnExcluir = document.createElement("button");
  btnExcluir.type = "button";
  btnExcluir.innerText = "Cancelar";
  btnExcluir.addEventListener("click", () => {
    document.querySelector(".tecnologias").removeChild(tech);
    document.querySelector(".tecnologias").removeChild(titulo);
    document.querySelector(".tecnologias").removeChild(button);
    document.querySelector(".tecnologias").removeChild(btnExcluir);
  });

  tempo2.appendChild(radio2);
  tempo1.appendChild(radio1);
  tempo.appendChild(radio);
  titulo.append(tempo, tempo1, tempo2);
  tech.appendChild(techInput);
  tecnolgias.append(tech, titulo, button, btnExcluir);
}
