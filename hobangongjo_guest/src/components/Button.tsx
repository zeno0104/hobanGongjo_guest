import "./Button.css";

type Props = {
  text: string;
  type: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export const Button = ({ text, type, onClick }: Props) => {
  return (
    <button className={`btn btn_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};
