import css from "./CardItem.module.css";
import defaultImage from "./default.jpg"; //! Дефолтне зображення

console.log("default:", defaultImage);

//! Стилі для текстових полів
const textField = {
  fontSize: "18px",
  fontWeight: 700,
};

//! Стилі для значень текстових полів
const textFieldValue = {
  fontWeight: 400,
  fontStyle: "italic",
};

//! Стилі для заголовків зображень
const imageTitles = {
  textAlign: "center",
  color: "blue",
};

export default function CardItem({
  name,
  imageReal = defaultImage,
  imageAdditional = defaultImage,
  imageToy = defaultImage,
  category,
  productType,
  age,
  gender,
  showMovie,
  character,
  year,
  price,
  discription,
  interestingInfo,
  features,
}) {
  console.log("imageAdditional:",imageAdditional);
  //! Якщо зображення не завантажилося — показуємо default.jpg
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = defaultImage;
  };

  return (
    <>
      <h3 
        // style={{
        //   marginBottom: 12,
        //   padding: "12px 16px",
        //   fontSize: 32,
        //   textAlign: "center",
        //   borderRadius: 8,
        //   backgroundColor: "yellow",
        //   color: "blue",
        // }}
        className={css.itemTitle}
      >
        {name}
      </h3>

      <h4 className={css.imageTitles}>Основне зображення</h4>
      <img
        src={imageReal}
        alt={`${name} — основне зображення`}
        onError={handleImageError}
      />

      <h4 className={css.imageTitles}>Фото товару</h4>
      <img
        src={imageToy}
        alt={`${name} — фото товару`}
        onError={handleImageError}
      />
      {/* <div className={css.actualImageBox}>
        {urlActual.map((image, index) => (
          <img
            // style={{
            //   maxWidth: "calc((100% - 10px) / 2)",
            //   borderRadius: 4,
            // }}
            className={css.actualImage}
            key={index}
            src={image}
            alt={nameBrief}
            // width="200"
          />
        ))}
      </div> */}
       
      <h4 className={css.imageTitles}>Додаткове зображення</h4>
      <div className={css.additionalImageBox}>
        {imageAdditional.map((image, index) => (
        <img
        className={css.imageAdditional}
        key={index}
        src={image}
        alt={`${name} — додаткове фото`}
        onError={handleImageError}
        />
        ))}
      </div>
      {/* <img
        src={image?.additional || defaultImage}
        alt={`${name} — додаткове фото`}
        onError={handleImageError}
      /> */}

      <p className={css.textField}>
        Категорія: <span className={css.textFieldValue}>{category}</span>
      </p>

      <p className={css.textField}>
        Тип продукту: <span className={css.textFieldValue}>{productType}</span>
      </p>

      <p className={css.textField}>
        Вік: <span className={css.textFieldValue}>{age}</span>
      </p>

      <p className={css.textField}>
        Гендер: <span className={css.textFieldValue}>{gender}</span>
      </p>

      <p className={css.textField}>
        Де з'являвся: <span className={css.textFieldValue}>{showMovie}</span>
      </p>

      <p className={css.textField}>
        Герої: <span className={css.textFieldValue}>{character}</span>
      </p>

      <p className={css.textField}>
        Рік випуску: <span className={css.textFieldValue}>{year}</span>
      </p>

      <p className={css.textField}>
        Ціна: <span className={css.textFieldValue}>{price}</span>
      </p>

      <p className={css.textField}>
        Опис: <span className={css.textFieldValue}>{discription}</span>
      </p>

      {interestingInfo && (
        <p className={css.textField}>
          Цікаво: <span className={css.textFieldValue}>{interestingInfo}</span>
        </p>
      )}

      {features && (
        <div>
          <p className={css.textField}>Особливості:</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        // style={{
        //   width: "70%",
        //   margin: "20px auto",
        //   padding: "16px 32px",
        //   display: "inline-block",
        //   alignItems: "center",
        //   fontFamily: "Franklin Gothic Medium, Arial Narrow",
        //   fontWeight: 700,
        //   fontSize: "1.5rem",
        //   borderRadius: "12px",
        //   color: "#ffffff",
        //   cursor: "pointer",
        //   backgroundColor: "#008080",
        //   textShadow:
        //     "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
        //   boxShadow:
        //     "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
        // }}
        className={css.button}
        type="button"
      >
        Додати до кошику
      </button>
    </>
  );
}
