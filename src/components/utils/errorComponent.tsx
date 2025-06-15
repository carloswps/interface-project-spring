export default function ErrorComponent() {
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
      </div>
    </div>
  );
}
