type SearchProps = {
  onSearch: (query: string, extension: string) => Promise<void>;
};

export default SearchProps;
