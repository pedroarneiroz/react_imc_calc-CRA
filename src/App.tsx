import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import  leftArrowImage  from "./assets/leftarrow.png"
import { GridItem } from './components/GridItem';

import { Level, Levels, calculateImc } from "./helpers/imc";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null);

  const handlaCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Por favor, preencha todos os campos")
    }
  }

  const handleBackBotton = () => {
    setToShow(null)
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Imagem da logomarca" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Indice de Massa Corpórea, parâmetro
            adotado pela OMS - Organização Mundial de Saúde para
            calcular o peso ideal de cada pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled = {toShow ? true : false }
          />
          <input
            type="number"
            placeholder="Digite seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled = {toShow ? true : false }
          />

          <button onClick={handlaCalculateButton} disabled = {toShow ? true : false }>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {Levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackBotton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }


        </div>
      </div>

    </div>
  );
};

export default App;
