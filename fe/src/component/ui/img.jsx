import noimg from "@img/logo.webp";

export default function App({ path, className }) {
  return (
    <img
      src={`${import.meta.env.VITE_BEURL}/public/${path}`}
      alt="noimg"
      onError={(e) => {
        e.target.onError = null;
        e.target.src = noimg;
      }}
      className={className}
    />
  );
}
