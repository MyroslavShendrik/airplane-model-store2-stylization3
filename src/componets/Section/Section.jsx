import css from "./Section.module.css";

export function Section({ title, children }) {
  return (
    <section>
      {title && (
        <h2
          // style={{
          //       marginBottom: "24px",
          //       fontSize: 48,
          //       textAlign: "center",
          //       color: "darkblue",
          //     }}
          className={css.title}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}


