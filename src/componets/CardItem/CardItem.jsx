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
        style={{
          marginBottom: 12,
          padding: "12px 16px",
          fontSize: 32,
          textAlign: "center",
          borderRadius: 8,
          backgroundColor: "yellow",
          color: "blue",
        }}
      >
        {name}
      </h3>

      <h4 style={imageTitles}>Основне зображення</h4>
      <img
        src={imageReal}
        alt={`${name} — основне зображення`}
        onError={handleImageError}
      />

      <h4 style={imageTitles}>Фото товару</h4>
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
       
      <h4 style={imageTitles}>Додаткове зображення</h4>
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

      <p style={textField}>
        Категорія: <span style={textFieldValue}>{category}</span>
      </p>

      <p style={textField}>
        Тип продукту: <span style={textFieldValue}>{productType}</span>
      </p>

      <p style={textField}>
        Вік: <span style={textFieldValue}>{age}</span>
      </p>

      <p style={textField}>
        Гендер: <span style={textFieldValue}>{gender}</span>
      </p>

      <p style={textField}>
        Де з'являвся: <span style={textFieldValue}>{showMovie}</span>
      </p>

      <p style={textField}>
        Герої: <span style={textFieldValue}>{character}</span>
      </p>

      <p style={textField}>
        Рік випуску: <span style={textFieldValue}>{year}</span>
      </p>

      <p style={textField}>
        Ціна: <span style={textFieldValue}>{price}</span>
      </p>

      <p style={textField}>
        Опис: <span style={textFieldValue}>{discription}</span>
      </p>

      {interestingInfo && (
        <p style={textField}>
          Цікаво: <span style={textFieldValue}>{interestingInfo}</span>
        </p>
      )}

      {features && (
        <div>
          <p style={textField}>Особливості:</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        style={{
          width: "70%",
          margin: "20px auto",
          padding: "16px 32px",
          display: "inline-block",
          alignItems: "center",
          fontFamily: "Franklin Gothic Medium, Arial Narrow",
          fontWeight: 700,
          fontSize: "1.5rem",
          borderRadius: "12px",
          color: "#ffffff",
          cursor: "pointer",
          backgroundColor: "#008080",
          textShadow:
            "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
          boxShadow:
            "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
        }}
        type="button"
      >
        Додати до кошику
      </button>
    </>
  );
}
