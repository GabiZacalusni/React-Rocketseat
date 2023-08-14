import styles from "../components/Avatar.module.css";

export function Avatar(props){
  return(
    // eslint-disable-next-line react/prop-types
    <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src}></img>
  );
}