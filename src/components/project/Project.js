import "./Project.css";
const Project = (props) => {
  return (
    <div>
      <li className="project">
        <img src={props.img} alt={props.title} className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </li>
    </div>
  );
};

export default Project;
