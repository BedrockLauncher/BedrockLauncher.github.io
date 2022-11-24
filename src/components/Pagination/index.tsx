import ButtonText from '../ButtonText';

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="pagination">
      <ButtonText type="button" disabled={currentPage === 0} onClick={() => onPageChange(currentPage - 1)}>
        {'<'}
      </ButtonText>
      <div className="pages-numbers">
        {Array(totalPages)
          .fill(0)
          .map((p, i) => {
            return (
              <ButtonText onClick={() => onPageChange(i)} disabled={i === currentPage} type="button" key={'pb-' + i}>
                {i + 1}
              </ButtonText>
            );
          })}
      </div>
      <ButtonText type="button" disabled={currentPage === totalPages - 1} onClick={() => onPageChange(currentPage + 1)}>
        {'>'}
      </ButtonText>
    </div>
  );
};

export default Pagination;
