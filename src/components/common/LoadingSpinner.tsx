import classes from "styles/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center">
      <div className={`${classes["lds-ring"]}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
