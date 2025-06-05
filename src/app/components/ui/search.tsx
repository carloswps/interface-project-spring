export default function Search() {
  return (
    <div className={"flex-center align-center flex"}>
      <div className={"flex-center align-center flex items-center"}>
        <input
          type={"search"}
          className={
            "block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-indigo-400 focus:ring-indigo-500"
          }
        />
        <button
          type="submit"
          className={
            "ml-2 inline-flex items-center rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
          }
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
