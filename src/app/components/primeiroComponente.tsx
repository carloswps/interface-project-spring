type Props = {
  mensagem: string;
  nome?: string;
  idade?: number;
  email?: string;
  telefone?: string;
};

const PrimeiroComponente = ({
  mensagem,
  nome,
  idade,
  email,
  telefone,
}: Props) => {
  return (
    <div>
      <div>
        mensagem: {mensagem} - nome:{nome} - idade:{idade}
        <br />
        <h1>Teste de componente</h1>
      </div>
    </div>
  );
};

export default PrimeiroComponente;
