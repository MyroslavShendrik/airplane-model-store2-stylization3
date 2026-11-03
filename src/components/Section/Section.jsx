import PropTypes from "prop-types";
// import './Section.css'
// import css from "./Section.module.css"; //! CSS-модулі
import { TitleLugrasimoBold, Global } from './Section.styled'; //! Emotion

function Section({ title, children }) {
  return (
    <Global>
      {title && (
        // <h2
        //   // style={{
        //   //   marginBottom: "24px",
        //   //   fontSize: 48,
        //   //   textAlign: "center",
        //   //   color: "darkred",
        //   // }}
        //   // className="title"
        //   // className={css.title }
        //   // className={`${css.title} ${css.lugrasimoBold} `}
        //   className={css.titleLugrasimoBold}
        // >
        //   {title}
        // </h2>
        <TitleLugrasimoBold>{title}</TitleLugrasimoBold>
      )}
      {children}
    </Global>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
