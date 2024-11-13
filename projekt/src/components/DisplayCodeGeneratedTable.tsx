interface DisplayCodeGeneratedTableProps {
  htmlContent: string;
}

export const DisplayCodeGeneratedTable: React.FC<DisplayCodeGeneratedTableProps> = ({ htmlContent }) => {
  return (
    <>
      <div className='p-4 bg-white rounded-lg shadow-md overflow-x-auto'>
        <blockquote>
          <pre>{htmlContent}</pre>
        </blockquote>
      </div>
    </>
  );
};
