const BarraPesquisa = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-gray-200">
      <input
        type="text"
        placeholder="Pesquisar por restaurante..."
        className="p-2 px-4 border border-gray-300 rounded-4"
      />
    </div>
  );
}

export default BarraPesquisa;