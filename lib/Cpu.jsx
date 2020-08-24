import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div style={output.loadAverage > 3 ? { color: styles.colors.red } : null}>
      <span>🧮 &nbsp;&nbsp;{output.loadAverage}</span>
    </div>
  );
};

export default render;
