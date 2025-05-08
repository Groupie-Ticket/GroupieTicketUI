interface NavbarTabProps {
  label: string;
  onClick?: () => void;
}

export default function NavbarTab({ label, onClick }: NavbarTabProps) {
  return (
    <div
      onClick={onClick}
      className="text-white text-sm font-bold cursor-pointer hover:underline"
    >
      {label}
    </div>
  );
}