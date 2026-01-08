import Grid from "../../components/Grid";
import { images } from "../../data.js";
import useGame from "../../components/useGame";
import Modal from "../../components/Modal";

function GamePage() {  

  const { finishedItems, handleReset, stepsCount, checkItems, isWin } =
    useGame(images);
    
  const handleBtnReset = () => {
    images.sort(() => Math.random() - 0.5);
    handleReset()
  }
  return (
    <section className="game container">
      <div className="steps">{stepsCount}</div>
      <Grid
        images={images}
        finishedItems={finishedItems}
        checkItems={checkItems}
      />
      {isWin && (
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">
            Вы собрали все пары за {stepsCount} шагов
          </p>
          <button
            className="button modal-button"
            type="button"
            onClick={handleBtnReset}
          >
            Новая игра
          </button>
        </Modal>
      )}
    </section>
  );
}
export default GamePage;
