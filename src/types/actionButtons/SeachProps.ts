type SearchProps = {
  onSearch: (query: string, selectedFormat: string) => Promise<void>;
};

export default SearchProps;
