import "./Avatar.css";

function Avatar({ src, alt }) {
  return (
    <img className="avatar" src={src} alt={alt} width="128" height="128" />
  );
}

export default Avatar;
