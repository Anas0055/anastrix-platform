type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-white",
    secondary:
      "border border-cyan-500 hover:bg-cyan-500 hover:text-black",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}