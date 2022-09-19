import { useTheme } from '../contexts/useTheme';

export const About = () => {
  const { mode } = useTheme();
  return (
    <section>
      <h1>Undraw Illustrations</h1>
      <div className="about-container">
        <div className="image-container">
          <h2>Web Innovation</h2>
          <img src={`img/undraw_proud_coder_${mode}.svg`} alt="Proud Coder" />
        </div>
        <div className="image-container">
          <h2>Problem Solving</h2>
          <img
            src={`img/undraw_feeling_proud_${mode}.svg`}
            alt="Feeling Proud"
          />
        </div>
        <div className="image-container">
          <h2>High Concept</h2>
          <img
            src={`img/undraw_conceptual_idea_${mode}.svg`}
            alt="Conceptual Idea"
          />
        </div>
      </div>
    </section>
  );
};
