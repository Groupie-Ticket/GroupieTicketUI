import NavBuy from './partials/NavBuy';
import FooterBuy from './partials/FooterBuy';
import Paso1 from './pasos/Paso1';
import Paso2 from './pasos/Paso2';
import Paso3 from './pasos/Paso3';
import CompraExitosa from './CompraExitosa';
import { useCompraStore } from '../../store/compraStore';
import { useNavigate } from 'react-router-dom';

export default function LayoutCompra() {
  const { currentStep } = useCompraStore();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    useCompraStore.setState({ currentStep: 1 });
  }

  if (currentStep === 4) {
    return (
      <div className="w-full min-h-screen bg-black text-black flex flex-col justify-between">
        <main className="flex-1 ">
          <CompraExitosa />
          <div className="mt-10 w-full flex justify-center">
            <button
              onClick={() => handleClick()}
              className="px-6 py-2 bg-white text-black rounded-lg text-base font-normal font-['Open_Sans']"
            >
              Volver al inicio
            </button>
          </div>
        </main>
      </div>
    );
  }

  const renderStep = () => {
    if (currentStep === 1) return <Paso1 />;
    if (currentStep === 2) return <Paso2 />;
    if (currentStep === 3) return <Paso3 />;
    return null;
  };

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col justify-between">
      <NavBuy currentStep={currentStep} />
      <main className="flex-1 px-20 py-10">{renderStep()}</main>
      <FooterBuy />
    </div>
  );
}
