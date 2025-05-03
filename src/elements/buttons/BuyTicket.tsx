
interface BuyTicketProps {
  onClick: () => void;
}

export default function BuyTicket({ onClick }: BuyTicketProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg text-white text-base font-semibold"
    >
      Comprar boleto
    </button>
  );
}
