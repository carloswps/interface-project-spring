export default function DownloadButton() {
  const download = () => {
    let confirmation = window.confirm("Você realmente deseja baixar essa imagem?");
    if (confirmation) {
      const link = document.createElement("a");
      link.href = "Teste";
      link.download = "Teste";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Download Cancelado");
    }
  };

  return (
    <div className="download-button flex space-x-2">
      <button onClick={download}>Baixar</button>
      <button onClick={download}>Cancelar</button>
    </div>
  );
}
