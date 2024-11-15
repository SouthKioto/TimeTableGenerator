interface DisplayCodeGeneratedTableProps {
  htmlContent: string;
}
// stworzenie komponentu który zwraca wygenerowany kod html
// React.FC<DisplayCodeGeneratedTableProps> - definicja komponentu funkcyjnego przyjmującego właściwość DisplayCodeGeneratedTableProps
// (dokładniej typy daneych zdefiniowane w interwejsie które będą przekazywane do komponentu)
export const DisplayCodeGeneratedTable: React.FC<DisplayCodeGeneratedTableProps> = ({ htmlContent }) => {
  return (
    <>
      <div className='p-4 bg-white rounded-lg shadow-md overflow-x-auto h-80'>
        <blockquote>
          <pre>{htmlContent}</pre>
        </blockquote>
      </div>
    </>
  );
};
